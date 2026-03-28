<?php

namespace App\Services;

use App\Models\Course\Course;
use App\Models\Course\CourseAssignment;
use App\Models\Course\CourseCart;
use App\Models\Course\CourseEnrollment;
use App\Models\Course\CourseSection;
use App\Models\Course\LessonResource;
use App\Models\Course\SectionQuiz;
use App\Models\Course\SectionLesson;
use App\Models\Course\WatchHistory;
use App\Models\User;
use App\Services\MediaService;
use App\Services\Course\CourseEnrollmentService;
use App\Services\Course\CoursePlayerService;
use App\Services\Course\CourseWishlistService;
use Illuminate\Support\Facades\Auth;
use Modules\Certificate\Models\CertificateTemplate;
use Modules\Certificate\Models\MarksheetTemplate;
use App\Models\Course\AssignmentSubmission;
use App\Models\Course\QuizSubmission;

class StudentService extends MediaService
{
   public function __construct(
      private InstructorService $instructorService,
      private CourseEnrollmentService $enrollmentService,
      private CoursePlayerService $coursePlaybackService,
      private CourseWishlistService $courseWishlistService
   ) {}

   function getCartCount(): int
   {
      $user = Auth::user();
      return CourseCart::where('user_id', $user->id)->count();
   }

   public function getEnrolledCourses(int|string $userId)
   {
      return $this->enrollmentService->getEnrollments(['user_id' => $userId]);
   }

   public function getEnrollmentById(int|string $id, int|string $userId)
   {
      $enrollment = $this->enrollmentService->getEnrollmentById((int) $id);

      if (!$enrollment || (string) $enrollment->user_id !== (string) $userId) {
         return null;
      }

      return $enrollment;
   }

   public function getProfileStats(int|string $userId): array
   {
      $enrolledCourses = CourseEnrollment::where('user_id', $userId)->count();
      $completedCourses = WatchHistory::where('user_id', $userId)
         ->whereNotNull('completion_date')
         ->count();

      return [
         'enrolled_courses' => $enrolledCourses,
         'completed_courses' => $completedCourses,
         'certificates' => $completedCourses,
         'total_watch_time' => $this->formatDuration($this->calculateWatchTimeSeconds($userId)),
      ];
   }

   function getStudentData(?string $tab = 'courses'): array
   {
      $props = [];
      $user = Auth::user();
      $instructor = $this->instructorService->getInstructorByUserId($user->id);
      $props['instructor'] = $instructor;

      switch ($tab) {
         case 'courses':
            $enrollments = $this->enrollmentService->getEnrollments(['user_id' => $user->id]);

            foreach ($enrollments as $enrollment) {
               $watch_history = $this->coursePlaybackService->getWatchHistory($enrollment->course_id, $user->id);
               $completion = $this->coursePlaybackService->calculateCompletion($enrollment->course, $watch_history);
               $enrollment->watch_history = $watch_history;
               $enrollment->completion = $completion;
            }

            $props['enrollments'] = $enrollments;
            break;

         case 'wishlist':
            $wishlists = $this->courseWishlistService->getWishlists(['user_id' => $user->id]);
            $props['wishlists'] = $wishlists;
            break;

         default:
            break;
      }

      return $props;
   }

   function updateProfile(array $data, string $id): User
   {
      $user = User::find($id);

      if (array_key_exists('photo', $data) && $data['photo']) {
         $data['photo'] = $this->addNewDeletePrev($user, $data['photo'], "profile");
      }

      $filteredData = array_filter($data, function ($value) {
         return $value !== null;
      });

      $user->update($filteredData);

      return $user;
   }

   private function calculateWatchTimeSeconds(int|string $userId): int
   {
      $lessonIds = WatchHistory::where('user_id', $userId)
         ->get(['completed_watching'])
         ->flatMap(function (WatchHistory $watchHistory) {
            $completedWatching = $watchHistory->completed_watching ?? [];

            return collect($completedWatching)
               ->filter(fn($item) => ($item['type'] ?? null) === 'lesson' && !empty($item['id']))
               ->pluck('id');
         })
         ->unique()
         ->values();

      if ($lessonIds->isEmpty()) {
         return 0;
      }

      return SectionLesson::whereIn('id', $lessonIds)
         ->pluck('duration')
         ->filter()
         ->sum(fn($duration) => $this->durationToSeconds($duration));
   }

