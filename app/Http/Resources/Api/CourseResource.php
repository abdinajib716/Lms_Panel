<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'short_description' => $this->short_description,
            'description' => $this->when($this->relationLoaded('sections'), $this->description),
            'thumbnail' => $this->thumbnail,
            'banner' => $this->when($this->relationLoaded('sections'), $this->banner),
            'preview' => $this->when($this->relationLoaded('sections'), $this->preview),
            'level' => $this->level,
            'language' => $this->language,
            'pricing_type' => $this->pricing_type,
            'price' => $this->price,
            'discount' => $this->discount,
            'discount_price' => $this->discount_price,
            'expiry_type' => $this->when($this->relationLoaded('sections'), $this->expiry_type),
            'expiry_duration' => $this->when($this->relationLoaded('sections'), $this->expiry_duration),
            'enrollments_count' => $this->enrollments_count ?? 0,
            'reviews_count' => $this->reviews_count ?? 0,
            'average_rating' => round($this->reviews_avg_rating ?? 0, 2),
            'instructor' => new InstructorResource($this->whenLoaded('instructor')),
            'category' => new CourseCategoryResource($this->whenLoaded('courseCategory')),
            'sections' => CourseSectionResource::collection($this->whenLoaded('sections')),
            'requirements' => CourseRequirementResource::collection($this->whenLoaded('requirements')),
            'outcomes' => CourseOutcomeResource::collection($this->whenLoaded('outcomes')),
            'faqs' => CourseFaqResource::collection($this->whenLoaded('faqs')),
        ];
    }
}
