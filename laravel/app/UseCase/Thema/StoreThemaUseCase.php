<?php

namespace App\UseCase\Thema;

use App\Models\Thema;

final class StoreThemaUseCase
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
    $thema = new Thema();
    $thema->fill($request->all())->save();

    return [
        "thema" => $thema
    ];
  }
}
