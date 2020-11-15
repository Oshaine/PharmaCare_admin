<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function items()
    {
        return $this->belongsToMany(Medication::class, 'order_items', 'order_id')->withPivot('quantity', 'price_per_unit');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
