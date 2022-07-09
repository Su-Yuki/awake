<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class UpdateInnerWordItemUseCase
{
   /**
   *
   * Sotre user's thema
   * ・とりあえずstore処理だけ
   *
   * @return array
   */
  public function __invoke($request, $id): void
  {
    /**
    *
    */
    $model = InnerWord::query()->findOrFail($id);

    // update
    $model->so_word      = $request->so_word;
    $model->really_word  = $request->really_word;
    $model->why_word     = $request->why_word;
    $model->outside_word = $request->outside_word;
    $model->save();

    // return null;
  }
}
