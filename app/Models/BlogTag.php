<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogTag extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_id',
        'tag_id',
    ];

    protected $cast = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function blog(){
        return $this->belongsTo(BlogHeader::calss);
    }

    public function tag(){
        return $this->belongsTo(tags::calss);
    }
}
