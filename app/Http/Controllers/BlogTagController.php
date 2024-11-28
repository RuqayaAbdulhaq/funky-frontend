<?php

namespace App\Http\Controllers;

use App\Models\BlogTag;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogTagController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'blog_id' => 'required',
            'tag_id' => 'required',
        ]);
        BlogTag::create($validatedData);
        return response()->json([
            'status' => 'success',
            'message' => 'created successfully'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show($blogId)
    {
        $tags = BlogTag::where('blog_id', $blogId);
        return $tags;
    }

    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BlogTag $BlogTag)
    {

        $BlogTag->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'deleted successfully'
        ],200);
    }
}
