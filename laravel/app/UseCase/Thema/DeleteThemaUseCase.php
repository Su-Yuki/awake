<?php

namespace App\UseCase\Thema;

use App\Models\InnerWord;
use App\Models\Thema;

final class DeleteThemaUseCase
{
   /**
   *
   *
   * @return void
   */
  public function __invoke($id): void
  {
    $model  = Thema::query()->find($id);

    $model->innerWord()->delete();
    $model->delete();

    // return null;
  }
}
