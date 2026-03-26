<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Setting;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add WhatsApp settings if not exists
        $whatsappExists = Setting::where('type', 'whatsapp')->exists();
        
        if (!$whatsappExists) {
            Setting::create([
                'type' => 'whatsapp',
                'sub_type' => null,
                'title' => 'WhatsApp Support Settings',
                'fields' => [
                    'enabled' => true,
                    'phone_number' => '252612345678',
                    'agent_name' => 'Dugsiye Support',
                    'agent_title' => 'Typically replies instantly',
                    'greeting_message' => "Assalamu Alaikum! 👋\nReady to start your journey?\nHave questions about our program?\nWe're here to help you become a Full-Stack Software Engineer!",
                    'button_position' => 'bottom-right',
                    'show_online_badge' => true,
                    'auto_popup' => false,
                    'auto_popup_delay' => 5,
                    'default_message' => 'Hi Support!',
                ],
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Setting::where('type', 'whatsapp')->delete();
    }
};
