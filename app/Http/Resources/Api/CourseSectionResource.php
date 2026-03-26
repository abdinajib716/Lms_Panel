<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseSectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'sort' => $this->sort,
            'lessons' => LessonResource::collection($this->whenLoaded('sectionLessons')),
            'quizzes' => QuizResource::collection($this->whenLoaded('sectionQuizzes')),
        ];
    }
}
