<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course\SectionQuiz;
use App\Services\Course\SectionQuizService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{
    public function __construct(
        private SectionQuizService $quizService
    ) {}

    public function show(string $id): JsonResponse
    {
        $user = Auth::user();

        $quiz = SectionQuiz::with(['quizQuestions', 'quizSubmissions' => function ($query) use ($user) {
            $query->where('user_id', $user->id);
        }])->find($id);

        if (!$quiz) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz not found'
            ], 404);
        }

        $submission = $quiz->quizSubmissions->first();

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
            ]
        ]);
    }

    public function submit(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'submission_id' => 'nullable|exists:quiz_submissions,id',
            'section_quiz_id' => 'required|exists:section_quizzes,id',
            'answers' => 'required|array',
            'answers.*' => 'required|array',
            'answers.*.question_id' => 'required|exists:quiz_questions,id',
            'answers.*.answer' => 'required|array',
            'answers.*.answer.*' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $submission = $this->quizService->quizSubmission([
            'submission_id' => $request->submission_id,
            'section_quiz_id' => $request->section_quiz_id,
            'user_id' => $user->id,
            'answers' => $request->answers,
        ]);

        if (!$submission) {
            return response()->json([
                'success' => false,
                'message' => 'You have exhausted your retake attempts'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'message' => 'Quiz submitted successfully',
            'data' => [
                'submission' => [
                    'id' => $submission->id,
                    'attempts' => $submission->attempts,
                    'correct_answers' => $submission->correct_answers,
                    'incorrect_answers' => $submission->incorrect_answers,
                    'total_marks' => $submission->total_marks,
                    'is_passed' => $submission->is_passed,
                ]
            ]
        ]);
    }

    public function getSubmission(string $id): JsonResponse
    {
        $user = Auth::user();

        $submission = $this->quizService->getSubmission($id);

        if (!$submission || $submission->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Submission not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'submission' => [
                    'id' => $submission->id,
                    'attempts' => $submission->attempts,
                    'correct_answers' => $submission->correct_answers,
                    'incorrect_answers' => $submission->incorrect_answers,
                    'total_marks' => $submission->total_marks,
                    'is_passed' => $submission->is_passed,
                    'quiz' => [
                        'id' => $submission->sectionQuiz->id,
                        'title' => $submission->sectionQuiz->title,
                        'total_mark' => $submission->sectionQuiz->total_mark,
                        'pass_mark' => $submission->sectionQuiz->pass_mark,
                    ],
                ]
            ]
        ]);
    }
}
