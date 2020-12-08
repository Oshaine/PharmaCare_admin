<?php

namespace App\Http\Controllers;

use App\Category;
use App\Medication;
use App\Order;
use App\Prescription;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportsController extends Controller
{

    //card reports
    public function cardReport()
    {
        $data = [];

        //over the counter orders monthly
        $orderEarnings = collect(Order::where('status', 'Completed')->whereMonth(
            'created_at',
            Carbon::now()->month
        )->get(['grand_total'])->toArray());

        //prescription orders monthly
        $prescriptionEarnings = collect(Prescription::where('status', 'Completed')->whereMonth(
            'created_at',
            Carbon::now()->month
        )->get(['grand_total'])->toArray());

        //merge
        $monthlyEarnings = $orderEarnings->merge($prescriptionEarnings);


        //total users
        $users = User::where('role', 'user')->count();


        //completed orders (monthly)
        $monthlyOrders = collect(Order::where('status', 'Completed')->whereMonth(
            'created_at',
            Carbon::now()->month
        )->get()->toArray());


        //completed prescription orders (monthly)
        $prescriptionOrders = collect(Prescription::where('status', 'Completed')->whereMonth(
            'created_at',
            Carbon::now()->month
        )->get()->toArray());


        //pending orders
        $pendingOrders = collect(Order::where('status', 'Pending')->get()->toArray());
        $pendingPrescriptionOrders = collect(Prescription::where('status', 'Pending')->get()->toArray());
        $allPendingOrders = $pendingOrders->merge($pendingPrescriptionOrders);


        //stock count
        $stock = collect(Medication::get('units')->toArray());



        array_push($data, [
            'users' => $users,
            'monthly_earnings' => round($monthlyEarnings->sum('grand_total'), 2),
            'monthly_orders' => $monthlyOrders->count(),
            'prescription_orders' => $prescriptionOrders->count(),
            'pending_orders' => $allPendingOrders->count(),
            'stock_count' => $stock->sum('units')
        ]);


        return response()->json($data, 200);
    }

    //monthly earnings
    public function monthlyEarning()
    {
        $orders = collect(Order::where('status', 'Completed')->get()->toArray());

        //group total by month

        $ordersByMonth = $orders->mapToGroups(function ($item, $key) {
            return [Carbon::parse($item['created_at'])->format('F') => $item['grand_total']];
        });

        return response()->json($ordersByMonth, 200);
    }


    //categories revenue total

    public function categoryRevenue()
    {
        $orders = collect(Order::with('items')->where('status', 'Completed')->get()->toArray());
        $prescriptionOrders = collect(Prescription::with('items')->where('status', 'Completed')->get()->toArray());
        $orderData = [];
        $prescriptionData = [];

        // dd($orders);
        //orders revenue with categories
        foreach ($orders as $order) {
            foreach ($order['items'] as $items) {
                $category = Category::where('id', $items['category_id'])->get();
                foreach ($category as $categories) {


                    array_push($orderData, ['category' => $categories['name'], 'grand_total' => $items['pivot']['price_per_unit'] * $items['pivot']['quantity']]);
                }
            }
        }

        //prescription revenue with categories
        foreach ($prescriptionOrders as $pOrder) {
            foreach ($pOrder['items'] as $items) {
                $category = Category::where('id', $items['category_id'])->get();
                foreach ($category as $categories) {
                    array_push($prescriptionData, ['category' => $categories['name'], 'grand_total' =>  $items['pivot']['price_per_unit'] * $items['pivot']['quantity']]);
                }
            }
        }

        //merge orders
        $temp = collect($orderData)->merge(collect($prescriptionData));

        //group
        $categoryRevenue = $temp->mapToGroups(function ($item, $key) {
            return [$item['category'] => round($item['grand_total'], 2)];
        });
        return response()->json($categoryRevenue, 200);
    }


    public function monthlyRegistrations()
    {
        $users = collect(User::where('role', 'user')->get()->toArray());


        $registrationsPerMonth = $users->mapToGroups(function ($item, $key) {
            return [Carbon::parse($item['created_at'])->format('F') => $item['id']];
        });

        return response()->json($registrationsPerMonth, 200);
    }
}
