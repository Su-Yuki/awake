<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    //
    DB::table("users")->delete();

    //
    for ($i = 1; $i <= 10; $i++) {
      User::create([
        "name"           => "TEST" .$i,
        "email"          => "test.user" .$i ."@example.com",
        "password"       => Hash::make('testuser'),
        "remember_token" => Str::random(10),
        "created_at"     => now(),
        "updated_at"     => now()
      ]);
    }
  }
}
