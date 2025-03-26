<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogMeta extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_id',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'canonical_url',
        'og_title',
        'og_description',
        'og_image',
        'og_url',
        'twitter_title',
        'twitter_description',
        'twitter_image',
        'twitter_card'
    ];

    protected $cast = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Define relationship to the blog
    public function blog(){
        return $this->belongsTo(BlogHeader::calss);
    }
}
