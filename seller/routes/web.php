<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', [SellerController::class, 'viewSellerSignUpPage']) ->name('signup');
//Route::post('/', [SellerController::class, 'verifySignup'])->name('signup');
//Route::get('/login', [SellerController::class, 'viewSellerLogInPage'])->name('login');
//Route::post('/login', [SellerController::class, 'verifyLogin'])->name('login');
//Route::get('/home', [SellerController::class, 'viewSellerHomePage'])
//    ->name('home')->middleware('loginAuthentication');
Route::get('/profile', [SellerController::class, 'profilePage'])
    ->name('profile')->middleware('loginAuthentication');
Route::post('/profileUpdate', [SellerController::class, 'profileUpdate'])
    ->name('profileUpdate')->middleware('loginAuthentication');
Route::get('/logout', [SellerController::class, 'sellerLogout'])->name('logout');



//Route::get('/add_product', [ProductController::class, 'addSellerProductPage'])
//    ->name('add_product')->middleware('loginAuthentication');
Route::post('/add_product', [ProductController::class, 'verifyProduct'])
    ->name('add_product')->middleware('loginAuthentication');
Route::get('/show_product', [ProductController::class, 'viewProductPage'])
    ->name('show_product')->middleware('loginAuthentication');
Route::get('/view_single_product/{p_id}', [ProductController::class, 'showSingleProduct'])
    ->name('show_single_product')->middleware('loginAuthentication');
Route::get('/delete_single_product/{p_id}', [ProductController::class, 'deleteProduct'])
    ->name('delete_single_product')->middleware('loginAuthentication');
Route::post('/updateProduct', [ProductController::class, 'updateProduct'])
    ->name('updateProduct')->middleware('loginAuthentication');



