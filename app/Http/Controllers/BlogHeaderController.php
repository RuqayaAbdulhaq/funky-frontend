<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogHeader;
use Inertia\Inertia;

class BlogHeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = BlogHeader::paginate(10);
        return Inertia::render('admin/Blogs',['blogs' => $blogs]); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
        ]);

        $validatedData['user_id'] = auth()->id(); // Set the logged-in user ID
        $validatedData['version'] = 1; // Initial version

        BlogHeader::create($validatedData);

        return redirect()->route('blog_headers.index')->with('success', 'Blog created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(BlogHeader $blogHeader)
    {
        return view('blog_headers.edit', compact('blogHeader'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BlogHeader $blogHeader)
    {
        return view('blog_headers.edit', compact('blogHeader'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BlogHeader $blogHeader)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
        ]);

        $validatedData['version'] = $blogHeader->version + 1; // Increment version

        $blogHeader->update($validatedData);

        return redirect()->route('blog_headers.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BlogHeader $blogHeader)
    {
        $blogHeader->delete();

        return redirect()->route('blog_headers.index')->with('success', 'Blog deleted successfully.');
    }
}
