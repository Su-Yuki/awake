<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class UpdateInnerWordTitleUseCase
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
    $model->inner_word = $request->inner_word;
    $model->save();

    // return null;
  }
}
