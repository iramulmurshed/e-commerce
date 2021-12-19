@extends('layout.insideApp')
<link rel="stylesheet" href="{{asset('css/viewSingleProduct.css')}}">
@section('content')


    <form action="{{route('updateProduct')}}" method="POST">
        @csrf

        <div class="products-details">
            <p>Product id:</p>
            <p class="form-control">{{$product->p_id}}</p>
            <input class="form-control" type="hidden" name="p_id" value="{{$product->p_id}}">


            <p>Product name:</p>
            <input class="form-control" type="text" name="p_name" value="{{$product->p_name}}">


            <p>Product type:</p>
            <input class="form-control" type="text" name="p_type" value="{{$product->p_type}}">


            <p>Product description:</p>
            <textarea class="form-control" type="text" name="p_des" rows="4" cols="50">{{$product->p_des}}</textarea>


            <p>Product price:</p>
            <input class="form-control" type="text" name="p_price" value="{{$product->p_price}}">


            @if ($errors->any())
                <div class="alert alert-danger my-3">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <input class="btn btn-primary my-2 mt-4" type="submit" value="Update Product Data">

            <a class="btn btn-danger my-2" href="/delete_single_product/{{$product->p_id}}">Delete Product Data</a>
        </div>
    </form>



@endsection()
