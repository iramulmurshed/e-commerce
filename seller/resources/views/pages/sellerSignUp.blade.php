@extends('layout.outsideApp')
@section('content')

    <link rel="stylesheet" href="{{asset('css/signup.css')}}">

    <form  action="{{route('signup')}}" method="POST">
    @csrf
    <div class="form-signup">
    <p>Name:</p>
    <input class="form-control" type="text" name="s_name">

    <p>Email:</p>
    <input class="form-control" type="text" name="s_email">

    <p>Password:</p>
    <input class="form-control" type="password" name="s_password">

    <p>Mobile No:</p>
    <input class="form-control" type="text" name="s_phone">

    <p>Select Gender:</p>
    <select class="form-select" name="s_gender" id="s_id">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
    </select>

    <p>Date of Birth</p>
    <input class="form-control" type="date" id="birthday" name="s_dob">

    @if ($errors->any())
    <div class="alert alert-danger mt-3">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <input class="btn btn-success" type="submit" value="Sign Up">
    </div>

</form>



@endsection
