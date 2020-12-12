<?php

namespace App\Http\Controllers;

use App\Mail\InvoiceMail;
use App\Mail\MedicationOrder;
use App\Medication;
use App\Order;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use LaravelDaily\Invoices\Invoice;
use LaravelDaily\Invoices\Classes\Buyer;
use LaravelDaily\Invoices\Classes\InvoiceItem;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $orders = Order::with('items', 'user')->orderByDesc('id')->get();
        return response()->json($orders, 200);
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
            'payment_method' => 'required',
            'is_paid' => 'required',
        ]);

        $order = new Order();
        $order->user_id = $request->user_id;
        $order->order_number = uniqid('Order-'); //unique order number
        $order->item_count = $request->item_count;
        $order->grand_total = $request->grand_total;
        $order->payment_method = $request->payment_method;
        $order->is_paid = $request->is_paid;
        $cartItems = $request->cart;
        if ($order->save()) {
            foreach ($cartItems as $items) {
                $order->items()->attach($order, ['medication_id' => $items['medication_id'], 'price_per_unit' => $items['price_per_unit'], 'quantity' => $items['item_count']]);
            }

            $user = User::find($order->user_id);
            // $medication = Medication::find($)
            $medicationOrder = Order::with(['items', 'user'])->find($order->id);
            Mail::to($user->email)->send(new MedicationOrder($medicationOrder));


            return response()->json(["order" => $medicationOrder, 'message' => 'Order Placed', 'status_code' => 200], 200);
        } else {
            return response()->json(['message' => 'Some Error Occured'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'payment_method' => 'required',
            'status' => 'required',
        ]);

        $order->user_id = $request->user_id;
        $order->item_count = $request->item_count;
        $order->grand_total = $request->grand_total;
        $order->payment_method = $request->payment_method;
        $order->status = $request->status;
        $order->is_paid = $request->is_paid;
        $cartItems = $request->cart;
        if ($order->save()) {
            $orders = Order::find($order->id);
            $temp = $orders->items()->get();
            foreach ($temp as $items) {
                //delete update stock amount if item sold
                if ($order->status == 'Completed') {
                    $medications =   Medication::where('id', $items['pivot']->medication_id)->decrement('units', $items['pivot']->quantity);
                }
            }

            //send user receipt
            $user = User::find($order->user_id);
            // $medication = Medication::find($)
            $medicationOrder = Order::with(['items', 'user'])->find($order->id);
            Mail::to($user->email)->send(new MedicationOrder($medicationOrder));
            return response()->json(['message' => 'Order Updated', 'status_code' => 200], 200);
        } else {
            return response()->json(['message' => 'Some Error Occured'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        if ($order->delete()) {
            return response()->json([
                'message' => 'Order deleted successfully!',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status' => 500
            ], 500);
        }
    }

    public function userOrders(Request $request)
    {
        $orders = Order::with('items', 'user')->where('user_id', $request->id)->orderByDesc('id')->get();
        return response()->json($orders, 200);
    }


    // public function orderInvoice()
    // {
    //     $customer = new Buyer([
    //         'name'          => 'John Doe',
    //         'custom_fields' => [
    //             'email' => 'test@example.com',
    //         ],
    //     ]);

    //     $item = (new InvoiceItem())->title('Service 1')->pricePerUnit(2);

    //     $invoice = Invoice::make()
    //         ->buyer($customer)
    //         ->discountByPercent(10)
    //         ->taxRate(15)
    //         ->shipping(1.99)
    //         ->addItem($item);

    //     return $invoice->stream();
    // }


}
