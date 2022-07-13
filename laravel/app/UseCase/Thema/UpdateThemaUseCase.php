<?php

namespace App\UseCase\Thema;

use App\Models\Thema;

final class UpdateThemaUseCase
{
   /**
   *
   *
   * @return array
   */
  public function __invoke($request, $id): void
  {
    $model = Thema::query()->findOrFail($id);

    $model->thema = $request->thema;
    $model->save();

    // return null;
  }
}
