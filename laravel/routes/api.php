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

Route::post('/register', 'App\Http\Controllers\Api\LoginController@register');
Route::post('/login', 'App\Http\Controllers\Api\LoginController@login');
Route::get('/logout', 'App\Http\Controllers\Api\LoginController@logout');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('thema', 'App\Http\Controllers\ThemaController@index');
//     Route::post('thema/store', 'App\Http\Controllers\ThemaController@store');
// });


Route::group(['middleware' => 'api'], function(){
    Route::get('thema', 'App\Http\Controllers\ThemaController@index');
    Route::post('thema/store', 'App\Http\Controllers\ThemaController@store');
});
