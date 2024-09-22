<?php

namespace App\Http\Controllers;

use App\Models\BlogBody;
use App\Models\BlogHeader;
use Illuminate\Http\Request;

class BlogBodyController extends Controller
{
    // Display a listing of the blog bodies
    public function index()
    {
        $blogBodies = BlogBody::all();
        return view('blog_bodies.index', compact('blogBodies'));
    }

    // Show the form for creating a new blog body
    public function create()
    {
        $blogHeaders = BlogHeader::all(); // Fetch associated blog headers for selection
        return view('blog_bodies.create', compact('blogHeaders'));
    }

    // Store a newly created blog body in the database
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'blog_header_id' => 'required|exists:blog_headers,id',
            'body' => 'required|json',
            'language' => 'required|string|max:10',
        ]);

        BlogBody::create($validatedData);

        return redirect()->route('blog_bodies.index')->with('success', 'Blog body created successfully.');
    }

    // Display the specified blog body
    public function show(BlogBody $blogBody)
    {
        return view('blog_bodies.show', compact('blogBody'));
    }

    // Show the form for editing the specified blog body
    public function edit(BlogBody $blogBody)
    {
        $blogHeaders = BlogHeader::all(); // Fetch associated blog headers for selection
        return view('blog_bodies.edit', compact('blogBody', 'blogHeaders'));
    }

    // Update the specified blog body in the database
    public function update(Request $request, BlogBody $blogBody)
    {
        $validatedData = $request->validate([
            'blog_header_id' => 'required|exists:blog_headers,id',
            'body' => 'required|json',
            'language' => 'required|string|max:10',
        ]);

        $blogBody->update($validatedData);

        return redirect()->route('blog_bodies.index')->with('success', 'Blog body updated successfully.');
    }

    // Remove the specified blog body from the database
    public function destroy(BlogBody $blogBody)
    {
        $blogBody->delete();

        return redirect()->route('blog_bodies.index')->with('success', 'Blog body deleted successfully.');
    }
}