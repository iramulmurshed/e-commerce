<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\ProductController;
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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/signup', [SellerController::class, 'verifySignup']);
Route::post('/login', [SellerController::class, 'verifyLogin']);
Route::post('/add_product', [ProductController::class, 'verifyProduct'])->middleware('sellerApiAuth');
Route::post('/show_product', [ProductController::class, 'viewProductPage'])->middleware('sellerApiAuth');
Route::post('/logout', [SellerController::class, 'sellerLogout'])->middleware('sellerApiAuth');
Route::post('/updateProduct', [ProductController::class, 'updateProduct'])->middleware('sellerApiAuth');
Route::get('/view_single_product/{p_id}', [ProductController::class, 'showSingleProduct'])->middleware('sellerApiAuth');
Route::post('/delete_single_product/{p_id}', [ProductController::class, 'deleteProduct'])->middleware('sellerApiAuth');
