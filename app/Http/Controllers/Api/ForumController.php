<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Course\CourseForumService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ForumController extends Controller
{
    public function __construct(
        private CourseForumService $forumService
    ) {}

    public function all(): JsonResponse
    {
        $user = Auth::user();
        $forums = $this->forumService->getUserForums($user->id);

        $forumsData = $forums->map(fn($forum) => [
            'id' => $forum->id,
            'title' => $forum->title,
            'description' => $forum->description,
            'created_at' => $forum->created_at,
            'course' => $forum->course ? [
                'id' => $forum->course->id,
                'title' => $forum->course->title,
            ] : null,
            'replies_count' => $forum->replies->count(),
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'forums' => $forumsData,
            ]
        ]);
    }

    public function show(string $id): JsonResponse
    {
        $forum = $this->forumService->getForumById($id);

        if (!$forum) {
            return response()->json([
                'success' => false,
                'message' => 'Forum post not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'forum' => [
                    'id' => $forum->id,
                    'title' => $forum->title,
                    'description' => $forum->description,
                    'created_at' => $forum->created_at,
                    'user' => [
                        'id' => $forum->user->id,
                        'name' => $forum->user->name,
                        'photo' => $forum->user->photo,
                    ],
                    'course' => $forum->course ? [
                        'id' => $forum->course->id,
                        'title' => $forum->course->title,
                    ] : null,
                    'lesson' => $forum->sectionLesson ? [
                        'id' => $forum->sectionLesson->id,
                        'title' => $forum->sectionLesson->title,
                    ] : null,
                    'replies' => $forum->replies->map(fn($reply) => [
                        'id' => $reply->id,
                        'reply' => $reply->reply,
                        'created_at' => $reply->created_at,
                        'user' => [
                            'id' => $reply->user->id,
                            'name' => $reply->user->name,
                            'photo' => $reply->user->photo,
                        ],
                    ]),
                ],
            ]
        ]);
    }

    public function index(string $courseId): JsonResponse
    {
        $forums = $this->forumService->getForumsByCourse($courseId);

        $forumsData = $forums->map(fn($forum) => [
            'id' => $forum->id,
            'title' => $forum->title,
            'description' => $forum->description,
            'created_at' => $forum->created_at,
            'user' => [
                'id' => $forum->user->id,
                'name' => $forum->user->name,
                'photo' => $forum->user->photo,
            ],
            'replies_count' => $forum->replies->count(),
            'lesson' => $forum->sectionLesson ? [
                'id' => $forum->sectionLesson->id,
                'title' => $forum->sectionLesson->title,
            ] : null,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'forums' => $forumsData,
            ]
        ]);
    }

    public function byLesson(string $lessonId): JsonResponse
    {
        $forums = $this->forumService->getForumsByLesson($lessonId);

        $forumsData = $forums->map(fn($forum) => [
            'id' => $forum->id,
            'title' => $forum->title,
            'description' => $forum->description,
            'created_at' => $forum->created_at,
            'user' => [
                'id' => $forum->user->id,
                'name' => $forum->user->name,
                'photo' => $forum->user->photo,
            ],
            'replies' => $forum->replies->map(fn($reply) => [
                'id' => $reply->id,
                'reply' => $reply->reply,
                'created_at' => $reply->created_at,
                'user' => [
                    'id' => $reply->user->id,
                    'name' => $reply->user->name,
                    'photo' => $reply->user->photo,
                ],
            ]),
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'forums' => $forumsData,
            ]
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'course_id' => 'required|exists:courses,id',
            'section_lesson_id' => 'nullable|exists:section_lessons,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $forum = $this->forumService->createForum([
            'user_id' => $user->id,
            'title' => $request->title,
            'description' => $request->description,
            'course_id' => $request->course_id,
            'section_lesson_id' => $request->section_lesson_id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Forum post created successfully',
            'data' => [
                'forum' => [
                    'id' => $forum->id,
                    'title' => $forum->title,
                    'description' => $forum->description,
                    'created_at' => $forum->created_at,
                ],
            ]
        ], 201);
    }

    public function reply(Request $request, string $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'reply' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        $reply = $this->forumService->createReply([
            'user_id' => $user->id,
            'course_forum_id' => $id,
            'reply' => $request->reply,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Reply posted successfully',
            'data' => [
                'reply' => [
                    'id' => $reply->id,
                    'reply' => $reply->reply,
                    'created_at' => $reply->created_at,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'photo' => $user->photo,
                    ],
                ],
            ]
        ], 201);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();
        $forum = $this->forumService->getForumById($id);

        if (!$forum || $forum->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Forum post not found'
            ], 404);
        }

        $this->forumService->updateForum($id, [
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Forum post updated successfully'
        ]);
    }

    public function destroy(string $id): JsonResponse
    {
        $user = Auth::user();
        $forum = $this->forumService->getForumById($id);

        if (!$forum || $forum->user_id !== $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'Forum post not found'
            ], 404);
        }

        $this->forumService->deleteForum($id);

        return response()->json([
            'success' => true,
            'message' => 'Forum post deleted successfully'
        ]);
    }
}
