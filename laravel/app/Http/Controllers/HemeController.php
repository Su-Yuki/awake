<?php

namespace App\Http\Controllers;

use App\UseCase\Thema\ShowThemaListUseCase;
use Illuminate\Http\Request;

class HemeController extends Controller
{

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
  public function index(ShowThemaListUseCase $useCase)
  {
    // ユーザログイン機能を作るまでひとまず「１」を入れる
    $user_id = 1;
    return view('test', $useCase($user_id));
  }

}
