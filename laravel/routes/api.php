<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// auth
Route::post('/register', 'App\Http\Controllers\Api\AuthController@register');
Route::post('/login', 'App\Http\Controllers\Api\AuthController@login')->name("login");
Route::get('/logout', 'App\Http\Controllers\Api\AuthController@logout');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['auth:sanctum']], function () {
  // relation theme
  Route::get('thema', 'App\Http\Controllers\ThemaController@index');
  Route::post('thema/store', 'App\Http\Controllers\ThemaController@store');

  // relation theme
  Route::get('inner_words', 'App\Http\Controllers\InnerWordController@index');
  Route::post('inner_words/store', 'App\Http\Controllers\InnerWordController@store');
});

Route::group(['middleware' => 'api'], function(){

});
