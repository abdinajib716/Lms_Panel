<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course\CourseAssignment;
use App\Services\Course\AssignmentSubmissionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AssignmentController extends Controller
{
    public function __construct(
        private AssignmentSubmissionService $submissionService
    ) {}

    public function index(string $courseId): JsonResponse
    {
        $user = Auth::user();

        $assignments = CourseAssignment::where('course_id', $courseId)
            ->with(['submissions' => function ($query) use ($user) {
                $query->where('user_id', $user->id)->latest();
            }])
            ->orderBy('created_at')
            ->get();

        $assignmentsData = $assignments->map(function ($assignment) {
            $latestSubmission = $assignment->submissions->first();

            return [
                'id' => $assignment->id,
                'title' => $assignment->title,
                'total_mark' => $assignment->total_mark,
                'pass_mark' => $assignment->pass_mark,
                'retake' => $assignment->retake,
                'deadline' => $assignment->deadline,
                'late_submission' => $assignment->late_submission,
                'late_deadline' => $assignment->late_deadline,
                'submissions_count' => $assignment->submissions->count(),
                'latest_submission' => $latestSubmission ? [
                    'id' => $latestSubmission->id,
                    'status' => $latestSubmission->status,
                    'marks_obtained' => $latestSubmission->marks_obtained,
                    'submitted_at' => $latestSubmission->submitted_at,
                    'is_late' => $latestSubmission->is_late,
                ] : null,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => [
                'assignments' => $assignmentsData,
            ]
        ]);
    }

    public function show(string $id): JsonResponse
    {
        $user = Auth::user();

        $assignment = CourseAssignment::with(['submissions' => function ($query) use ($user) {
            $query->where('user_id', $user->id)->orderByDesc('created_at');
        }])->find($id);

        if (!$assignment) {
            return response()->json([
                'success' => false,
                'message' => 'Assignment not found'
            ], 404);
        }

        $submissions = $assignment->submissions->map(fn($submission) => [
            'id' => $submission->id,
            'attachment_type' => $submission->attachment_type,
            'attachment_path' => $submission->attachment_path,
            'comment' => $submission->comment,
            'submitted_at' => $submission->submitted_at,
            'marks_obtained' => $submission->marks_obtained,
            'instructor_feedback' => $submission->instructor_feedback,
            'status' => $submission->status,
            'attempt_number' => $submission->attempt_number,
            'is_late' => $submission->is_late,
        ]);

        $canSubmit = $this->canSubmitAssignment($assignment, $assignment->submissions->count());

        return response()->json([
            'success' => true,
            'data' => [
                'assignment' => [
                    'id' => $assignment->id,
                    'title' => $assignment->title,
                    'summary' => $assignment->summary,
                    'total_mark' => $assignment->total_mark,
                    'pass_mark' => $assignment->pass_mark,
                    'retake' => $assignment->retake,
                    'deadline' => $assignment->deadline,
                    'late_submission' => $assignment->late_submission,
                    'late_total_mark' => $assignment->late_total_mark,
                    'late_deadline' => $assignment->late_deadline,
                ],
                'submissions' => $submissions,
                'can_submit' => $canSubmit,
            ]
        ]);
    }

    public function submit(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'course_assignment_id' => 'required|exists:course_assignments,id',
            'attachment_type' => 'required|in:url,file',
            'attachment_path' => 'required_if:attachment_type,url|nullable|string',
            'attachment_file' => 'required_if:attachment_type,file|nullable|file|max:10240',
            'comment' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();
        $assignment = CourseAssignment::find($request->course_assignment_id);

        $existingSubmissions = $assignment->submissions()
            ->where('user_id', $user->id)
            ->count();

        if (!$this->canSubmitAssignment($assignment, $existingSubmissions)) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot submit this assignment anymore'
            ], 400);
        }

        $attachmentPath = $request->attachment_path;

        if ($request->hasFile('attachment_file')) {
            $attachmentPath = $request->file('attachment_file')
                ->store('assignments', 'public');
        }

        $isLate = now()->gt($assignment->deadline);

        $submission = $this->submissionService->submitAssignment([
            'user_id' => $user->id,
            'course_assignment_id' => $request->course_assignment_id,
            'attachment_type' => $request->attachment_type,
            'attachment_path' => $attachmentPath,
            'comment' => $request->comment,
            'is_late' => $isLate,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Assignment submitted successfully',
            'data' => [
                'submission' => [
                    'id' => $submission->id,
                    'status' => $submission->status,
                    'submitted_at' => $submission->submitted_at,
                    'is_late' => $submission->is_late,
                    'attempt_number' => $submission->attempt_number,
                ]
            ]
        ], 201);
    }

    public function getSubmissions(string $assignmentId): JsonResponse
    {
        $user = Auth::user();

        $submissions = $this->submissionService->getStudentSubmissions($assignmentId, $user->id);

        $submissionsData = $submissions->map(fn($submission) => [
            'id' => $submission->id,
            'attachment_type' => $submission->attachment_type,
            'attachment_path' => $submission->attachment_path,
            'comment' => $submission->comment,
            'submitted_at' => $submission->submitted_at,
            'marks_obtained' => $submission->marks_obtained,
            'instructor_feedback' => $submission->instructor_feedback,
            'status' => $submission->status,
            'attempt_number' => $submission->attempt_number,
            'is_late' => $submission->is_late,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'submissions' => $submissionsData,
            ]
        ]);
    }

    private function canSubmitAssignment(CourseAssignment $assignment, int $submissionsCount): bool
    {
        if ($submissionsCount >= $assignment->retake) {
            return false;
        }

        $now = now();

        if ($now->lte($assignment->deadline)) {
            return true;
        }

        if ($assignment->late_submission && $now->lte($assignment->late_deadline)) {
            return true;
        }

        return false;
    }
}
