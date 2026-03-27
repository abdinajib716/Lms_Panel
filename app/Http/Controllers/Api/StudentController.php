<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\StudentService;
use App\Services\Course\CoursePlayerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function __construct(
        private StudentService $studentService,
        private CoursePlayerService $playerService
    ) {}

    public function dashboard(Request $request): JsonResponse
    {
        $user = $request->user();
        $enrollments = $this->studentService->getEnrolledCourses($user->id);
        $cartCount = $this->studentService->getCartCount($user->id);

        $enrollmentsData = $enrollments->map(function ($enrollment) {
            $watchHistory = $enrollment->course->watchHistories()
                ->where('user_id', $enrollment->user_id)
                ->first();

            $completion = $this->playerService->getCourseCompletion(
                $enrollment->course,
                $watchHistory
            );

            return [
                'id' => $enrollment->id,
                'enrollment_type' => $enrollment->enrollment_type,
                'entry_date' => $enrollment->entry_date,
                'expiry_date' => $enrollment->expiry_date,
                'course' => $this->formatCourseBasic($enrollment->course),
                'completion' => $completion,
                'watch_history_id' => $watchHistory?->id,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => [
                'enrollments' => $enrollmentsData,
                'cart_count' => $cartCount,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'photo' => $user->photo,
                    'email_verified' => $user->hasVerifiedEmail(),
                ],
            ]
        ]);
    }

    public function enrollments(Request $request): JsonResponse
    {
        $user = $request->user();
        $enrollments = $this->studentService->getEnrolledCourses($user->id);

        $enrollmentsData = $enrollments->map(function ($enrollment) {
            $watchHistory = $enrollment->course->watchHistories()
                ->where('user_id', $enrollment->user_id)
                ->first();

            $completion = $this->playerService->getCourseCompletion(
                $enrollment->course,
                $watchHistory
            );

            return [
                'id' => $enrollment->id,
                'enrollment_type' => $enrollment->enrollment_type,
                'entry_date' => $enrollment->entry_date,
                'expiry_date' => $enrollment->expiry_date,
                'course' => $this->formatCourseBasic($enrollment->course),
                'completion' => $completion,
                'watch_history_id' => $watchHistory?->id,
                'is_completed' => $watchHistory?->completion_date !== null,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => [
                'enrollments' => $enrollmentsData,
            ]
        ]);
    }

    public function enrollmentDetails(string $id): JsonResponse
    {
        $user = Auth::user();
        $enrollment = $this->studentService->getEnrollmentById($id, $user->id);

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'Enrollment not found'
            ], 404);
        }

        $course = $enrollment->course;
        $watchHistory = $course->watchHistories()
            ->where('user_id', $user->id)
            ->first();

        $completion = $this->playerService->getCourseCompletion($course, $watchHistory);

        $modules = $course->sections->map(function ($section) use ($watchHistory) {
            return [
                'id' => $section->id,
                'title' => $section->title,
                'sort' => $section->sort,
                'lessons' => $section->sectionLessons->map(function ($lesson) use ($watchHistory) {
                    $isCompleted = $this->isContentCompleted($watchHistory, $lesson->id, 'lesson');
                    return [
                        'id' => $lesson->id,
                        'title' => $lesson->title,
                        'lesson_type' => $lesson->lesson_type,
                        'duration' => $lesson->duration,
                        'is_free' => $lesson->is_free,
                        'is_completed' => $isCompleted,
                    ];
                }),
                'quizzes' => $section->sectionQuizzes->map(function ($quiz) use ($watchHistory) {
                    $isCompleted = $this->isContentCompleted($watchHistory, $quiz->id, 'quiz');
                    return [
                        'id' => $quiz->id,
                        'title' => $quiz->title,
                        'total_mark' => $quiz->total_mark,
                        'pass_mark' => $quiz->pass_mark,
                        'is_completed' => $isCompleted,
                    ];
                }),
            ];
        });

        $assignments = $course->assignments->map(fn($assignment) => [
            'id' => $assignment->id,
            'title' => $assignment->title,
            'total_mark' => $assignment->total_mark,
            'deadline' => $assignment->deadline,
            'submissions_count' => $assignment->submissions()->where('user_id', $user->id)->count(),
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'enrollment' => [
                    'id' => $enrollment->id,
                    'enrollment_type' => $enrollment->enrollment_type,
                    'entry_date' => $enrollment->entry_date,
                    'expiry_date' => $enrollment->expiry_date,
                ],
                'course' => $this->formatCourseDetailed($course),
                'modules' => $modules,
                'assignments' => $assignments,
                'completion' => $completion,
                'watch_history_id' => $watchHistory?->id,
                'is_completed' => $watchHistory?->completion_date !== null,
            ]
        ]);
    }

    public function profile(Request $request): JsonResponse
    {
        $user = $request->user();
        $stats = $this->studentService->getProfileStats($user->id);

        return response()->json([
            'success' => true,
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role,
                    'photo' => $user->photo,
                    'email_verified_at' => $user->email_verified_at,
                    'created_at' => $user->created_at,
                ],
                'stats' => $stats,
            ]
        ]);
    }

    public function updateProfile(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:1024',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();
        $user->name = $request->name;

        if ($request->hasFile('photo')) {
            if ($user->photo) {
                Storage::delete($user->photo);
            }
            $path = $request->file('photo')->store('users', 'public');
            $user->photo = Storage::url($path);
        }

        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Profile updated successfully',
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'photo' => $user->photo,
                ]
            ]
        ]);
    }

    public function changePassword(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Current password is incorrect'
            ], 400);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Password changed successfully'
        ]);
    }

    public function changeEmail(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email,' . $request->user()->id,
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Password is incorrect'
            ], 400);
        }

        $user->email = $request->email;
        $user->email_verified_at = null;
        $user->save();

        $user->sendEmailVerificationNotification();

        return response()->json([
            'success' => true,
            'message' => 'Email changed successfully. Please verify your new email.'
        ]);
    }

    public function getCertificate(string $courseId): JsonResponse
    {
        $user = Auth::user();
        $certificateData = $this->studentService->getCertificateData($user->id, $courseId);

        if (!$certificateData) {
            return response()->json([
                'success' => false,
                'message' => 'Certificate not available. Course must be completed first.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $certificateData
        ]);
    }

    public function downloadCertificate(string $courseId): JsonResponse
    {
        $user = Auth::user();
        $downloadUrl = $this->studentService->getCertificateDownloadUrl($user->id, $courseId);

        if (!$downloadUrl) {
            return response()->json([
                'success' => false,
                'message' => 'Certificate not available'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'download_url' => $downloadUrl
            ]
        ]);
    }

    private function formatCourseBasic($course): array
    {
        return [
            'id' => $course->id,
            'title' => $course->title,
            'slug' => $course->slug,
            'thumbnail' => $course->thumbnail,
            'level' => $course->level,
            'instructor' => [
                'id' => $course->instructor->id,
                'name' => $course->instructor->user->name,
                'photo' => $course->instructor->user->photo,
            ],
        ];
    }

    private function formatCourseDetailed($course): array
    {
        return [
            'id' => $course->id,
            'title' => $course->title,
            'slug' => $course->slug,
            'short_description' => $course->short_description,
            'description' => $course->description,
            'thumbnail' => $course->thumbnail,
            'banner' => $course->banner,
            'preview' => $course->preview,
            'level' => $course->level,
            'language' => $course->language,
            'pricing_type' => $course->pricing_type,
            'instructor' => [
                'id' => $course->instructor->id,
                'name' => $course->instructor->user->name,
                'photo' => $course->instructor->user->photo,
            ],
        ];
    }

    private function isContentCompleted($watchHistory, $contentId, $type): bool
    {
        if (!$watchHistory || !$watchHistory->completed_watching) {
            return false;
        }

        $completed = is_array($watchHistory->completed_watching)
            ? $watchHistory->completed_watching
            : json_decode($watchHistory->completed_watching, true);

        foreach ($completed as $item) {
            if ($item['id'] == $contentId && $item['type'] == $type) {
                return true;
            }
        }

        return false;
    }
}
