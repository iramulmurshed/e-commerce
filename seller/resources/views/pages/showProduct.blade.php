@extends('layout.insideApp')
<link rel="stylesheet" href="{{asset('css/showProduct.css')}}">
@section('content')
    <div class="products">
    @foreach($products as $product)

        <div class="product-card">
            <div>
                <p> Product ID: </p>
                <p> {{$product->p_id}} </p>
                <p> Product name: </p>
                <p> {{$product->p_name}} </p>
                <p> Product type: </p>
                <p> {{$product->p_type}} </p>
                <p> Product price: </p>
                <p>{{$product->p_price}}</p>
            </div>
            <a class="btn btn-success" href="/view_single_product/{{$product->p_id}}">view this product</a>
        </div>
    @endforeach
    </div>
@endsection
