<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWhatsAppSettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'enabled' => 'required|boolean',
            'phone_number' => 'required|string|max:20',
            'agent_name' => 'required|string|max:100',
            'agent_title' => 'required|string|max:100',
            'greeting_message' => 'required|string|max:500',
            'button_position' => 'required|in:bottom-right,bottom-left',
            'show_online_badge' => 'required|boolean',
            'auto_popup' => 'required|boolean',
            'auto_popup_delay' => 'required|integer|min:0|max:60',
            'default_message' => 'required|string|max:200',
        ];
    }

    /**
     * Custom messages for validation errors.
     */
    public function messages(): array
    {
        return [
            'enabled.required' => 'The enabled status is required.',
            'phone_number.required' => 'The WhatsApp phone number is required.',
            'phone_number.max' => 'The phone number cannot exceed 20 characters.',
            'agent_name.required' => 'The agent name is required.',
            'agent_title.required' => 'The agent title is required.',
            'greeting_message.required' => 'The greeting message is required.',
            'button_position.in' => 'The button position must be either bottom-right or bottom-left.',
            'auto_popup_delay.min' => 'The auto popup delay must be at least 0 seconds.',
            'auto_popup_delay.max' => 'The auto popup delay cannot exceed 60 seconds.',
        ];
    }
}
