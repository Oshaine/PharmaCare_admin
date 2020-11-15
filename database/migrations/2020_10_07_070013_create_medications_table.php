<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name');
            $table->enum('type', array('generic', 'brand', 'both'))->default('generic');
            $table->string('route');
            $table->string('strength');
            $table->string('usage');
            $table->string('dosage');
            $table->text('image');
            $table->integer('units');
            $table->double('price_per_unit');
            $table->boolean('isFavourite')->default(false)->nullable();
            $table->boolean('isPopular')->default(false)->nullable();
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medications');
    }
}
