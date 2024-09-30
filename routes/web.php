<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogHeaderController;
use App\Http\Controllers\BlogBodyController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', function () {
    return Inertia::render('Home');
});

Route::get('/blogs', function () {
    return Inertia::render('Blogs');
});

Route::get('/blog/{id}', function () {
    return Inertia::render('BlogDetails');
});

Route::get('/admin/blogs', [BlogHeaderController::class, 'index']);

Route::get('/admin/create-blog', function () {
    return Inertia::render('admin/CreateBlog');
})->name('admin.create-blog');

Route::get('/admin/blog/store',[BlogBodyController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('blog_headers',BlogHeaderController::class);

require __DIR__.'/auth.php';
