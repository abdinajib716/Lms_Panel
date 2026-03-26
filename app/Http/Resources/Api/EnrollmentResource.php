<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EnrollmentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'enrollment_type' => $this->enrollment_type,
            'entry_date' => $this->entry_date,
            'expiry_date' => $this->expiry_date,
            'course' => new CourseResource($this->whenLoaded('course')),
            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}
