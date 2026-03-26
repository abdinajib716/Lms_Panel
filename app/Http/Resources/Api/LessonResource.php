<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LessonResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'lesson_type' => $this->lesson_type,
            'lesson_provider' => $this->when($request->routeIs('api.player.*'), $this->lesson_provider),
            'lesson_src' => $this->when($request->routeIs('api.player.*'), $this->lesson_src),
            'duration' => $this->duration,
            'is_free' => $this->is_free,
            'description' => $this->when($request->routeIs('api.player.*'), $this->description),
            'resources' => LessonResourceResource::collection($this->whenLoaded('resources')),
        ];
    }
}
