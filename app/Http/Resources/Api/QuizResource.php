<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'summary' => $this->when($request->routeIs('api.player.*'), $this->summary),
            'hours' => $this->when($request->routeIs('api.player.*'), $this->hours),
            'minutes' => $this->when($request->routeIs('api.player.*'), $this->minutes),
            'seconds' => $this->when($request->routeIs('api.player.*'), $this->seconds),
            'total_mark' => $this->total_mark,
            'pass_mark' => $this->pass_mark,
            'retake' => $this->when($request->routeIs('api.player.*'), $this->retake),
            'questions_count' => $this->when($this->relationLoaded('quizQuestions'), $this->quizQuestions->count()),
            'questions' => QuizQuestionResource::collection($this->whenLoaded('quizQuestions')),
        ];
    }
}
