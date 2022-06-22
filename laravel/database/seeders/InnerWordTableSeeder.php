<?php

namespace Database\Seeders;

use App\Models\InnerWord;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InnerWordTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    //
    DB::table("inner_words")->delete();

    //
    for ($i = 1; $i <= 10; $i++) {
      InnerWord::create([
        "thema_id"     => $i,
        "Inner_word"   => "What do I want to do?",
        "so_word"      => "I want to be aware and not be confused.",
        "really_word"  => "Really. I've been lost in the past.",
        "why_word"     => "I have not had many opportunities to face my feelings.",
        "outside_word" => "I noticed! This is how I feel!!!!",
        "created_at"   => now(),
        "updated_at"   => now()
      ]);
    }
  }
}
