<?php

namespace App\Http\Controllers;

use App\Category;
use App\Medication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MedicationController extends Controller
{



    /**
     * Display a listing of the categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $medications = Medication::all();
        return response()->json(['data' => $medications, 'status' => 200]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'dosage' => 'required',
            'route' => 'required',
            'strength' => 'required',
            'usage' => 'required',
            'units' => 'required',
            'price_per_unit' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        $medication = new Medication();
        $medication->name = $request->name;
        $medication->type = $request->type;
        $medication->dosage = $request->dosage;
        $medication->route = $request->route;
        $medication->strength = $request->strength;
        $medication->usage = json_encode(explode(',',  $request->usage));
        $medication->units = $request->units;
        $medication->price_per_unit = $request->price_per_unit;
        $medication->category_id = $request->category_id;
        $path = $request->file('image')->store('medication_imagies');
        $medication->image = $path;

        if ($medication->save()) {
            return response()->json($medication, 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Medication  $medication
     * @return \Illuminate\Http\Response
     */
    public function show(Medication $medication)
    {
        return response()->json(Medication::findOrFail($medication->id), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Medication  $medication
     * @return \Illuminate\Http\Response
     */
    public function edit(Medication $medication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Medication  $medication
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medication $medication)
    {
        //
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'dosage' => 'required',
            'route' => 'required',
            'strength' => 'required',
            'usage' => 'required',
            'units' => 'required',
            'price_per_unit' => 'required',
        ]);

        $medication->name = $request->name;
        $medication->type = $request->type;
        $medication->dosage = $request->dosage;
        $medication->route = $request->route;
        $medication->strength = $request->strength;
        $medication->usage = $request->usage;
        $medication->units = $request->units;
        $medication->price_per_unit = $request->price_per_unit;
        $medication->category_id = $request->category_id;

        $oldPath = $medication->image;
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg'

            ]);
            $path = $request->file('image')->store('medication_imagies');
            $medication->image = $path;
            Storage::delete($oldPath);
        }

        if ($medication->save()) {
            return response()->json($medication, 200);
        } else {
            Storage::delete($path);

            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Medication  $medication
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medication $medication)
    {
        if ($medication->delete()) {
            Storage::delete($medication->image);
            return response()->json([
                'message' => 'Medication deleted successfully!',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status' => 500
            ], 500);
        }
    }
}
