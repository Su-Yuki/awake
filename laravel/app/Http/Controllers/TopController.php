<?php

namespace App\Http\Controllers;

use App\UseCase\Thema\ShowThemaListUseCase;
use Illuminate\Http\Request;

class TopController extends Controller
{

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
  public function index(Request $request, ShowThemaListUseCase $useCase)
  {
    // dd($request->id);
    // ユーザログイン機能を作るまでひとまず「１」を入れる
    $user_id = 1;
    // return view('test', $useCase($user_id));

    return $useCase
      ? response()->json($useCase($user_id), 201)
      : response()->json([], 500);
  }
}
