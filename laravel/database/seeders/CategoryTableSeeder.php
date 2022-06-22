<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    //
    DB::table("categories")->delete();

    for ($i = 1; $i <= 10; $i++) {
        Category::create([
        "thema_id"      => $i,
        "category_name" => "仕事",
        "created_at"    => now(),
        "updated_at"    => now()
      ]);
    }
  }
}
