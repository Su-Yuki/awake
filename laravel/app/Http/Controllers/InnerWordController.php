<?php

namespace App\Http\Controllers;

use App\Http\Requests\InnerWordRequest;
use App\Models\InnerWord;
use App\UseCase\InnerWord\ShowInnerWordItemUseCase;
use App\UseCase\InnerWord\ShowInnerWordListUseCase;
use App\UseCase\InnerWord\StoreInnerWordUseCase;
use App\UseCase\InnerWord\UpdateInnerWordItemUseCase;
use App\UseCase\InnerWord\UpdateInnerWordTitleUseCase;
use Illuminate\Http\Request;

class InnerWordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ShowInnerWordListUseCase $useCase)
    {
      $thema_id = $request->thema_id;

      return $useCase
        ? response()->json($useCase($thema_id), 201)
        : response()->json([], 500);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InnerWordRequest $request, StoreInnerWordUseCase $useCase)
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
    public function show(Request $request, ShowInnerWordItemUseCase $useCase)
    {
      $inner_word_id = $request->inner_word_id;

      return $useCase
        ? response()->json($useCase($inner_word_id), 201)
        : response()->json([], 500);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_title(Request $request, $id, UpdateInnerWordTitleUseCase $useCase)
    {
      $useCase($request, $id);

      return response()->json(['更新成功'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_item(Request $request, $id, UpdateInnerWordItemUseCase $useCase)
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
    public function destroy($id)
    {
        //
    }
}
