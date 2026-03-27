<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CoursePlayerController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\WishlistController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\Api\AssignmentController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\ForumController;
use App\Http\Controllers\Api\WaafiPayController;

/*
|--------------------------------------------------------------------------
| Mobile API Routes
|--------------------------------------------------------------------------
|
| These routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group with Sanctum authentication.
|
*/

// API Version 1
Route::prefix('v1')->group(function () {

    // =========================================================================
    // PUBLIC ROUTES (No Authentication Required)
    // =========================================================================

    // Authentication - Strict rate limiting to prevent brute force
    Route::prefix('auth')->middleware('throttle:auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/google', [AuthController::class, 'googleAuth']);
    });

    // Password Reset - Very strict rate limiting
    Route::prefix('auth')->middleware('throttle:password-reset')->group(function () {
        Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
        Route::post('/reset-password', [AuthController::class, 'resetPassword']);
    });

    // Public Course Browsing - Higher rate limit for browsing
    Route::prefix('courses')->middleware('throttle:public')->group(function () {
        Route::get('/', [CourseController::class, 'index']);
        Route::get('/featured', [CourseController::class, 'featured']);
        Route::get('/categories', [CourseController::class, 'categories']);
        Route::get('/category/{id}', [CourseController::class, 'byCategory']);
        Route::get('/search', [CourseController::class, 'search']);
        Route::get('/{id}', [CourseController::class, 'show']);
        Route::get('/{id}/reviews', [CourseController::class, 'reviews']);
        Route::get('/{id}/curriculum', [CourseController::class, 'curriculum']);
    });

    // =========================================================================
    // PROTECTED ROUTES (Authentication Required)
    // =========================================================================

    Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {

        // Auth Management (no email verification required)
        Route::prefix('auth')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/user', [AuthController::class, 'user']);
            Route::post('/refresh', [AuthController::class, 'refresh']);
            Route::post('/verify-email/resend', [AuthController::class, 'resendVerification'])
                ->middleware('throttle:password-reset');
        });

        // =====================================================================
        // VERIFIED ROUTES (Email verification required)
        // =====================================================================
        Route::middleware(['apiVerified'])->group(function () {

        // Student Dashboard
        Route::prefix('student')->group(function () {
            Route::get('/dashboard', [StudentController::class, 'dashboard']);
            Route::get('/enrollments', [StudentController::class, 'enrollments']);
            Route::get('/enrollments/{id}', [StudentController::class, 'enrollmentDetails']);
            Route::get('/profile', [StudentController::class, 'profile']);
            Route::post('/profile', [StudentController::class, 'updateProfile'])
                ->middleware('throttle:uploads');
            Route::post('/change-password', [StudentController::class, 'changePassword'])
                ->middleware('throttle:sensitive');
            Route::post('/change-email', [StudentController::class, 'changeEmail'])
                ->middleware('throttle:sensitive');
        });

        // Course Player
        Route::prefix('player')->group(function () {
            Route::post('/init/{courseId}', [CoursePlayerController::class, 'initialize']);
            Route::get('/course/{courseId}', [CoursePlayerController::class, 'getCourse']);
            Route::get('/lesson/{watchHistoryId}/{lessonId}', [CoursePlayerController::class, 'getLesson']);
            Route::get('/quiz/{watchHistoryId}/{quizId}', [CoursePlayerController::class, 'getQuiz']);
            Route::post('/progress/{watchHistoryId}', [CoursePlayerController::class, 'updateProgress']);
            Route::post('/complete/{watchHistoryId}', [CoursePlayerController::class, 'markComplete']);
            Route::post('/finish/{watchHistoryId}', [CoursePlayerController::class, 'finishCourse']);
        });

        // Quizzes - Sensitive operations for submissions
        Route::prefix('quizzes')->group(function () {
            Route::get('/{id}', [QuizController::class, 'show']);
            Route::post('/submit', [QuizController::class, 'submit'])
                ->middleware('throttle:sensitive');
            Route::get('/submission/{id}', [QuizController::class, 'getSubmission']);
        });

        // Assignments - Sensitive operations for submissions
        Route::prefix('assignments')->group(function () {
            Route::get('/course/{courseId}', [AssignmentController::class, 'index']);
            Route::get('/{id}', [AssignmentController::class, 'show']);
            Route::post('/submit', [AssignmentController::class, 'submit'])
                ->middleware('throttle:uploads');
            Route::get('/submissions/{id}', [AssignmentController::class, 'getSubmissions']);
        });

        // Cart
        Route::prefix('cart')->group(function () {
            Route::get('/', [CartController::class, 'index']);
            Route::post('/add', [CartController::class, 'add']);
            Route::post('/remove/{id}', [CartController::class, 'remove']);
            Route::post('/clear', [CartController::class, 'clear']);
            Route::post('/apply-coupon', [CartController::class, 'applyCoupon']);
            Route::post('/remove-coupon', [CartController::class, 'removeCoupon']);
        });

        // Wishlist
        Route::prefix('wishlist')->group(function () {
            Route::get('/', [WishlistController::class, 'index']);
            Route::post('/add', [WishlistController::class, 'add']);
            Route::post('/remove/{id}', [WishlistController::class, 'remove']);
            Route::get('/check/{courseId}', [WishlistController::class, 'check']);
        });

        // Notifications
        Route::prefix('notifications')->group(function () {
            Route::get('/', [NotificationController::class, 'index']);
            Route::get('/unread-count', [NotificationController::class, 'unreadCount']);
            Route::get('/{id}', [NotificationController::class, 'show']);
            Route::post('/{id}/read', [NotificationController::class, 'markAsRead']);
            Route::post('/read-all', [NotificationController::class, 'markAllAsRead']);
        });

        // Reviews - Sensitive write operations
        Route::prefix('reviews')->group(function () {
            Route::get('/', [ReviewController::class, 'index']);
            Route::get('/my-review/{courseId}', [ReviewController::class, 'myReview']);
            Route::post('/', [ReviewController::class, 'store'])
                ->middleware('throttle:sensitive');
            Route::post('/{id}', [ReviewController::class, 'update'])
                ->middleware('throttle:sensitive');
            Route::delete('/{id}', [ReviewController::class, 'destroy'])
                ->middleware('throttle:sensitive');
        });

        // Forums - Sensitive write operations
        Route::prefix('forums')->group(function () {
            Route::get('/', [ForumController::class, 'all']);
            Route::get('/course/{courseId}', [ForumController::class, 'index']);
            Route::get('/lesson/{lessonId}', [ForumController::class, 'byLesson']);
            Route::get('/{id}', [ForumController::class, 'show']);
            Route::post('/', [ForumController::class, 'store'])
                ->middleware('throttle:sensitive');
            Route::post('/{id}/reply', [ForumController::class, 'reply'])
                ->middleware('throttle:sensitive');
            Route::put('/{id}', [ForumController::class, 'update'])
                ->middleware('throttle:sensitive');
            Route::delete('/{id}', [ForumController::class, 'destroy'])
                ->middleware('throttle:sensitive');
        });

        // Enrollment - Sensitive operation
        Route::prefix('enroll')->group(function () {
            Route::post('/free/{courseId}', [CourseController::class, 'enrollFree'])
                ->middleware('throttle:sensitive');
            Route::get('/check/{courseId}', [CourseController::class, 'checkEnrollment']);
        });

        // Certificate
        Route::prefix('certificate')->group(function () {
            Route::get('/course/{courseId}', [StudentController::class, 'getCertificate']);
            Route::get('/download/{courseId}', [StudentController::class, 'downloadCertificate']);
        });

        // WaafiPay Payment
        Route::prefix('payment')->group(function () {
            Route::get('/methods', [WaafiPayController::class, 'methods']);
            Route::post('/initiate', [WaafiPayController::class, 'initiate'])
                ->middleware('throttle:sensitive');
            Route::post('/status', [WaafiPayController::class, 'status']);
            Route::get('/history', [WaafiPayController::class, 'history']);
        });

        }); // end apiVerified
    });

    // WaafiPay Webhook (Public - No Auth Required)
    Route::post('/waafipay/webhook', [WaafiPayController::class, 'webhook'])
        ->middleware('throttle:public');
});
