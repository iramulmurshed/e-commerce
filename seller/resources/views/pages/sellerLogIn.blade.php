@extends('layout.outsideApp')
<link rel="stylesheet" href="{{asset('css/login.css')}}">
@section('content')


<form class="form-login" action="{{route('login')}}" method="post">
    @csrf

    <p>Email:</p>
    <input class="form-control" type="text" name="s_email">

    <p>Password:</p>
    <input class="form-control mb-2" type="password" name="s_password">

    @if ($errors->any())
    <div class="alert alert-danger mt-3">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <input class="btn btn-success mt-3" type="submit" value="Login">

</form>


@endsection