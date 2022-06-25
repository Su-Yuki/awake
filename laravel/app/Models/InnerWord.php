<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InnerWord extends Model
{
    use HasFactory;

    public function thema()
    {
        return $this->belongsTo(InnerWord::class);
    }
}
