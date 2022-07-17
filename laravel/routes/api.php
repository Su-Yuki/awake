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

// Not authenticating
Route::post('/register', 'App\Http\Controllers\Api\AuthController@register');
Route::post('/login',    'App\Http\Controllers\Api\AuthController@login')->name("login");
Route::get('/logout',    'App\Http\Controllers\Api\AuthController@logout');

// Authenticating route
Route::group(['middleware' => ['auth:sanctum']], function () {
  // relation theme
  Route::get('thema',                'App\Http\Controllers\ThemaController@index');
  Route::post('thema/store',         'App\Http\Controllers\ThemaController@store');
  Route::put('thema/update/{id}',    'App\Http\Controllers\ThemaController@update');
  Route::delete('thema/delete/{id}', 'App\Http\Controllers\ThemaController@destroy');

  // relation inner_words
  Route::get('inner_words',                   'App\Http\Controllers\InnerWordController@index');
  Route::get('inner_words/show',              'App\Http\Controllers\InnerWordController@show');
  Route::post('inner_words/store',            'App\Http\Controllers\InnerWordController@store');
  Route::put('inner_words/update_title/{id}', 'App\Http\Controllers\InnerWordController@update_title');
  Route::put('inner_words/update_item/{id}',  'App\Http\Controllers\InnerWordController@update_item');
  Route::delete('inner_words/delete/{id}',    'App\Http\Controllers\InnerWordController@destroy');
});

Route::group(['middleware' => 'api'], function(){

});
