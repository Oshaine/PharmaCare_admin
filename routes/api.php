<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile', 'AuthController@profile');
        Route::get('/get-users', 'AuthController@getUsers');
        Route::put('/update-users/{user}', 'AuthController@updateUser');
    });
});

Route::group(['middleware' => 'auth:api'], function () {

    //user scope route
    Route::group(['middleware' => 'scope:user'], function () {
        Route::get('get-categories', 'MedicationController@categories');
        // Route::resource('medications', 'MedicationController');
    });

    //admin scope route
    Route::group(['middleware' => 'scope:administrator'], function () {
        Route::get('get-categories', 'MedicationController@categories');
        Route::get('/all-users', 'PrescriptionController@users');


        // Route::resource('medications', 'MedicationController');
    });
});
//Reports
Route::get('/card-report', 'ReportsController@cardReport');
Route::get('/monthly-earnings', 'ReportsController@monthlyEarning');
Route::get('/category-revenue', 'ReportsController@categoryRevenue');
Route::get('/user-registrations', 'ReportsController@monthlyRegistrations');




Route::Resource('/categories', 'CategoryController');
Route::resource('medications', 'MedicationController');
Route::get('featured-medications', 'MedicationController@featuredMedication');

Route::post('medication-categories/{id}', 'MedicationController@medicationWithCategories');
Route::get('search/{query}', 'MedicationController@search');

// Orders
Route::resource('orders', 'OrderController');
Route::post('user-orders', 'OrderController@userOrders');
Route::get('/invoice', 'OrderController@orderInvoice');

//prescription
Route::resource('/prescriptions', 'PrescriptionController');
Route::put('/user-update-prescription/{prescription}', 'PrescriptionController@userUpdatePrescription');
Route::post('/user-prescriptions', 'PrescriptionController@userPrescriptions');
Route::get('/prescribed-medications', 'PrescriptionController@medications');
