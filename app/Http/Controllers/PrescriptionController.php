<?php

namespace App\Http\Controllers;

use App\Mail\PrescriptionOrder;
use App\Medication;
use App\Prescription;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class PrescriptionController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Illuminate\Http\Response
     */
    public function users()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function medications()
    {
        return response()->json(Medication::all(), 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prescription = Prescription::with('items', 'user')->orderByDesc('id')->get();
        return response()->json($prescription, 200);
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
        $request->validate([
            'image' => 'required|image|mimes:png,jpg,jpeg',
        ]);

        $prescription = new Prescription();

        $prescription->user_id = $request->user_id;
        $prescription->order_number = uniqid('PX-'); //unique prescription number
        $prescription->item_count = $request->item_count;
        $prescription->grand_total = $request->grand_total;
        $path = $request->file('image')->store('prescription_imagies');
        $prescription->image = $path;
        if ($prescription->save()) {
            // $prescription->items()->attach($prescription, ['medication_id' => $request->medication_id, 'price_per_unit' => $request->price_per_unit, 'quantity' => $request->item_count], true);
            return response()->json($prescription, 200);
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
     * @param  \App\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function show(Prescription $prescription)
    {
        return response()->json(Prescription::findOrFail($prescription->id), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function edit(Prescription $prescription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prescription $prescription)
    {

        $prescription->user_id = $request->user_id;
        $prescription->item_count = $request->item_count;
        $prescription->grand_total = $request->grand_total;
        $prescription->payment_method = $request->payment_method;
        $prescription->status = $request->status;
        $prescription->is_paid = $request->is_paid  == 'true' ? true : false;
        $oldPath = $prescription->image;


        if ($request->hasFile('image')) {
            $request->validate([
                // 'image' => 'image|mimes:jpeg,png,jpg'

            ]);
            $path = $request->file('image')->store('prescription_imagies');
            $prescription->image = $path;
            Storage::delete($oldPath);
        }
        if ($prescription->save()) {
            $prescriptions = Prescription::find($prescription->id);
            $temp = $prescriptions->items()->get();

            foreach (json_decode($request->items, true) as $items) {
                if (count($temp) == 0) {
                    $prescription->items()->attach($prescription, ['medication_id' => $items['medication_id'], 'price_per_unit' => $items['price_per_unit'], 'quantity' => $items['quantity']], true);
                } else {
                    foreach ($temp as $p) {
                        dd($p);
                        $prescription->items()->updateExistingPivot($p, ['medication_id' =>  $items['medication_id'], 'price_per_unit' => $items['price_per_unit'], 'quantity' => $items['quantity']], true);
                    }
                }
            }




            // $prescriptions = Prescription::find($prescription->id);
            // $temp = $prescriptions->items()->get();
            foreach ($temp as $items) {
                //delete update stock amount if item sold
                if ($prescription->status == 'Completed') {
                    $medications =  Medication::where('id', $items['pivot']->medication_id)->decrement('units', $items['pivot']->quantity);
                }
            }

            //send user receipt
            $user = User::find($prescription->user_id);
            // $medication = Medication::find($)
            $prescriptionOrder = Prescription::with(['items', 'user'])->find($prescription->id);
            // dd($prescriptionOrder);
            Mail::to($user->email)->send(new PrescriptionOrder($prescriptionOrder));


            return response()->json([
                'message' => 'Prescription updated successfully!',
                'status' => 200
            ], 200);
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
     * @param  \App\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prescription $prescription)
    {
        if ($prescription->delete()) {
            Storage::delete($prescription->image);
            return response()->json([
                'message' => 'Prescription deleted successfully!',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status' => 500
            ], 500);
        }
    }

    public function userPrescriptions(Request $request)
    {
        $prescription = Prescription::with('items')->where('user_id', $request->id)->orderByDesc('id')->get();
        return response()->json($prescription, 200);
    }

    public function userUpdatePrescription(Request $request, Prescription $prescription)
    {

        $prescription->user_id = $request->user_id;
        $prescription->item_count = $request->item_count;
        $prescription->grand_total = $request->grand_total;
        $prescription->payment_method = $request->payment_method;
        $prescription->status = $request->status;
        $prescription->is_paid = $request->is_paid ? true : false;

        if ($prescription->save()) {
            return response()->json([
                'message' => 'Prescription deleted successfully!',
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
