<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class ShowInnerWordListUseCase
{
   /**
   *
   * Get user's inner_words
   *
   * @return array
   */
  public function __invoke($thema_id): array
  {
    /**
    *
    */
    $inner_word = InnerWord::query()
      ->where('thema_id', '=', $thema_id)
      ->orderBy('created_at', 'desc')
      ->get();

    return [
      'inner_word' => $inner_word,
    ];
  }
}
