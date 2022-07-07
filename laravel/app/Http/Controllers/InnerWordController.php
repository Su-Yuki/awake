<?php

namespace App\Http\Controllers;

use App\Http\Requests\InnerWordRequest;
use App\Models\InnerWord;
use App\UseCase\InnerWord\ShowInnerWordListUseCase;
use App\UseCase\InnerWord\StoreInnerWordUseCase;
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