   private function durationToSeconds(?string $duration): int
   {
      if (!$duration) {
         return 0;
      }

      $parts = array_map('intval', explode(':', $duration));

      if (count($parts) === 3) {
         [$hours, $minutes, $seconds] = $parts;
         return ($hours * 3600) + ($minutes * 60) + $seconds;
      }

      if (count($parts) === 2) {
         [$minutes, $seconds] = $parts;
         return ($minutes * 60) + $seconds;
      }

      return 0;
   }

   private function formatDuration(int $seconds): string
   {
      $hours = intdiv($seconds, 3600);
      $minutes = intdiv($seconds % 3600, 60);
      $remainingSeconds = $seconds % 60;

      return sprintf('%02d:%02d:%02d', $hours, $minutes, $remainingSeconds);
   }

   public function getEnrolledCourse(string $id, User $user): Course
   {
      $enrollment = CourseEnrollment::where('user_id', $user->id)
         ->where('course_id', $id)
         ->first();

      if (!$enrollment) {
         throw new \Exception('You are not enrolled in this course');
      }

      return Course::with(['instructor:id,user_id', 'instructor.user:id,name,photo'])->find($id);
   }

   public function getCourseModules(string $course_id)
   {
      return CourseSection::where('course_id', $course_id)
         ->with([
            'section_lessons',
            'section_quizzes'
         ])->get();
   }

   public function getCourseAssignments(string $course_id, User $user)
   {
      return CourseAssignment::with([
         'submissions' => function ($query) use ($user) {
            $query->where('user_id', $user->id);
         }
      ])
         ->where('course_id', $course_id)
         ->get();
   }

   public function getCourseSectionQuizzes(string $course_id, User $user)
   {
      return CourseSection::where('course_id', $course_id)
         ->with([
            'section_quizzes' => function ($quiz) use ($user) {
               $quiz->with([
                  'quiz_submissions' => function ($query) use ($user) {
                     $query->where('user_id', $user->id);
                  },
                  'quiz_questions' => function ($question) use ($user) {
                     $question->with(['answers' => function ($answer) use ($user) {
                        $answer->where('user_id', $user->id);
                     }]);
                  }
               ]);
            }
         ])
         ->whereHas('section_quizzes')
         ->get();
   }

   public function getCourseLessonResources(string $course_id)
   {
      return CourseSection::where('course_id', $course_id)
         ->whereHas('section_lessons', function ($query) {
            $query->whereHas('resources');
         })
         ->with([
            'section_lessons' => function ($lesson) {
               $lesson->whereHas('resources')
                  ->select([
                     'id',
                     'title',
                     'course_id',
                     'course_section_id'
                  ])
                  ->with(['resources']);
            }
         ])
         ->get();
   }

   function getEnrolledCourseOverview(string $course_id, string $tab, User $user): array
   {
      return [
         'modules' => $tab === 'modules' ? $this->getCourseModules($course_id) : null,
         'assignments' => $tab === 'assignments' ? $this->getCourseAssignments($course_id, $user) : null,
         'quizzes' => $tab === 'quizzes' ? $this->getCourseSectionQuizzes($course_id, $user) : null,
         'resources' => $tab === 'resources' ? $this->getCourseLessonResources($course_id) : null,
         'certificateTemplate' => $tab === 'certificate' ? $this->getActiveCertificateTemplate() : null,
         'marksheetTemplate' => $tab === 'certificate' ? $this->getActiveMarksheetTemplate() : null,
         'studentMarks' => $tab === 'certificate' ? $this->calculateStudentMarks($course_id, $user->id) : null,
      ];
   }

   function getActiveCertificateTemplate()
   {
      $template = CertificateTemplate::where('is_active', true)->first();

      // Return default template if no active template exists
      if (!$template) {
         return [
            'id' => 0,
            'name' => 'Default Template',
            'logo_path' => null,
            'template_data' => [
               'primaryColor' => '#3730a3',
               'secondaryColor' => '#4b5563',
               'backgroundColor' => '#dbeafe',
               'borderColor' => '#f59e0b',
               'titleText' => 'Certificate of Completion',
               'descriptionText' => 'This certificate is proudly presented to',
               'completionText' => 'for successfully completing the course',
               'footerText' => 'Authorized Certificate',
               'fontFamily' => 'serif',
            ],
            'is_active' => false,
         ];
      }

      return $template;
   }

