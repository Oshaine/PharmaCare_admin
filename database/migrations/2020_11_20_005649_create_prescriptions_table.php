<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->id();
            $table->string('order_number');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->text('image');
            $table->enum('status', ['Pending', 'Not Available', 'Processing', 'Completed', 'Decline', 'Ready for Pickup'])->default('Pending');
            $table->boolean('is_repeated')->default(false);
            $table->integer('item_count')->nullable();
            $table->double('grand_total')->nullable();
            $table->boolean('is_paid')->default(false);
            $table->enum('payment_method', ['Cash On Pickup', 'PayPal', 'Card'])->default('Cash On Pickup');
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
        Schema::dropIfExists('prescriptions');
    }
}
