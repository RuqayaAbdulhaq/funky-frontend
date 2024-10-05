<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogBody extends Model
{
    use HasFactory;

     // The attributes that are mass assignable
     protected $fillable = [
        'blog_header_id',
        'body',
        'language',
    ];

    // Define the relationship to the blog header
    public function blogHeader()
    {
        return $this->belongsTo(BlogHeader::class);
    }
}
