<?php

namespace Database\Seeders;

use App\Models\CategoryItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryItemTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    //
    DB::table("category_items")->delete();

    for ($i = 1; $i <= 10; $i++) {
      CategoryItem::create([
        "thema_id"    => $i,
        "category_id" => $i,
        "created_at"  => now(),
        "updated_at"  => now()
      ]);
    }
  }
}
