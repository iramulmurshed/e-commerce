@extends('layout.insideApp')

<link rel="stylesheet" href="{{asset('css/productPage.css')}}">

@section('content')

<form action="{{route('add_product')}}" method="POST">
    @csrf

    <div class="add-product-container">
        <p>Product name:</p>
        <input class="form-control" type="text" name="p_name">


        <p>Product type:</p>
        <input class="form-control" type="text" name="p_type">


        <p>Product description:</p>
        <input class="form-control" type="text" name="p_des">


        <p>Product price:</p>
        <input class="form-control" type="text" name="p_price">


        <p>Product Status:</p>
        <select class="form-select" name="p_status" class="form-select">
            <option selected value="available">Available</option>
            <option value="stockOut">Stock out</option>
            <option value="comingSoon">Coming Soon</option>
        </select>

        @if ($errors->any())
        <div class="alert alert-danger my-3">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        <input class="btn btn-success my-3" type="submit" value="Submit">
    </div>

</form>
@endsection
