<?php

namespace App\UseCase\Thema;

use App\Models\Thema;

final class DeleteThemaUseCase
{
   /**
   *
   *
   * @return array
   */
  public function __invoke($id): void
  {
    $model = Thema::query()->find($id);

    $model->delete();

    // return null;
  }
}
