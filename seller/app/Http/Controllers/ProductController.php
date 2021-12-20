<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    //
    function viewProductPage(Request $request)
    {
        $data = Product::where('s_id', $request->s_id)->get();
        return $data;
    }

    function addSellerProductPage()
    {

        return view('pages.productPage');
    }


    function showSingleProduct(Request $request)
    {
        $data = Product::where('p_id', $request->p_id)->first();

        return view('pages.showSingleProduct')->with('product', $data);

    }

    function updateProduct(Request $request)
    {

        $validator = Validator::make($request->all(),
            [


                'p_name' => 'required|min:3|max:25',
                'p_type' => 'required|min:3|max:25',
                'p_des' => 'required|min:10|max:250',
                'p_price' => 'required|numeric',
                'p_status' => 'required',


            ]

        );
        if ($validator->fails()) {
            return response()->json([
                "validation_errors" => $validator->messages(),
            ]);
        } else {

            $Product = Product::where('p_id', $request->p_id)->first();
            $Product->p_name = $request->p_name;
            $Product->p_type = $request->p_type;
            $Product->p_des = $request->p_des;
            $Product->p_price = $request->p_price;
            $Product->p_status = "available";
            $Product->s_id = $request->s_id;
            $Product->save();
            return "product successfully added";
        }

    }

    function deleteProduct(Request $request)
    {
        $data = Product::where('p_id', $request->p_id)->first();
        $data->delete();
        return redirect()->route('show_product');
    }


    function verifyProduct(Request $request)
    {


        $validator = Validator::make($request->all(),
            [
                'p_name' => 'required|min:3|max:25',
                'p_type' => 'required|min:3|max:25',
                'p_des' => 'required|min:10|max:250',
                'p_price' => 'required|numeric',
                'p_status' => 'required',

            ]

        );

        if ($validator->fails()) {
            return response()->json([
                "validation_errors" => $validator->messages(),
            ]);
        } else {

            $Product = new Product();
            $Product->p_name = $request->p_name;
            $Product->p_type = $request->p_type;
            $Product->p_des = $request->p_des;
            $Product->p_price = $request->p_price;
            $Product->p_status = "available";
            $Product->s_id = $request->s_id;
            $Product->save();
            return "product successfully added";
        }
    }

}
