<?php

namespace Database\Seeders;

use App\Models\Thema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemaTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    //
    DB::table("themas")->delete();

    for ($i = 1; $i <= 10; $i++) {
      Thema::create([
        "user_id"    => $i,
        "thema"      => "仕事",
        "created_at" => now(),
        "updated_at" => now()
      ]);
    }
  }
}
