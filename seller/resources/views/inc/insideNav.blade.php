<link rel="stylesheet" href="{{asset('css/insideNav.css')}}">
<nav class="inside-nav">
    <p class="logo">E-Shop</p>
    <a class="btn btn-success" id="home-btn" href="{{route('home')}}">Seller Dashboard</a>
    <div class="action-btn">
        <div>
{{--        <a class="btn btn-primary m-1" href="{{route('profile')}}"> Edit profile</a>--}}
        <a class="btn btn-danger m-1" href="{{route('logout')}}"> logout</a>
        </div>
        <p>{{ session()->get('seller')['s_email'] }}</p>
    </div>
</nav>
