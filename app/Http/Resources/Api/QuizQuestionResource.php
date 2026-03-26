<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizQuestionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $options = $this->options;
        if (is_string($options)) {
            $options = json_decode($options, true);
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'type' => $this->type,
            'options' => $options,
            'sort' => $this->sort,
        ];
    }
}
