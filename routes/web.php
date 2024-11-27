<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogHeaderController;
use App\Http\Controllers\BlogBodyController;
use App\Http\Controllers\FileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
| Routes accessible without authentication
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home');
});

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
| Routes requiring authentication and verification
*/

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Blogs Management
    Route::prefix('admin')->group(function () {
        Route::get('/blogs', [BlogHeaderController::class, 'index'])->name('admin.blogs');
        Route::get('/create-blog/{id}', [BlogBodyController::class, 'index'])->name('admin.create-blog');
        Route::put('/blogs/{id}/update', [BlogBodyController::class, 'update'])->name('admin.blogs.update');
        Route::post('/blog-header', [BlogHeaderController::class, 'store'])->name('create.blog');
        Route::post('/blog-headers/attach-thumbnail', [BlogHeaderController::class, 'attachThumbnail'])->name('attach.thumbnail');
        Route::resource('blog_headers', BlogHeaderController::class);
    });

    // Blog Display (for users)
    Route::get('/blogs', function () {
        return Inertia::render('Blogs');
    });
    Route::get('/blog/{id}', function () {
        return Inertia::render('BlogDetails');
    });

    // File Upload
    Route::post('/upload', [FileController::class, 'store']);

    // User Profile
    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

// Authentication Routes
require __DIR__.'/auth.php';
