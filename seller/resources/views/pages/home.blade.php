@extends('layout.insideApp')

<link rel="stylesheet" href="{{asset('css/home.css')}}">
@section('content')
    <div class="home-container">
        <a href="{{route('add_product')}}"> Add product </a>
        <a href="{{route('show_product')}}"> Show product </a>
        <a href="{{route('profile')}}">Profile</a>
    </div>


@endsection

