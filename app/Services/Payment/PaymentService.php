<?php

namespace App\Services\Payment;

use App\Models\Course\Course;
use App\Models\User;
use App\Enums\UserType;
use App\Models\Instructor;
use App\Models\PaymentHistory;
use App\Services\Course\CourseCartService;
use App\Services\Course\CourseEnrollmentService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class PaymentService
{
    public function __construct(
        private CourseCartService $cartService,
        private CourseEnrollmentService $enrollmentService,
    ) {}

    public function coursesBuy(string $paymentType, string $transactionId, float $taxAmount, float $totalPrice, ?string $couponCode, $user_id = null)
    {
        $user_id = $user_id ?? Auth::user()->id;
        $invoice_no = random_int(10000000, 99999999);
        $cart = $this->cartService->getCartItems($user_id);
        $instructorRevenue = app('system_settings')->fields['instructor_revenue'];

        foreach ($cart as $item) {
            $instructor = Instructor::find($item->course->instructor_id);

            $history = PaymentHistory::create([
                'course_id' => $item->course_id,
                'user_id' => $user_id,
                'amount' => $totalPrice,
                'tax' => $taxAmount,
                'payment_type' => $paymentType,
                'coupon' => $couponCode,
                'transaction_id' => $transactionId,
                'invoice' => $invoice_no,
            ]);

            if ($instructor->user->role == UserType::ADMIN->value) {
                $history->update([
                    'admin_revenue' => $totalPrice,
                ]);
            } else {
                $instructorRevenueAmount = $totalPrice * ($instructorRevenue / 100);

                $history->update([
                    'instructor_revenue' => $instructorRevenueAmount - $taxAmount,
                    'admin_revenue' => ($totalPrice - $instructorRevenueAmount) + $taxAmount,
                ]);
            }

            $this->enrollmentService->createCourseEnroll([
                'user_id' => $user_id,
                'course_id' => $item->course_id,
                'enrollment_type' => 'paid',
            ]);
        }

        $this->cartService->clearCart($user_id);
    }

    public function coursesBuyFromCourseIds(
        array $courseIds,
        string $paymentType,
        string $transactionId,
        float $taxAmount,
        float $totalPrice,
        ?string $couponCode,
        int|string $userId
    ): void {
        $courseIds = array_values(array_unique(array_map('intval', $courseIds)));

        if (empty($courseIds) || PaymentHistory::where('transaction_id', $transactionId)->exists()) {
            return;
        }

        $invoice_no = random_int(10000000, 99999999);
        $instructorRevenue = app('system_settings')->fields['instructor_revenue'];
        $courses = Course::whereIn('id', $courseIds)->get()->keyBy('id');

        foreach ($courseIds as $courseId) {
            $course = $courses->get($courseId);

            if (!$course || $this->enrollmentService->getEnrollmentByCourseId($courseId, (int) $userId)) {
                continue;
            }

            $instructor = Instructor::find($course->instructor_id);

            $history = PaymentHistory::create([
                'course_id' => $courseId,
                'user_id' => $userId,
                'amount' => $totalPrice,
                'tax' => $taxAmount,
                'payment_type' => $paymentType,
                'coupon' => $couponCode,
                'transaction_id' => $transactionId,
                'invoice' => $invoice_no,
            ]);

            if ($instructor && $instructor->user->role == UserType::ADMIN->value) {
                $history->update([
                    'admin_revenue' => $totalPrice,
                ]);
            } elseif ($instructor) {
                $instructorRevenueAmount = $totalPrice * ($instructorRevenue / 100);

                $history->update([
                    'instructor_revenue' => $instructorRevenueAmount - $taxAmount,
                    'admin_revenue' => ($totalPrice - $instructorRevenueAmount) + $taxAmount,
                ]);
            }

            $this->enrollmentService->createCourseEnroll([
                'user_id' => $userId,
                'course_id' => $courseId,
                'enrollment_type' => 'paid',
            ]);
        }

        $this->cartService->removeCoursesFromCart((int) $userId, $courseIds);
    }

    /**
     * Convert currency using external API (Optional upgrade)
     * Uncomment the API call in convertCurrency() to use this
     * 
     * @param float $amount
     * @param string $fromCurrency
     * @param string $toCurrency
     * @return float|null
     */
    private function convertCurrencyWithAPI($amount, $fromCurrency, $toCurrency)
    {
        try {
            // Using free ExchangeRate-API (no API key required)
            $response = Http::timeout(5)->get("https://api.exchangerate-api.com/v4/latest/{$fromCurrency}");

            if ($response->successful()) {
                $data = $response->json();
                $rate = $data['rates'][$toCurrency] ?? null;

                if ($rate) {
                    return round($amount * $rate, 2);
                }
            }
        } catch (\Exception $e) {
            // API failed, fall back to fixed rates
        }

        return null;
    }
}