   function getActiveMarksheetTemplate()
   {
      $template = MarksheetTemplate::where('is_active', true)->first();

      // Return default template if no active template exists
      if (!$template) {
         return [
            'id' => 0,
            'name' => 'Default Marksheet',
            'logo_path' => null,
            'template_data' => [
               'primaryColor' => '#1e40af',
               'secondaryColor' => '#64748b',
               'backgroundColor' => '#ffffff',
               'borderColor' => '#3b82f6',
               'headerText' => 'Academic Marksheet',
               'institutionName' => 'Learning Management System',
               'footerText' => 'This is an official academic record',
               'fontFamily' => 'sans-serif',
            ],
            'is_active' => false,
         ];
      }

      return $template;
   }

   function calculateStudentMarks(string $course_id, string $user_id): array
   {
      // Calculate Assignment Marks
      $assignments = CourseAssignment::where('course_id', $course_id)
         ->with(['submissions' => function ($query) use ($user_id) {
            $query->where('user_id', $user_id)
               ->where('status', 'graded'); // Only count graded submissions
         }])
         ->get();

      $totalAssignmentMarks = 0;
      $obtainedAssignmentMarks = 0;

      foreach ($assignments as $assignment) {
         $totalAssignmentMarks += $assignment->total_mark;

         // Get the best submission (highest marks)
         $bestSubmission = $assignment->submissions->sortByDesc('marks_obtained')->first();
         if ($bestSubmission) {
            $obtainedAssignmentMarks += $bestSubmission->marks_obtained;
         }
      }

      $assignmentPercentage = $totalAssignmentMarks > 0
         ? round(($obtainedAssignmentMarks / $totalAssignmentMarks) * 100, 2)
         : 0;

      // Calculate Quiz Marks
      $quizzes = SectionQuiz::where('course_id', $course_id)
         ->with(['quiz_submissions' => function ($query) use ($user_id) {
            $query->where('user_id', $user_id);
         }])
         ->get();

      $totalQuizMarks = 0;
      $obtainedQuizMarks = 0;

      foreach ($quizzes as $quiz) {
         $totalQuizMarks += $quiz->total_mark;

         // Get the best submission (highest total_marks)
         $bestSubmission = $quiz->quiz_submissions->sortByDesc('total_marks')->first();
         if ($bestSubmission) {
            $obtainedQuizMarks += $bestSubmission->total_marks;
         }
      }

      $quizPercentage = $totalQuizMarks > 0
         ? round(($obtainedQuizMarks / $totalQuizMarks) * 100, 2)
         : 0;

      // Calculate Overall Percentage
      $overallPercentage = 0;
      $hasAssignments = $totalAssignmentMarks > 0;
      $hasQuizzes = $totalQuizMarks > 0;

      if ($hasAssignments && $hasQuizzes) {
         // If both exist, average them
         $overallPercentage = round(($assignmentPercentage + $quizPercentage) / 2, 2);
      } elseif ($hasAssignments) {
         $overallPercentage = $assignmentPercentage;
      } elseif ($hasQuizzes) {
         $overallPercentage = $quizPercentage;
      }

      // Determine Grade
      $grade = $this->calculateGrade($overallPercentage);

      return [
         'assignment' => [
            'total' => $totalAssignmentMarks,
            'obtained' => $obtainedAssignmentMarks,
            'percentage' => $assignmentPercentage,
         ],
         'quiz' => [
            'total' => $totalQuizMarks,
            'obtained' => $obtainedQuizMarks,
            'percentage' => $quizPercentage,
         ],
         'overall' => [
            'percentage' => $overallPercentage,
            'grade' => $grade,
         ],
      ];
   }

   private function calculateGrade(float $percentage): string
   {
      if ($percentage >= 90) return 'A+';
      if ($percentage >= 85) return 'A';
      if ($percentage >= 80) return 'A-';
      if ($percentage >= 75) return 'B+';
      if ($percentage >= 70) return 'B';
      if ($percentage >= 65) return 'B-';
      if ($percentage >= 60) return 'C+';
      if ($percentage >= 55) return 'C';
      if ($percentage >= 50) return 'C-';
      if ($percentage >= 45) return 'D';
      return 'F';
   }
}
