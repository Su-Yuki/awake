<?php

namespace App\UseCase\InnerWord;

use App\Models\InnerWord;

final class ShowInnerWordItemUseCase
{
   /**
   *
   * Get user's inner_words
   *
   * @return array
   */
  public function __invoke($inner_word_id): array
  {
    /**
    *
    */
      $inner_word = InnerWord::query()
        ->where('id', '=', $inner_word_id)
        ->orderBy('created_at', 'desc')
        ->first();

    return [
      'inner_word' => $inner_word,
    ];
  }
}
