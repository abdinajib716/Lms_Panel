<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course\Course;
use App\Models\Course\WatchHistory;
use App\Services\Course\CoursePlayerService;
use App\Services\Course\CourseEnrollmentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CoursePlayerController extends Controller
{
    public function __construct(
        private CoursePlayerService $playerService,
        private CourseEnrollmentService $enrollmentService
    ) {}

    public function initialize(string $courseId): JsonResponse
    {
        $user = Auth::user();

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $courseId);

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $watchHistory = $this->playerService->initializeWatchHistory($user->id, $courseId);

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Course content is not available yet'
            ], 404);
        }

        $course = Course::with([
            'sections.sectionLessons',
            'sections.sectionQuizzes',
        ])->find($courseId);

        $completion = $this->playerService->getCourseCompletion($course, $watchHistory);

        return response()->json([
            'success' => true,
            'data' => [
                'watch_history_id' => $watchHistory->id,
                'current_watching' => [
                    'id' => $watchHistory->current_watching_id,
                    'type' => $watchHistory->current_watching_type,
                    'section_id' => $watchHistory->current_section_id,
                ],
                'completion' => $completion,
                'is_completed' => $watchHistory->completion_date !== null,
            ]
        ]);
    }

    public function getCourse(string $courseId): JsonResponse
    {
        $user = Auth::user();

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $courseId);

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $course = Course::with([
            'sections.sectionLessons.resources',
            'sections.sectionQuizzes.quizQuestions',
            'instructor.user',
        ])->find($courseId);

        $watchHistory = WatchHistory::where('user_id', $user->id)
            ->where('course_id', $courseId)
            ->first();

        if (!$watchHistory) {
            $watchHistory = $this->playerService->initializeWatchHistory($user->id, $courseId);

            if (!$watchHistory) {
                return response()->json([
                    'success' => false,
                    'message' => 'Course content is not available yet'
                ], 404);
            }
        }

        $completion = $this->playerService->getCourseCompletion($course, $watchHistory);
        $completedWatching = $watchHistory->completed_watching ?? [];

        $sections = $course->sections->map(function ($section) use ($completedWatching) {
            return [
                'id' => $section->id,
                'title' => $section->title,
                'sort' => $section->sort,
                'lessons' => $section->sectionLessons->map(function ($lesson) use ($completedWatching) {
                    return [
                        'id' => $lesson->id,
                        'title' => $lesson->title,
                        'lesson_type' => $lesson->lesson_type,
                        'duration' => $lesson->duration,
                        'is_free' => $lesson->is_free,
                        'is_completed' => $this->isCompleted($completedWatching, $lesson->id, 'lesson'),
                        'resources_count' => $lesson->resources->count(),
                    ];
                }),
                'quizzes' => $section->sectionQuizzes->map(function ($quiz) use ($completedWatching) {
                    return [
                        'id' => $quiz->id,
                        'title' => $quiz->title,
                        'total_mark' => $quiz->total_mark,
                        'pass_mark' => $quiz->pass_mark,
                        'questions_count' => $quiz->quizQuestions->count(),
                        'is_completed' => $this->isCompleted($completedWatching, $quiz->id, 'quiz'),
                    ];
                }),
            ];
        });

        return response()->json([
            'success' => true,
            'data' => [
                'course' => [
                    'id' => $course->id,
                    'title' => $course->title,
                    'thumbnail' => $course->thumbnail,
                    'instructor' => [
                        'id' => $course->instructor->id,
                        'name' => $course->instructor->user->name,
                        'photo' => $course->instructor->user->photo,
                    ],
                ],
                'sections' => $sections,
                'watch_history' => [
                    'id' => $watchHistory->id,
                    'current_watching_id' => $watchHistory->current_watching_id,
                    'current_watching_type' => $watchHistory->current_watching_type,
                    'current_section_id' => $watchHistory->current_section_id,
                    'next_watching_id' => $watchHistory->next_watching_id,
                    'next_watching_type' => $watchHistory->next_watching_type,
                    'prev_watching_id' => $watchHistory->prev_watching_id,
                    'prev_watching_type' => $watchHistory->prev_watching_type,
                ],
                'completion' => $completion,
                'is_completed' => $watchHistory->completion_date !== null,
            ]
        ]);
    }

    public function getLesson(string $watchHistoryId, string $lessonId): JsonResponse
    {
        $user = Auth::user();

        $watchHistory = WatchHistory::where('id', $watchHistoryId)
            ->where('user_id', $user->id)
            ->first();

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Watch history not found'
            ], 404);
        }

        $lesson = $this->playerService->getLesson($lessonId);

        if (!$lesson) {
            return response()->json([
                'success' => false,
                'message' => 'Lesson not found'
            ], 404);
        }

        $this->playerService->updateCurrentWatching($watchHistory, $lessonId, 'lesson');

        $resources = $lesson->resources->map(fn($resource) => [
            'id' => $resource->id,
            'title' => $resource->title,
            'resource_type' => $resource->resource_type,
            'resource_path' => $resource->resource_path,
        ]);

        $forums = $lesson->forums()->with('user:id,name,photo', 'replies.user:id,name,photo')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn($forum) => [
                'id' => $forum->id,
                'title' => $forum->title,
                'description' => $forum->description,
                'created_at' => $forum->created_at,
                'user' => [
                    'id' => $forum->user->id,
                    'name' => $forum->user->name,
                    'photo' => $forum->user->photo,
                ],
                'replies' => $forum->replies->map(fn($reply) => [
                    'id' => $reply->id,
                    'reply' => $reply->reply,
                    'created_at' => $reply->created_at,
                    'user' => [
                        'id' => $reply->user->id,
                        'name' => $reply->user->name,
                        'photo' => $reply->user->photo,
                    ],
                ]),
            ]);

        return response()->json([
            'success' => true,
            'data' => [
                'lesson' => [
                    'id' => $lesson->id,
                    'title' => $lesson->title,
                    'lesson_type' => $lesson->lesson_type,
                    'lesson_provider' => $lesson->lesson_provider,
                    'lesson_src' => $lesson->lesson_src,
                    'duration' => $lesson->duration,
                    'description' => $lesson->description,
                    'is_free' => $lesson->is_free,
                ],
                'resources' => $resources,
                'forums' => $forums,
                'navigation' => [
                    'prev_id' => $watchHistory->prev_watching_id,
                    'prev_type' => $watchHistory->prev_watching_type,
                    'next_id' => $watchHistory->next_watching_id,
                    'next_type' => $watchHistory->next_watching_type,
                ],
            ]
        ]);
    }

    public function getQuiz(string $watchHistoryId, string $quizId): JsonResponse
    {
        $user = Auth::user();

        $watchHistory = WatchHistory::where('id', $watchHistoryId)
            ->where('user_id', $user->id)
            ->first();

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Watch history not found'
            ], 404);
        }

        $quiz = $this->playerService->getQuiz($quizId);

        if (!$quiz) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz not found'
            ], 404);
        }

        $this->playerService->updateCurrentWatching($watchHistory, $quizId, 'quiz');

        $submission = $quiz->quizSubmissions()
            ->where('user_id', $user->id)
            ->first();

        $questions = $quiz->quizQuestions->map(fn($question) => [
            'id' => $question->id,
            'title' => $question->title,
            'type' => $question->type,
            'options' => is_string($question->options) ? json_decode($question->options, true) : $question->options,
            'sort' => $question->sort,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'quiz' => [
                    'id' => $quiz->id,
                    'title' => $quiz->title,
                    'summary' => $quiz->summary,
                    'hours' => $quiz->hours,
                    'minutes' => $quiz->minutes,
                    'seconds' => $quiz->seconds,
                    'total_mark' => $quiz->total_mark,
                    'pass_mark' => $quiz->pass_mark,
                    'retake' => $quiz->retake,
                ],
                'questions' => $questions,
                'submission' => $submission ? [
                    'id' => $submission->id,
                    'attempts' => $submission->attempts,
                    'correct_answers' => $submission->correct_answers,
                    'incorrect_answers' => $submission->incorrect_answers,
                    'total_marks' => $submission->total_marks,
                    'is_passed' => $submission->is_passed,
                ] : null,
                'can_attempt' => !$submission || $submission->attempts < $quiz->retake,
                'navigation' => [
                    'prev_id' => $watchHistory->prev_watching_id,
                    'prev_type' => $watchHistory->prev_watching_type,
                    'next_id' => $watchHistory->next_watching_id,
                    'next_type' => $watchHistory->next_watching_type,
                ],
            ]
        ]);
    }

    public function updateProgress(Request $request, string $watchHistoryId): JsonResponse
    {
        $user = Auth::user();

        $watchHistory = WatchHistory::where('id', $watchHistoryId)
            ->where('user_id', $user->id)
            ->first();

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Watch history not found'
            ], 404);
        }

        $contentId = $request->input('content_id');
        $contentType = $request->input('content_type');

        if ($contentId && $contentType) {
            $this->playerService->updateCurrentWatching($watchHistory, $contentId, $contentType);
        }

        $course = Course::with(['sections.sectionLessons', 'sections.sectionQuizzes'])
            ->find($watchHistory->course_id);

        $completion = $this->playerService->getCourseCompletion($course, $watchHistory->fresh());

        return response()->json([
            'success' => true,
            'data' => [
                'completion' => $completion,
                'watch_history' => [
                    'current_watching_id' => $watchHistory->current_watching_id,
                    'current_watching_type' => $watchHistory->current_watching_type,
                    'next_watching_id' => $watchHistory->next_watching_id,
                    'next_watching_type' => $watchHistory->next_watching_type,
                ],
            ]
        ]);
    }

    public function markComplete(Request $request, string $watchHistoryId): JsonResponse
    {
        $user = Auth::user();

        $watchHistory = WatchHistory::where('id', $watchHistoryId)
            ->where('user_id', $user->id)
            ->first();

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Watch history not found'
            ], 404);
        }

        $contentId = $request->input('content_id');
        $contentType = $request->input('content_type');

        $this->playerService->markAsCompleted($watchHistory, $contentId, $contentType);

        $course = Course::with(['sections.sectionLessons', 'sections.sectionQuizzes'])
            ->find($watchHistory->course_id);

        $completion = $this->playerService->getCourseCompletion($course, $watchHistory->fresh());

        return response()->json([
            'success' => true,
            'message' => 'Content marked as completed',
            'data' => [
                'completion' => $completion,
            ]
        ]);
    }

    public function finishCourse(string $watchHistoryId): JsonResponse
    {
        $user = Auth::user();

        $watchHistory = WatchHistory::where('id', $watchHistoryId)
            ->where('user_id', $user->id)
            ->first();

        if (!$watchHistory) {
            return response()->json([
                'success' => false,
                'message' => 'Watch history not found'
            ], 404);
        }

        if ($watchHistory->next_watching_id !== null) {
            return response()->json([
                'success' => false,
                'message' => 'Course is not fully completed yet'
            ], 400);
        }

        $this->playerService->finishCourse($watchHistory);

        return response()->json([
            'success' => true,
            'message' => 'Course completed successfully',
            'data' => [
                'completion_date' => $watchHistory->fresh()->completion_date,
            ]
        ]);
    }

    private function isCompleted($completedWatching, $contentId, $type): bool
    {
        if (!$completedWatching) {
            return false;
        }

        $completed = is_array($completedWatching) ? $completedWatching : json_decode($completedWatching, true);

        foreach ($completed as $item) {
            if ($item['id'] == $contentId && $item['type'] == $type) {
                return true;
            }
        }

        return false;
    }
}
