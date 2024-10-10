<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UploadedFile;

class FileUploadController extends Controller
{
    public function store(Request $request)
    {
        // Validate the file
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        // Store the file in the public folder
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);

            // Save the file to the database and get the file ID
            $uploadedFile = UploadedFile::create(['name' => $filename]);

            // Return the file ID
            return response()->json(['message' => 'File uploaded successfully', 'file_id' => $uploadedFile->id]);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }
}
