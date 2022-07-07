<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class StoreInnerWordUseCase
{
   /**
   *
   * Sotre user's thema
   * ・とりあえずstore処理だけ
   *
   * @return array
   */
  public function __invoke($request): array
  {
    /**
    *
    */
    $inner_word = new InnerWord();
    $inner_word->fill($request->all())->save();

    return [
      "inner_word" => $inner_word
    ];
  }
}
