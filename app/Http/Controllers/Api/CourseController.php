<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course\Course;
use App\Models\Course\CourseCategory;
use App\Services\Course\CourseService;
use App\Services\Course\CourseEnrollmentService;
use App\Services\Course\CourseReviewService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function __construct(
        private CourseService $courseService,
        private CourseEnrollmentService $enrollmentService,
        private CourseReviewService $reviewService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = [
            'status' => 'approved',
            'per_page' => $request->get('per_page', 12),
        ];

        $courses = Course::where('status', 'approved')
            ->with(['instructor.user'])
            ->withCount(['enrollments', 'reviews'])
            ->withAvg('reviews', 'rating')
            ->orderByDesc('created_at')
            ->paginate($filters['per_page']);

        return response()->json([
            'success' => true,
            'data' => [
                'courses' => $courses->map(fn($course) => $this->formatCourseCard($course)),
                'pagination' => [
                    'current_page' => $courses->currentPage(),
                    'last_page' => $courses->lastPage(),
                    'per_page' => $courses->perPage(),
                    'total' => $courses->total(),
                ]
            ]
        ]);
    }

    public function featured(Request $request): JsonResponse
    {
        $limit = $request->get('limit', 8);
        $courses = Course::where('status', 'approved')
            ->withCount(['enrollments', 'reviews'])
            ->withAvg('reviews', 'rating')
            ->orderByDesc('enrollments_count')
            ->limit($limit)
            ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'courses' => $courses->map(fn($course) => $this->formatCourseCard($course)),
            ]
        ]);
    }

    public function categories(): JsonResponse
    {
        $categories = CourseCategory::withCount('courses')
            ->orderBy('title')
            ->get()
            ->map(fn($category) => [
                'id' => $category->id,
                'title' => $category->title,
                'slug' => $category->slug,
                'icon' => $category->icon,
                'courses_count' => $category->courses_count,
            ]);

        return response()->json([
            'success' => true,
            'data' => [
                'categories' => $categories,
            ]
        ]);
    }

    public function byCategory(string $id, Request $request): JsonResponse
    {
        $category = CourseCategory::find($id);

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found'
            ], 404);
        }

        $courses = Course::where('status', 'approved')
            ->where('course_category_id', $id)
            ->withCount(['enrollments', 'reviews'])
            ->withAvg('reviews', 'rating')
            ->paginate($request->get('per_page', 12));

        return response()->json([
            'success' => true,
            'data' => [
                'category' => [
                    'id' => $category->id,
                    'title' => $category->title,
                    'slug' => $category->slug,
                ],
                'courses' => $courses->map(fn($course) => $this->formatCourseCard($course)),
                'pagination' => [
                    'current_page' => $courses->currentPage(),
                    'last_page' => $courses->lastPage(),
                    'per_page' => $courses->perPage(),
                    'total' => $courses->total(),
                ]
            ]
        ]);
    }

    public function search(Request $request): JsonResponse
    {
        $query = $request->get('q', '');

        $courses = Course::where('status', 'approved')
            ->where(function ($q) use ($query) {
                $q->where('title', 'like', "%{$query}%")
                    ->orWhere('short_description', 'like', "%{$query}%");
            })
            ->withCount(['enrollments', 'reviews'])
            ->withAvg('reviews', 'rating')
            ->paginate($request->get('per_page', 12));

        return response()->json([
            'success' => true,
            'data' => [
                'query' => $query,
                'courses' => $courses->map(fn($course) => $this->formatCourseCard($course)),
                'pagination' => [
                    'current_page' => $courses->currentPage(),
                    'last_page' => $courses->lastPage(),
                    'per_page' => $courses->perPage(),
                    'total' => $courses->total(),
                ]
            ]
        ]);
    }

    public function show(string $id): JsonResponse
    {
        $course = Course::with([
            'instructor.user',
            'course_category',
            'sections.section_lessons',
            'sections.section_quizzes',
            'requirements',
            'outcomes',
            'faqs',
        ])
            ->withCount(['enrollments', 'reviews'])
            ->withAvg('reviews', 'rating')
            ->find($id);

        if (!$course) {
            return response()->json([
                'success' => false,
                'message' => 'Course not found'
            ], 404);
        }

        $user = Auth::guard('sanctum')->user();
        $isEnrolled = false;
        $enrollmentId = null;

        if ($user) {
            $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $id);
            $isEnrolled = $enrollment !== null;
            $enrollmentId = $enrollment?->id;
        }

        return response()->json([
            'success' => true,
            'data' => [
                'course' => $this->formatCourseDetailed($course),
                'is_enrolled' => $isEnrolled,
                'enrollment_id' => $enrollmentId,
            ]
        ]);
    }

    public function reviews(string $id, Request $request): JsonResponse
    {
        $course = Course::find($id);

        if (!$course) {
            return response()->json([
                'success' => false,
                'message' => 'Course not found'
            ], 404);
        }

        $reviews = $course->reviews()
            ->with('user:id,name,photo')
            ->orderByDesc('created_at')
            ->paginate($request->get('per_page', 10));

        $stats = $this->reviewService->getCourseReviewStats($id);

        return response()->json([
            'success' => true,
            'data' => [
                'reviews' => $reviews->map(fn($review) => [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'review' => $review->review,
                    'created_at' => $review->created_at,
                    'user' => [
                        'id' => $review->user->id,
                        'name' => $review->user->name,
                        'photo' => $review->user->photo,
                    ],
                ]),
                'stats' => $stats,
                'pagination' => [
                    'current_page' => $reviews->currentPage(),
                    'last_page' => $reviews->lastPage(),
                    'per_page' => $reviews->perPage(),
                    'total' => $reviews->total(),
                ]
            ]
        ]);
    }

    public function curriculum(string $id): JsonResponse
    {
        $course = Course::with([
            'sections.section_lessons',
            'sections.section_quizzes',
        ])->find($id);

        if (!$course) {
            return response()->json([
                'success' => false,
                'message' => 'Course not found'
            ], 404);
        }

        $curriculum = $course->sections->map(fn($section) => [
            'id' => $section->id,
            'title' => $section->title,
            'sort' => $section->sort,
            'lessons' => $section->section_lessons->map(fn($lesson) => [
                'id' => $lesson->id,
                'title' => $lesson->title,
                'lesson_type' => $lesson->lesson_type,
                'duration' => $lesson->duration,
                'is_free' => $lesson->is_free,
            ]),
            'quizzes' => $section->section_quizzes->map(fn($quiz) => [
                'id' => $quiz->id,
                'title' => $quiz->title,
                'total_mark' => $quiz->total_mark,
            ]),
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'curriculum' => $curriculum,
            ]
        ]);
    }

    public function enrollFree(string $courseId): JsonResponse
    {
        $user = Auth::user();
        $course = Course::find($courseId);

        if (!$course) {
            return response()->json([
                'success' => false,
                'message' => 'Course not found'
            ], 404);
        }

        if ($course->pricing_type !== 'free') {
            return response()->json([
                'success' => false,
                'message' => 'This course is not free'
            ], 400);
        }

        $existingEnrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $courseId);

        if ($existingEnrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are already enrolled in this course'
            ], 400);
        }

        $enrollment = $this->enrollmentService->createCourseEnroll([
            'user_id' => $user->id,
            'course_id' => $courseId,
            'enrollment_type' => 'free',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Enrolled successfully',
            'data' => [
                'enrollment_id' => $enrollment->id,
            ]
        ], 201);
    }

    public function checkEnrollment(string $courseId): JsonResponse
    {
        $user = Auth::user();
        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $courseId);

        return response()->json([
            'success' => true,
            'data' => [
                'is_enrolled' => $enrollment !== null,
                'enrollment_id' => $enrollment?->id,
            ]
        ]);
    }

    private function formatCourseCard($course): array
    {
        return [
            'id' => $course->id,
            'title' => $course->title,
            'slug' => $course->slug,
            'short_description' => $course->short_description,
            'thumbnail' => $course->thumbnail,
            'level' => $course->level,
            'pricing_type' => $course->pricing_type,
            'price' => $course->price,
            'discount' => $course->discount,
            'discount_price' => $course->discount_price,
            'enrollments_count' => $course->enrollments_count ?? 0,
            'reviews_count' => $course->reviews_count ?? 0,
            'average_rating' => round($course->reviews_avg_rating ?? 0, 2),
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
            'price' => $course->price,
            'discount' => $course->discount,
            'discount_price' => $course->discount_price,
            'expiry_type' => $course->expiry_type,
            'expiry_duration' => $course->expiry_duration,
            'enrollments_count' => $course->enrollments_count ?? 0,
            'reviews_count' => $course->reviews_count ?? 0,
            'average_rating' => round($course->reviews_avg_rating ?? 0, 2),
            'instructor' => [
                'id' => $course->instructor->id,
                'name' => $course->instructor->user->name,
                'photo' => $course->instructor->user->photo,
                'bio' => $course->instructor->bio ?? null,
            ],
            'category' => $course->course_category ? [
                'id' => $course->course_category->id,
                'title' => $course->course_category->title,
                'slug' => $course->course_category->slug,
            ] : null,
            'requirements' => $course->requirements->map(fn($r) => [
                'id' => $r->id,
                'requirement' => $r->requirement,
            ]),
            'outcomes' => $course->outcomes->map(fn($o) => [
                'id' => $o->id,
                'outcome' => $o->outcome,
            ]),
            'faqs' => $course->faqs->map(fn($f) => [
                'id' => $f->id,
                'question' => $f->question,
                'answer' => $f->answer,
            ]),
            'sections_count' => $course->sections->count(),
            'lessons_count' => $course->sections->sum(fn($s) => $s->section_lessons->count()),
            'quizzes_count' => $course->sections->sum(fn($s) => $s->section_quizzes->count()),
        ];
    }
}
