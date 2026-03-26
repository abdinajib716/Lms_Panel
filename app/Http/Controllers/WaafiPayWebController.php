<?php

namespace App\Http\Controllers;

use App\Enums\UserType;
use App\Models\Course\Course;
use App\Models\Course\CourseEnrollment;
use App\Models\Instructor;
use App\Models\PaymentHistory;
use App\Models\PaymentTransaction;
use App\Services\Course\CourseEnrollmentService;
use App\Services\Payment\WaafiPayService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class WaafiPayWebController extends Controller
{
    public function __construct(
        private WaafiPayService $waafiPayService,
        private CourseEnrollmentService $enrollmentService,
    ) {}

    /**
     * Show the WaafiPay payment page for a course.
     */
    public function show(string $courseId)
    {
        $user = Auth::user();
        $course = Course::with(['instructor.user'])->findOrFail($courseId);

        // Check if already enrolled
        $enrollment = CourseEnrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->first();

        if ($enrollment) {
            return redirect()->route('course.details', [
                'slug' => $course->slug,
                'id' => $course->id,
            ])->with('info', 'You are already enrolled in this course.');
        }

        // Check for pending transaction
        $pendingTransaction = PaymentTransaction::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'processing'])
            ->where('created_at', '>=', now()->subMinutes(10))
            ->latest()
            ->first();

        $price = $course->discount ? $course->discount_price : $course->price;
        $wallets = $this->waafiPayService->getPaymentMethods();

        return Inertia::render('payment/waafipay', [
            'course' => $course,
            'price' => $price,
            'wallets' => $wallets,
            'pendingTransaction' => $pendingTransaction ? [
                'reference_id' => $pendingTransaction->reference_id,
                'status' => $pendingTransaction->status,
            ] : null,
        ]);
    }

    /**
     * Initiate a WaafiPay payment for a course.
     */
    public function initiate(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'phone_number' => 'required|string|min:9|max:15',
        ]);

        $user = Auth::user();
        $course = Course::findOrFail($request->course_id);

        // Prevent duplicate enrollment
        $existingEnrollment = CourseEnrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->first();

        if ($existingEnrollment) {
            return back()->with('error', 'You are already enrolled in this course.');
        }

        // Prevent duplicate pending payments (idempotency)
        $existingPending = PaymentTransaction::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'processing'])
            ->where('created_at', '>=', now()->subMinutes(5))
            ->first();

        if ($existingPending) {
            return back()->with('info', 'A payment is already in progress. Please wait for it to complete.')
                ->with('reference_id', $existingPending->reference_id);
        }

        $price = $course->discount ? $course->discount_price : $course->price;

        $result = $this->waafiPayService->purchase([
            'customer_id' => $user->id,
            'course_id' => $course->id,
            'phone_number' => $request->phone_number,
            'amount' => $price,
            'currency' => 'USD',
            'description' => "Payment for course: {$course->title}",
            'channel' => 'WEB',
        ]);

        // Link course_id to the transaction
        if (isset($result['transaction_id'])) {
            PaymentTransaction::where('id', $result['transaction_id'])
                ->update(['course_id' => $course->id]);
        }

        if ($result['success'] && $result['status'] === 'success') {
            // Immediate success — create enrollment
            $this->completeEnrollment($user, $course, $result['reference_id']);

            return redirect()->route('course.details', [
                'slug' => $course->slug,
                'id' => $course->id,
            ])->with('success', 'Payment successful! You are now enrolled.');
        }

        if ($result['success'] && $result['status'] === 'processing') {
            // Pending approval — return to payment page with reference
            return back()->with('info', $result['message'])
                ->with('reference_id', $result['reference_id']);
        }

        // Failed
        return back()->with('error', $result['message']);
    }

    /**
     * Check payment status (AJAX endpoint for polling).
     */
    public function checkStatus(Request $request)
    {
        $request->validate([
            'reference_id' => 'required|string',
        ]);

        $user = Auth::user();
        $transaction = PaymentTransaction::where('reference_id', $request->reference_id)
            ->where('user_id', $user->id)
            ->first();

        if (!$transaction) {
            return response()->json(['success' => false, 'message' => 'Transaction not found'], 404);
        }

        // If still processing, check with WaafiPay API
        if (in_array($transaction->status, ['pending', 'processing'])) {
            $statusResult = $this->waafiPayService->checkStatus($request->reference_id);

            // Reload transaction after status check
            $transaction->refresh();
        }

        if ($transaction->status === 'success') {
            // Check if enrollment already exists (idempotent)
            $existingEnrollment = CourseEnrollment::where('user_id', $user->id)
                ->where('course_id', $transaction->course_id)
                ->first();

            if (!$existingEnrollment) {
                $course = Course::findOrFail($transaction->course_id);
                $this->completeEnrollment($user, $course, $transaction->reference_id);
            }

            return response()->json([
                'success' => true,
                'status' => 'success',
                'message' => 'Payment completed successfully!',
                'redirect' => route('course.details', [
                    'slug' => $transaction->course->slug,
                    'id' => $transaction->course_id,
                ]),
            ]);
        }

        if ($transaction->status === 'failed') {
            return response()->json([
                'success' => false,
                'status' => 'failed',
                'message' => $transaction->error_message ?? 'Payment failed.',
            ]);
        }

        return response()->json([
            'success' => true,
            'status' => $transaction->status,
            'message' => 'Waiting for payment approval...',
        ]);
    }

    /**
     * Student transaction history page.
     */
    public function transactions(Request $request)
    {
        $user = Auth::user();

        $transactions = PaymentTransaction::with(['course'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('payment/transactions', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Admin transaction history page.
     */
    public function adminTransactions(Request $request)
    {
        $query = PaymentTransaction::with(['user', 'course'])
            ->orderBy('created_at', 'desc');

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('reference_id', 'LIKE', "%{$search}%")
                    ->orWhere('phone_number', 'LIKE', "%{$search}%")
                    ->orWhereHas('user', function ($userQ) use ($search) {
                        $userQ->where('name', 'LIKE', "%{$search}%");
                    });
            });
        }

        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }

        $transactions = $query->paginate(20);

        return Inertia::render('dashboard/transactions/index', [
            'transactions' => $transactions,
            'filters' => $request->only(['search', 'status']),
        ]);
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
                'user_id' => $user->id,
                'course_id' => $course->id,
                'enrollment_type' => 'paid',
            ]);
        }, 5);
    }
}
