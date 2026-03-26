<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Course\CourseCartService;
use App\Services\Course\CourseCouponService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function __construct(
        private CourseCartService $cartService,
        private CourseCouponService $couponService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $user = Auth::user();
        $couponCode = $request->get('coupon');
        $coupon = null;

        if ($couponCode) {
            $coupon = $this->couponService->getCoupon($couponCode);

            if ($coupon && !$this->couponService->isCouponValid($coupon)) {
                $coupon = null;
            }
        }

        $cart = $this->cartService->getCartItems($user->id);
        $calculatedCart = $this->cartService->calculateCart($cart, $coupon);

        $cartItems = $cart->map(fn($item) => [
            'id' => $item->id,
            'course' => [
                'id' => $item->course->id,
                'title' => $item->course->title,
                'slug' => $item->course->slug,
                'thumbnail' => $item->course->thumbnail,
                'pricing_type' => $item->course->pricing_type,
                'price' => $item->course->price,
                'discount' => $item->course->discount,
                'discount_price' => $item->course->discount_price,
                'instructor' => [
                    'id' => $item->course->instructor->id,
                    'name' => $item->course->instructor->user->name,
                ],
            ],
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'cart' => $cartItems,
                'coupon' => $coupon ? [
                    'id' => $coupon->id,
                    'code' => $coupon->code,
                    'discount' => $coupon->discount,
                ] : null,
                'subtotal' => $calculatedCart['subtotal'],
                'discounted_price' => $calculatedCart['discountedPrice'],
                'tax_amount' => $calculatedCart['taxAmount'],
                'total_price' => $calculatedCart['totalPrice'],
                'items_count' => $cart->count(),
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

        $existingItem = $this->cartService->getCartItem($user->id, $request->course_id);

        if ($existingItem) {
            return response()->json([
                'success' => false,
                'message' => 'Course already in cart'
            ], 400);
        }

        $this->cartService->addToCart($user->id, $request->course_id);
        $cartCount = $this->cartService->getCartCount($user->id);

        return response()->json([
            'success' => true,
            'message' => 'Course added to cart',
            'data' => [
                'cart_count' => $cartCount,
            ]
        ], 201);
    }

    public function remove(string $id): JsonResponse
    {
        $user = Auth::user();

        $this->cartService->removeFromCart($user->id, $id);
        $cartCount = $this->cartService->getCartCount($user->id);

        return response()->json([
            'success' => true,
            'message' => 'Course removed from cart',
            'data' => [
                'cart_count' => $cartCount,
            ]
        ]);
    }

    public function clear(): JsonResponse
    {
        $user = Auth::user();

        $this->cartService->clearCart($user->id);

        return response()->json([
            'success' => true,
            'message' => 'Cart cleared',
            'data' => [
                'cart_count' => 0,
            ]
        ]);
    }

    public function applyCoupon(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $coupon = $this->couponService->getCoupon($request->code);

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid coupon code'
            ], 400);
        }

        if (!$this->couponService->isCouponValid($coupon)) {
            return response()->json([
                'success' => false,
                'message' => 'Coupon has expired'
            ], 400);
        }

        $user = Auth::user();
        $cart = $this->cartService->getCartItems($user->id);
        $calculatedCart = $this->cartService->calculateCart($cart, $coupon);

        return response()->json([
            'success' => true,
            'message' => 'Coupon applied successfully',
            'data' => [
                'coupon' => [
                    'id' => $coupon->id,
                    'code' => $coupon->code,
                    'discount' => $coupon->discount,
                ],
                'subtotal' => $calculatedCart['subtotal'],
                'discounted_price' => $calculatedCart['discountedPrice'],
                'tax_amount' => $calculatedCart['taxAmount'],
                'total_price' => $calculatedCart['totalPrice'],
            ]
        ]);
    }

    public function removeCoupon(): JsonResponse
    {
        $user = Auth::user();
        $cart = $this->cartService->getCartItems($user->id);
        $calculatedCart = $this->cartService->calculateCart($cart, null);

        return response()->json([
            'success' => true,
            'message' => 'Coupon removed',
            'data' => [
                'subtotal' => $calculatedCart['subtotal'],
                'discounted_price' => $calculatedCart['discountedPrice'],
                'tax_amount' => $calculatedCart['taxAmount'],
                'total_price' => $calculatedCart['totalPrice'],
            ]
        ]);
    }
}
