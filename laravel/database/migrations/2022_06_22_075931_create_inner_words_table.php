<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInnerWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inner_words', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('thema_id')->comment('テーマID');
            $table->string('inner_word', 150)->comment('内なる言葉');
            $table->string('so_word', 150)->nullable()->comment('それで？の問い');
            $table->string('really_word', 150)->nullable()->comment('本当に？の問い');
            $table->string('why_word', 150)->nullable()->comment('なぜ？の問い');
            $table->text('outside_word')->nullable()->comment('外側への言葉');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inner_words');
    }
}
