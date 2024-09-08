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
        Schema::create('blog_bodies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('blog_header_id');
            $table->json('body');
            $table->string('language',10);
            $table->timestamps();

            $table->foreign('blog_header_id')->references('id')->on('blog_headers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_bodies');
    }
};
