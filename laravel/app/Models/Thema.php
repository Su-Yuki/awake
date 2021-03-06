<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thema extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'thema',
    ];

    public function innerWord()
    {
        return $this->hasMany(InnerWord::class);
    }
}
