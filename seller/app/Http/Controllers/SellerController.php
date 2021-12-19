<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SellerController extends Controller
{
    function viewSellerSignUpPage()
    {
        if (session()->has('seller')) {
            return redirect()->route('home');
        }
        return view('pages.sellerSignUp');
    }

    function viewSellerLogInPage()
    {
        if (session()->has('seller')) {
            return redirect()->route('home');
        }

        return view('pages.sellerLogin');
    }

    function viewSellerHomePage()
    {

        return view('pages.home');
    }


    function profilePage(Request $request)
    {


        $data = Seller::where('s_id', $request->session()->get('seller')['s_id'])->first();

        return view('pages.profile')->with('seller', $data);


    }

    function profileUpdate(Request $request)
    {


        $validate = $request->validate(
            [
                's_name' => 'required|min:3|max:25',
                's_password' => 'required|min:6',
                's_phone' => 'required|numeric',
                's_dob' => 'required',


            ],
            [
                's_name.required' => 'please enter your full name',
                's_name.min' => 'name can contain minimum 3 character',
                's_name.max' => 'name can contain maximum 25 character',


                's_password.required' => 'please enter your password',
                's_password.min' => 'password must contain 6 character',

                's_phone.required' => 'Enter a valid phone number',
                's_phone.numeric' => 'Only use Numbers',

                's_dob.required' => 'Date of Birth is required',


            ]
        );
        $Seller = Seller::where('s_id', $request->session()->get('seller')['s_id'])->first();

        $Seller->s_name = $request->s_name;
        $Seller->s_password = $request->s_password;
        $Seller->s_phone = $request->s_phone;
        $Seller->s_dob = $request->s_dob;


        $Seller->save();
        return redirect()->route('profile');
    }


    function verifySignup(Request $request)
    {

        $validator = Validator::make($request->all(),
            [
                's_name' => 'required|min:3|max:25',
                's_password' => 'required|min:6',
                's_phone' => 'required|numeric',
                's_email' => 'required|unique:sellers,s_email|email',
                's_dob' => 'required',
                's_gender' => 'required',

            ],
            [
                's_name.required' => 'please enter your full name',
                's_name.min' => 'name can contain minimum 3 character',
                's_name.max' => 'name can contain maximum 25 character',

                's_email.required' => 'please enter your email',
                's_email.email' => 'please enter valid email',
                's_email.unique' => 'this email is already taken',

                's_password.required' => 'please enter your password',
                's_password.min' => 'password must contain 6 character',

                's_phone.required' => 'Enter a valid phone number',
                's_phone.numeric' => 'Only use Numbers',

                's_dob.required' => 'Date of Birth is required',

                's_gender.required' => 'gender field is required',


            ]
        );
        if ($validator->fails()) {
            return response()->json([
                "validation_errors" => $validator->messages(),
            ]);
        } else {

            $Seller = new Seller();
            $Seller->s_name = $request->s_name;
            $Seller->s_password = $request->s_password;
            $Seller->s_phone = $request->s_phone;
            $Seller->s_email = $request->s_email;
            $Seller->s_dob = $request->s_dob;
            $Seller->s_gender = $request->s_gender;
            $Seller->s_status = "valid";
            $Seller->save();

            return response()->json([
                "status" => 200,
                "message" => "Seller signup successful"
            ]);
        }


    }


    function verifyLogin(Request $request)
    {
        $validate = $request->validate(
            [

                's_password' => 'required|min:6',
                's_email' => 'required|email',

            ],

            [

                's_email.required' => 'please enter your email',
                's_email.email' => 'please enter valid email',
                's_password.required' => 'please enter your password',
                's_password.min' => 'password must contain 6 character',

            ]);

        $data = Seller::where('s_email', $request->s_email)->where('s_password', $request->s_password)->first();

        if ($data) {
            $request->session()->put('seller', ['s_email' => $data->s_email, 's_name' => $data->s_name, 's_id' => $data->s_id]);

            return redirect()->route('home');
        } else {
            return "not found";

        }
        return redirect()->route('home');
    }


    function sellerLogout()
    {
        session()->flush();
        return redirect()->route('login');
    }


}
