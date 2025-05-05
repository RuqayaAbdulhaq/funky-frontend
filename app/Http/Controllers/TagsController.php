<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::paginate(10);
        return Inertia::render('admin/tags',['tags' => $tags]); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
        ]);

        Tag::create($validatedData);

        return redirect()->route('admin.tags')->with('success', 'Tag created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tag $Tag)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
        ]);

        Tag::update($validatedData);

        return redirect()->route('')->with('success', 'Tag updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $Tag)
    {
        $Tag->delete();

        return redirect()->route("")->with("sucess","Tag deleted successfully");
    }
}
