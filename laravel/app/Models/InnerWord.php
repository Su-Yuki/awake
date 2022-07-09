<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InnerWord extends Model
{
  use HasFactory;

  protected $fillable = [
    'thema_id',
    'inner_word',
    'so_word',
    'really_word',
    'why_word',
    'outside_word',
  ];

  public function thema()
  {
    return $this->belongsTo(InnerWord::class);
  }
}
