<?php

namespace App\Http\Controllers;

use App\Http\Requests\ThemaRequest;
use App\Models\Thema;
use App\UseCase\Thema\ShowThemaListUseCase;
use App\UseCase\Thema\StoreThemaUseCase;
use Illuminate\Http\Request;

class ThemaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return
   */
  public function index(Request $request, ShowThemaListUseCase $useCase)
  {
    // ユーザログイン機能を作るまでひとまず「１」を入れる
    $user_id = 1;

    return $useCase
      ? response()->json($useCase($user_id), 201)
      : response()->json([], 500);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {

  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\ThemaRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(ThemaRequest $request, StoreThemaUseCase $useCase)
  {
    return $useCase
      ? response()->json($useCase($request), 201)
      : response()->json([], 500);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
      //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
      //
  }
}
