<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course\CourseLiveClass;
use App\Services\Course\CourseEnrollmentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LiveClassController extends Controller
{
    public function __construct(
        private CourseEnrollmentService $enrollmentService
    ) {}

    public function index(string $courseId): JsonResponse
    {
        $user = Auth::user();

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse($user->id, $courseId);

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $liveClasses = CourseLiveClass::where('course_id', $courseId)
            ->orderBy('class_date_and_time')
            ->get();

        $liveClassesData = $liveClasses->map(function ($liveClass) {
            $status = $this->getLiveClassStatus($liveClass);

            return [
                'id' => $liveClass->id,
                'class_topic' => $liveClass->class_topic,
                'class_date_and_time' => $liveClass->class_date_and_time,
                'class_note' => $liveClass->class_note,
                'provider' => $liveClass->provider,
                'status' => $status,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => [
                'live_classes' => $liveClassesData,
            ]
        ]);
    }

    public function show(string $id): JsonResponse
    {
        $user = Auth::user();

        $liveClass = CourseLiveClass::with('course')->find($id);

        if (!$liveClass) {
            return response()->json([
                'success' => false,
                'message' => 'Live class not found'
            ], 404);
        }

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse(
            $user->id,
            $liveClass->course_id
        );

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $status = $this->getLiveClassStatus($liveClass);

        return response()->json([
            'success' => true,
            'data' => [
                'live_class' => [
                    'id' => $liveClass->id,
                    'class_topic' => $liveClass->class_topic,
                    'class_date_and_time' => $liveClass->class_date_and_time,
                    'class_note' => $liveClass->class_note,
                    'provider' => $liveClass->provider,
                    'status' => $status,
                    'course' => [
                        'id' => $liveClass->course->id,
                        'title' => $liveClass->course->title,
                    ],
                ],
            ]
        ]);
    }

    public function getJoinInfo(string $id): JsonResponse
    {
        $user = Auth::user();

        $liveClass = CourseLiveClass::find($id);

        if (!$liveClass) {
            return response()->json([
                'success' => false,
                'message' => 'Live class not found'
            ], 404);
        }

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse(
            $user->id,
            $liveClass->course_id
        );

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $status = $this->getLiveClassStatus($liveClass);

        if ($status !== 'live') {
            return response()->json([
                'success' => false,
                'message' => 'Live class is not currently active'
            ], 400);
        }

        $additionalInfo = is_string($liveClass->additional_info)
            ? json_decode($liveClass->additional_info, true)
            : $liveClass->additional_info;

        return response()->json([
            'success' => true,
            'data' => [
                'join_info' => [
                    'provider' => $liveClass->provider,
                    'meeting_id' => $additionalInfo['meeting_id'] ?? null,
                    'password' => $additionalInfo['password'] ?? null,
                    'join_url' => $additionalInfo['join_url'] ?? null,
                ],
            ]
        ]);
    }

    public function getZoomSignature(string $id): JsonResponse
    {
        $user = Auth::user();

        $liveClass = CourseLiveClass::find($id);

        if (!$liveClass) {
            return response()->json([
                'success' => false,
                'message' => 'Live class not found'
            ], 404);
        }

        $enrollment = $this->enrollmentService->getEnrollmentByUserAndCourse(
            $user->id,
            $liveClass->course_id
        );

        if (!$enrollment) {
            return response()->json([
                'success' => false,
                'message' => 'You are not enrolled in this course'
            ], 403);
        }

        $additionalInfo = is_string($liveClass->additional_info)
            ? json_decode($liveClass->additional_info, true)
            : $liveClass->additional_info;

        $meetingNumber = $additionalInfo['meeting_id'] ?? null;

        if (!$meetingNumber) {
            return response()->json([
                'success' => false,
                'message' => 'Meeting ID not found'
            ], 400);
        }

        $signature = $this->generateZoomSignature($meetingNumber, 0);

        return response()->json([
            'success' => true,
            'data' => [
                'signature' => $signature,
                'meeting_number' => $meetingNumber,
                'user_name' => $user->name,
                'user_email' => $user->email,
                'password' => $additionalInfo['password'] ?? '',
            ]
        ]);
    }

    private function getLiveClassStatus(CourseLiveClass $liveClass): string
    {
        $now = now();
        $classTime = \Carbon\Carbon::parse($liveClass->class_date_and_time);

        if ($now->lt($classTime)) {
            return 'upcoming';
        }

        $classEndTime = $classTime->copy()->addHours(2);

        if ($now->gte($classTime) && $now->lte($classEndTime)) {
            return 'live';
        }

        return 'ended';
    }

    private function generateZoomSignature(string $meetingNumber, int $role): string
    {
        $sdkKey = config('services.zoom.sdk_key', '');
        $sdkSecret = config('services.zoom.sdk_secret', '');

        $time = time() * 1000 - 30000;
        $data = base64_encode($sdkKey . $meetingNumber . $time . $role);
        $hash = hash_hmac('sha256', $data, $sdkSecret, true);
        $signature = base64_encode($sdkKey . '.' . $meetingNumber . '.' . $time . '.' . $role . '.' . base64_encode($hash));

        return rtrim(strtr($signature, '+/', '-_'), '=');
    }
}
