<?php

namespace App\Http\Controllers\Api;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Models\Course\Course;
use App\Models\Course\CourseEnrollment;
use App\Models\Instructor;
use App\Models\PaymentHistory;
use App\Models\PaymentTransaction;
use App\Services\Course\CourseCartService;
use App\Services\Course\CourseCouponService;
use App\Services\Course\CourseEnrollmentService;
use App\Services\Payment\PaymentService;
use App\Services\Payment\WaafiPayService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class WaafiPayController extends Controller
{
    public function __construct(
        private WaafiPayService $waafiPayService,
        private CourseEnrollmentService $enrollmentService,
        private CourseCartService $cartService,
        private CourseCouponService $couponService,
        private PaymentService $paymentService,
    ) {}

    /**
     * Get available payment methods.
     */
    public function methods(): JsonResponse
    {
        if (!$this->waafiPayService->isEnabled()) {
            return response()->json([
                'success' => false,
                'message' => 'WaafiPay is not enabled.',
            ], 503);
        }

        return response()->json([
            'success' => true,
            'data' => $this->waafiPayService->getPaymentMethods(),
        ]);
    }

    /**
     * Initiate a payment for a course.
     */
    public function initiate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'course_id' => ['required', 'exists:courses,id'],
            'phone_number' => ['required', 'string', 'regex:/^(61|62|63|65|68|71|90)\d{7}$/'],
            'wallet_type' => ['nullable', 'string', 'in:evc_plus,zaad,jeeb,sahal'],
        ]);

        $user = Auth::user();
        $course = Course::findOrFail($validated['course_id']);

        // Prevent duplicate enrollment
        $existingEnrollment = CourseEnrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->first();

        if ($existingEnrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are already enrolled in this course.',
            ], 400);
        }

        if ($course->pricing_type === 'free') {
            return response()->json([
                'success' => false,
                'message' => 'This is a free course. Use the free enrollment endpoint.',
            ], 400);
        }

        // Prevent duplicate pending payments
        $existingPending = PaymentTransaction::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'processing'])
            ->where('created_at', '>=', now()->subMinutes(5))
            ->first();

        if ($existingPending) {
            return response()->json([
                'success' => true,
                'message' => 'A payment is already in progress.',
                'data' => [
                    'reference_id' => $existingPending->reference_id,
                    'status' => $existingPending->status,
                ],
            ]);
        }

        $price = $course->discount ? $course->discount_price : $course->price;

        $result = $this->waafiPayService->purchase([
            'phone_number' => $validated['phone_number'],
            'amount' => $price,
            'wallet_type' => $validated['wallet_type'] ?? null,
            'customer_name' => $user->name,
            'description' => "Payment for course: {$course->title}",
            'customer_id' => $user->id,
            'course_id' => $course->id,
            'channel' => 'API',
        ]);

        $statusCode = $result['success'] ? 200 : 400;

        if (isset($result['error_code']) && $result['error_code'] === 'NOT_CONFIGURED') {
            $statusCode = 503;
        }

        // If immediate success, create enrollment
        if ($result['success'] && $result['status'] === 'success') {
            $this->completeEnrollment($user, $course, $result['reference_id']);
            $result['enrollment_created'] = true;
        }

        return response()->json($result, $statusCode);
    }

    /**
     * Initiate a payment for all items currently in the authenticated user's cart.
     */
    public function initiateCart(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'phone_number' => ['required', 'string', 'regex:/^(61|62|63|65|68|71|90)\d{7}$/'],
            'wallet_type' => ['nullable', 'string', 'in:evc_plus,zaad,jeeb,sahal'],
            'coupon_code' => ['nullable', 'string'],
        ]);

        $user = Auth::user();
        $cart = $this->cartService->getCartItems($user->id);

        if ($cart->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Your cart is empty.',
            ], 400);
        }

        $freeCourses = $cart->filter(fn($item) => $item->course?->pricing_type === 'free');
        if ($freeCourses->isNotEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Free courses cannot be purchased through cart checkout.',
                'data' => [
                    'course_ids' => $freeCourses->pluck('course_id')->values(),
                ],
            ], 400);
        }

        $coupon = null;
        if (!empty($validated['coupon_code'])) {
            $coupon = $this->couponService->getCoupon($validated['coupon_code']);

            if (!$coupon) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid coupon code.',
                ], 400);
            }

            if (!$this->couponService->isCouponValid($coupon)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Coupon has expired.',
                ], 400);
            }
        }

        $existingPending = PaymentTransaction::where('user_id', $user->id)
            ->whereNull('course_id')
            ->whereIn('status', ['pending', 'processing'])
            ->where('created_at', '>=', now()->subMinutes(5))
            ->first();

        if ($existingPending && $this->isCartTransaction($existingPending)) {
            return response()->json([
                'success' => true,
                'message' => 'A cart payment is already in progress.',
                'data' => [
                    'reference_id' => $existingPending->reference_id,
                    'status' => $existingPending->status,
                    'checkout_type' => 'cart',
                ],
            ]);
        }

        $calculatedCart = $this->cartService->calculateCart($cart, $coupon);
        $courseIds = $cart->pluck('course_id')->map(fn($id) => (int) $id)->unique()->values()->all();
        $courseTitles = $cart->pluck('course.title')->filter()->values();

        $result = $this->waafiPayService->purchase([
            'phone_number' => $validated['phone_number'],
            'amount' => $calculatedCart['totalPrice'],
            'wallet_type' => $validated['wallet_type'] ?? null,
            'customer_name' => $user->name,
            'description' => 'Cart checkout for ' . $courseTitles->take(3)->implode(', '),
            'customer_id' => $user->id,
            'channel' => 'API',
            'metadata' => [
                'checkout_type' => 'cart',
                'course_ids' => $courseIds,
                'coupon_code' => $coupon?->code,
                'items_count' => count($courseIds),
                'subtotal' => $calculatedCart['subtotal'],
                'discounted_price' => $calculatedCart['discountedPrice'],
                'tax_amount' => $calculatedCart['taxAmount'],
                'total_price' => $calculatedCart['totalPrice'],
            ],
        ]);

        $statusCode = $result['success'] ? 200 : 400;

        if (isset($result['error_code']) && $result['error_code'] === 'NOT_CONFIGURED') {
            $statusCode = 503;
        }

        if ($result['success']) {
            $result['checkout_type'] = 'cart';
            $result['items_count'] = count($courseIds);
        }

        if ($result['success'] && $result['status'] === 'success') {
            $transaction = PaymentTransaction::where('reference_id', $result['reference_id'])->first();
            if ($transaction) {
                $this->completeCartCheckout($user, $transaction);
                $result['enrollment_created'] = true;
            }
        }

        return response()->json($result, $statusCode);
    }

    /**
     * Check payment status and auto-enroll on success.
     */
    public function status(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'reference_id' => ['required', 'string'],
        ]);

        $user = Auth::user();
        $transaction = PaymentTransaction::where('reference_id', $validated['reference_id'])
            ->where('user_id', $user->id)
            ->first();

        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction not found.',
            ], 404);
        }

        // If still processing, check with WaafiPay API
        if (in_array($transaction->status, ['pending', 'processing'])) {
            $this->waafiPayService->checkStatus($validated['reference_id']);
            $transaction->refresh();
        }

        // Auto-enroll on success
        if ($transaction->status === 'success') {
            if ($this->isCartTransaction($transaction)) {
                $this->completeCartCheckout($user, $transaction);
            } elseif ($transaction->course_id) {
                $existingEnrollment = CourseEnrollment::where('user_id', $user->id)
                    ->where('course_id', $transaction->course_id)
                    ->first();

                if (!$existingEnrollment) {
                    $course = Course::find($transaction->course_id);
                    if ($course) {
                        $this->completeEnrollment($user, $course, $transaction->reference_id);
                    }
                }
            }
        }

        return response()->json([
            'success' => true,
            'data' => [
                'reference_id' => $transaction->reference_id,
                'status' => $transaction->status,
                'amount' => $transaction->amount,
                'course_id' => $transaction->course_id,
                'checkout_type' => $this->isCartTransaction($transaction) ? 'cart' : 'course',
                'course_ids' => $this->transactionMeta($transaction)['course_ids'] ?? [],
                'enrollment_created' => $transaction->status === 'success',
                'error_message' => $transaction->status === 'failed' ? ($transaction->error_message ?? 'Payment failed.') : null,
            ],
        ]);
    }

    /**
     * Get payment history for authenticated user.
     */
    public function history(Request $request): JsonResponse
    {
        $perPage = $request->input('per_page', 20);

        $transactions = PaymentTransaction::with(['course:id,title,slug,thumbnail,pricing_type,price,discount_price'])
            ->where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        $data = $transactions->through(fn($tx) => [
            'id' => $tx->id,
            'reference_id' => $tx->reference_id,
            'course_id' => $tx->course_id,
            'checkout_type' => $this->isCartTransaction($tx) ? 'cart' : 'course',
            'course_ids' => $this->transactionMeta($tx)['course_ids'] ?? [],
            'phone_number' => $tx->phone_number,
            'amount' => $tx->amount,
            'currency' => $tx->currency,
            'status' => $tx->status,
            'wallet_type' => $tx->wallet_type,
            'description' => $tx->description,
            'created_at' => $tx->created_at,
            'completed_at' => $tx->completed_at,
            'course' => $tx->course ? [
                'id' => $tx->course->id,
                'title' => $tx->course->title,
                'slug' => $tx->course->slug,
                'thumbnail' => $tx->course->thumbnail,
            ] : null,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'transactions' => $data->items(),
                'pagination' => [
                    'current_page' => $transactions->currentPage(),
                    'last_page' => $transactions->lastPage(),
                    'per_page' => $transactions->perPage(),
                    'total' => $transactions->total(),
                ],
            ],
        ]);
    }

    /**
     * Handle WaafiPay webhook callback (public endpoint).
     */
    public function webhook(Request $request): JsonResponse
    {
        Log::info('WaafiPay Webhook Received', $request->all());

        $result = $this->waafiPayService->handleWebhook($request->all());

        // Auto-enroll on webhook success
        if ($result['success'] && isset($result['reference_id'])) {
            $transaction = PaymentTransaction::where('reference_id', $result['reference_id'])->first();

            if ($transaction && $transaction->status === 'success' && $transaction->user_id) {
                $user = \App\Models\User::find($transaction->user_id);

                if ($user && $this->isCartTransaction($transaction)) {
                    $this->completeCartCheckout($user, $transaction);
                } elseif ($transaction->course_id) {
                    $existingEnrollment = CourseEnrollment::where('user_id', $transaction->user_id)
                        ->where('course_id', $transaction->course_id)
                        ->first();

                    if (!$existingEnrollment) {
                        $course = Course::find($transaction->course_id);
                        if ($course) {
                            $this->completeEnrollment($user, $course, $transaction->reference_id);
                        }
                    }
                }
            }
        }

        return response()->json($result, $result['success'] ? 200 : 400);
    }

    /**
     * Complete enrollment after successful payment.
     */
    private function completeEnrollment($user, Course $course, string $referenceId): void
    {
        DB::transaction(function () use ($user, $course, $referenceId) {
            $price = $course->discount ? $course->discount_price : $course->price;
            $sellingTax = app('system_settings')->fields['selling_tax'] ?? 0;
            $taxAmount = round(($price * $sellingTax) / 100, 2);
            $totalPrice = round($price + $taxAmount, 2);

            $instructorRevenue = app('system_settings')->fields['instructor_revenue'] ?? 70;
            $instructor = Instructor::find($course->instructor_id);
            $invoice_no = random_int(10000000, 99999999);

            $history = PaymentHistory::create([
                'course_id' => $course->id,
                'user_id' => $user->id,
                'amount' => $totalPrice,
                'tax' => $taxAmount,
                'payment_type' => 'waafipay',
                'coupon' => null,
                'transaction_id' => $referenceId,
                'invoice' => $invoice_no,
            ]);

            if ($instructor && $instructor->user->role == UserType::ADMIN->value) {
                $history->update(['admin_revenue' => $totalPrice]);
            } elseif ($instructor) {
                $instructorRevenueAmount = $totalPrice * ($instructorRevenue / 100);
                $history->update([
                    'instructor_revenue' => $instructorRevenueAmount - $taxAmount,
                    'admin_revenue' => ($totalPrice - $instructorRevenueAmount) + $taxAmount,
                ]);
            }

            $this->enrollmentService->createCourseEnroll([
                'user_id' => $user->id,
                'course_id' => $course->id,
                'enrollment_type' => 'paid',
            ]);
        }, 5);
    }

    private function completeCartCheckout($user, PaymentTransaction $transaction): void
    {
        $meta = $this->transactionMeta($transaction);
        $courseIds = collect($meta['course_ids'] ?? [])
            ->map(fn($id) => (int) $id)
            ->filter()
            ->values()
            ->all();

        if (empty($courseIds)) {
            return;
        }

        $this->paymentService->coursesBuyFromCourseIds(
            $courseIds,
            'waafipay',
            $transaction->reference_id,
            (float) ($meta['tax_amount'] ?? 0),
            (float) ($meta['total_price'] ?? $transaction->amount),
            $meta['coupon_code'] ?? null,
            $user->id
        );
    }

    private function isCartTransaction(PaymentTransaction $transaction): bool
    {
        return ($this->transactionMeta($transaction)['checkout_type'] ?? null) === 'cart';
    }

    private function transactionMeta(PaymentTransaction $transaction): array
    {
        $payload = $transaction->request_payload ?? [];

        if (isset($payload['meta']) && is_array($payload['meta'])) {
            return $payload['meta'];
        }

        return [];
    }
}
