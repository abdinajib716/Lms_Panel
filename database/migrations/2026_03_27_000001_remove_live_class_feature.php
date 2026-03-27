<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('course_live_classes')) {
            Schema::drop('course_live_classes');
        }

        if (Schema::hasTable('settings')) {
            DB::table('settings')->where('type', 'live_class')->delete();
        }
    }

    public function down(): void
    {
        // Live class feature removal is intentionally irreversible here.
    }
};
