<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class DeleteInnerWordUseCase
{
   /**
   *
   *
   * @return void
   */
  public function __invoke($id): void
  {
    $model  = InnerWord::query()->find($id);

    $model->delete();

    // return null;
  }
}
