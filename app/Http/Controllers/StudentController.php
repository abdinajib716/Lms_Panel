<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateStudentProfileRequest;
use App\Models\Course\WatchHistory;
use App\Services\Course\CourseEnrollmentService;
use App\Services\Course\CoursePlayerService;
use App\Services\StudentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function __construct(
        protected StudentService $studentService,
        protected CoursePlayerService $coursePlayerService,
        protected CourseEnrollmentService $enrollmentService,
    ) {}

    /**
     * Display the student profile page.
     */
    public function index(Request $request, string $tab)
    {
        $hasVerifiedEmail = $request->user()->hasVerifiedEmail();

        if ($tab !== 'courses' && !$request->user()->hasVerifiedEmail()) {
            return redirect()
                ->route('student.index', ['tab' => 'courses'])
                ->with('error', 'Please verify your email address.');
        }

        $props = $this->studentService->getStudentData($tab);

        return Inertia::render('student/index', [
            ...$props,
            'tab' => $tab,
            'status' => $request->session()->get('status'),
            'hasVerifiedEmail' => $hasVerifiedEmail,
        ]);
    }

    public function show(int $id, string $tab)
    {
        $user = Auth::user();
        $course = $this->studentService->getEnrolledCourse($id, $user);
        $props = $this->studentService->getEnrolledCourseOverview($id, $tab, $user);
        $watchHistory = $this->coursePlayerService->getWatchHistory($id, $user->id);
        $completion = $this->coursePlayerService->calculateCompletion($course, $watchHistory);

        return Inertia::render('student/course', [
            ...$props,
            'tab' => $tab,
            'course' => $course,
            'watchHistory' => $watchHistory,
            'completion' => $completion,
        ]);
    }

    /**
     * Update the authenticated student's profile information.
     */
    public function update_profile(UpdateStudentProfileRequest $request)
    {
        $this->studentService->updateProfile($request->validated(), Auth::user()->id);

        return redirect()->back()->with('success', 'Profile updated successfully');
    }
}
