@extends('layout.insideApp')
<link rel="stylesheet" href="{{asset('css/Profile.css')}}">
@section('content')
<form action="{{route('profileUpdate')}}" method="POST">
    @csrf

    <div class="container-profile-update">
        <p>Name:</p>
        <input class="form-control" type="text" name="s_name" value=" {{$seller->s_name}}">

        <p>Email: </p>
        <p class="form-control">{{$seller->s_email}} </p>

        <p>Password:</p>
        <input class="form-control" type="password" name="s_password" value=" {{$seller->s_password}}">


        <p>Mobile No:</p>

        <input class="form-control" type="text" name="s_phone" value="{{$seller->s_phone}}">


        <p>Gender: </p>
        <p class="form-control"> {{$seller->s_gender}} </p>


        <p>Date of Birth:</p>
        <input class="form-control" type="date" id="birthday" name="s_dob" value="{{$seller->s_dob}}">

        @if ($errors->any())
        <div class="alert alert-danger my-3">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif


        <input class="btn btn-primary my-2" type="submit" value="Update Profile">

    </div>
</form>



@endsection
