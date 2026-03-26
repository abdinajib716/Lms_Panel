<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Check if WaafiPay setting already exists
        $exists = Setting::where('type', 'payment')
            ->where('sub_type', 'waafipay')
            ->exists();

        if (!$exists) {
            Setting::create([
                'type' => 'payment',
                'sub_type' => 'waafipay',
                'title' => 'WaafiPay Settings',
                'fields' => [
                    'active' => false,
                    'test_mode' => false,
                    'currency' => 'USD',
                    'merchant_uid' => '',
                    'api_user_id' => '',
                    'api_key' => '',
                    'merchant_no' => '',
                    'api_url' => 'https://api.waafipay.net/asm',
                ],
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Setting::where('type', 'payment')
            ->where('sub_type', 'waafipay')
            ->delete();
    }
};
