<?php

namespace App\UseCase\Thema;

use App\Models\Thema;

final class ShowThemaListUseCase
{
   /**
   *
   * Get user's theme
   * ・ユーザのテーマを降順で取得
   * ・テーマに紐づくinnner_wordの数を取得
   *
   * @return array
   */
  public function __invoke($user_id): array
  {
    /**
    *
    */
    $thema = Thema::query()
      ->where('user_id', '=', $user_id)
      ->withCount('innerWord')
      ->orderBy('created_at', 'desc')
      ->get();

    return [
      'thema' => $thema,
    ];
  }
}
