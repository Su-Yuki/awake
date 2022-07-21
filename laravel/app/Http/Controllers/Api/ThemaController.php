<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ThemaRequest;
use App\Models\Thema;
use App\UseCase\Thema\DeleteThemaUseCase;
use App\UseCase\Thema\ShowThemaListUseCase;
use App\UseCase\Thema\StoreThemaUseCase;
use App\UseCase\Thema\UpdateThemaUseCase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ThemaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return
   */
  public function index(ShowThemaListUseCase $useCase)
  {
    // ユーザID
    $user_id = Auth::id();

    return $useCase
      ? response()->json($useCase($user_id), 201)
      : response()->json([], 500);
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

  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id, UpdateThemaUseCase $useCase)
  {
    $useCase($request, $id);

    return response()->json(['更新成功'], 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id, DeleteThemaUseCase $useCase)
  {
    $useCase($id);

    return response()->json(['削除成功'], 200);
  }
}
