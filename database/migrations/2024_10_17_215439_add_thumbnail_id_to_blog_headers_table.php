<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('blog_headers', function (Blueprint $table) {
            $table->unsignedBigInteger('thumbnail_id')->nullable()->after('description');

            $table->foreign('thumbnail_id')->references('id')->on('files')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('blog_headers', function (Blueprint $table) {
            $table->dropColumn('thumbnail_id');
        });
    }
};
