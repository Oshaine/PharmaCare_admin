<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    //
    protected $fillable = ['image'];


    public function items()
    {
        return $this->belongsToMany(Medication::class, 'prescription_items', 'prescription_id')->withPivot('quantity', 'price_per_unit');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
