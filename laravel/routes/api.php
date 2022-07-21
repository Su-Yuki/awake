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
Route::post('/register', 'AuthController@register');
Route::post('/login',    'AuthController@login')->name("login");
Route::get('/logout',    'AuthController@logout');

// Authenticating route
Route::group(['middleware' => ['auth:sanctum']], function () {
  // Set User
  Route::get('user', 'AuthController@getUser');

  // relation theme
  Route::get('thema',                'ThemaController@index');
  Route::post('thema/store',         'ThemaController@store');
  Route::put('thema/update/{id}',    'ThemaController@update');
  Route::delete('thema/delete/{id}', 'ThemaController@destroy');

  // relation inner_words
  Route::get('inner_words',                   'InnerWordController@index');
  Route::get('inner_words/show',              'InnerWordController@show');
  Route::post('inner_words/store',            'InnerWordController@store');
  Route::put('inner_words/update_title/{id}', 'InnerWordController@update_title');
  Route::put('inner_words/update_item/{id}',  'InnerWordController@update_item');
  Route::delete('inner_words/delete/{id}',    'InnerWordController@destroy');
});

Route::group(['middleware' => 'api'], function(){

});
