<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    //
    protected $fillable = ['name', 'brand', 'type', 'dosage', 'route', 'strength', 'units', 'price_per_unit', 'is_featured', 'image'];

    public function category()
    {
        return $this->belongsTo('App\Category');
    }


    public function order()
    {
        return $this->belongsToMany('App\Order');
    }
}
