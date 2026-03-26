<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Course\CourseReviewService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    public function __construct(
        private CourseReviewService $reviewService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $user = Auth::user();
        $reviews = $this->reviewService->getUserReviews($user->id);

        $reviewsData = $reviews->map(fn($review) => [
            'id' => $review->id,
            'course_id' => $review->course_id,
            'course_title' => $review->course?->title,
            'rating' => $review->rating,
            'review' => $review->review,
            'created_at' => $review->created_at,
            'updated_at' => $review->updated_at,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'reviews' => $reviewsData,
            ]
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|exists:courses,id',
            'rating' => 'required|numeric|min:1|max:5',
            'review' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $existingReview = $this->reviewService->getUserReview($user->id, $request->course_id);

        if ($existingReview) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reviewed this course'
            ], 400);
        }

        $review = $this->reviewService->createReview([
            'user_id' => $user->id,
            'course_id' => $request->course_id,
            'rating' => $request->rating,
            'review' => $request->review,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Review submitted successfully',
            'data' => [
                'review' => [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'review' => $review->review,
                    'created_at' => $review->created_at,
                ],
            ]
        ], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'rating' => 'required|numeric|min:1|max:5',
            'review' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();
        $existingReview = $this->reviewService->getReviewById($id);

        if (!$existingReview || $existingReview->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Review not found'
            ], 404);
        }

        $review = $this->reviewService->updateReview($id, [
            'rating' => $request->rating,
            'review' => $request->review,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Review updated successfully',
            'data' => [
                'review' => [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'review' => $review->review,
                    'updated_at' => $review->updated_at,
                ],
            ]
        ]);
    }

    public function destroy(string $id): JsonResponse
    {
        $user = Auth::user();
        $review = $this->reviewService->getReviewById($id);

        if (!$review || $review->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Review not found'
            ], 404);
        }

        $this->reviewService->deleteReview($id);

        return response()->json([
            'success' => true,
            'message' => 'Review deleted successfully'
        ]);
    }

    public function myReview(string $courseId): JsonResponse
    {
        $user = Auth::user();
        $review = $this->reviewService->getUserReview($user->id, $courseId);

        if (!$review) {
            return response()->json([
                'success' => true,
                'data' => [
                    'review' => null,
                    'has_reviewed' => false,
                ]
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'review' => [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'review' => $review->review,
                    'created_at' => $review->created_at,
                    'updated_at' => $review->updated_at,
                ],
                'has_reviewed' => true,
            ]
        ]);
    }
}
