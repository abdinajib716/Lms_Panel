<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Course\CourseWishlistService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WishlistController extends Controller
{
    public function __construct(
        private CourseWishlistService $wishlistService
    ) {}

    public function index(): JsonResponse
    {
        $user = Auth::user();
        $wishlists = $this->wishlistService->getWishlists($user->id);

        $wishlistsData = $wishlists->map(fn($wishlist) => [
            'id' => $wishlist->id,
            'course' => [
                'id' => $wishlist->course->id,
                'title' => $wishlist->course->title,
                'slug' => $wishlist->course->slug,
                'thumbnail' => $wishlist->course->thumbnail,
                'short_description' => $wishlist->course->short_description,
                'pricing_type' => $wishlist->course->pricing_type,
                'price' => $wishlist->course->price,
                'discount' => $wishlist->course->discount,
                'discount_price' => $wishlist->course->discount_price,
                'level' => $wishlist->course->level,
                'instructor' => [
                    'id' => $wishlist->course->instructor->id,
                    'name' => $wishlist->course->instructor->user->name,
                    'photo' => $wishlist->course->instructor->user->photo,
                ],
            ],
            'created_at' => $wishlist->created_at,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'wishlists' => $wishlistsData,
                'count' => $wishlists->count(),
            ]
        ]);
    }

    public function add(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|exists:courses,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $existing = $this->wishlistService->getWishlistItem($user->id, $request->course_id);

        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'Course already in wishlist'
            ], 400);
        }

        $wishlist = $this->wishlistService->createWishlist([
            'user_id' => $user->id,
            'course_id' => $request->course_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Course added to wishlist',
            'data' => [
                'wishlist_id' => $wishlist->id,
            ]
        ], 201);
    }

    public function remove(string $id): JsonResponse
    {
        $user = Auth::user();

        $wishlist = $this->wishlistService->getWishlistById($id);

        if (!$wishlist || $wishlist->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Wishlist item not found'
            ], 404);
        }

        $this->wishlistService->deleteWishlist($id);

        return response()->json([
            'success' => true,
            'message' => 'Course removed from wishlist'
        ]);
    }

    public function check(string $courseId): JsonResponse
    {
        $user = Auth::user();

        $wishlist = $this->wishlistService->getWishlistItem($user->id, $courseId);

        return response()->json([
            'success' => true,
            'data' => [
                'is_wishlisted' => $wishlist !== null,
                'wishlist_id' => $wishlist?->id,
            ]
        ]);
    }
}
