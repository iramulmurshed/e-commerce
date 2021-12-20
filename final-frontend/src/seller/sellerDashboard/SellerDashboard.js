import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";

const SellerDashboard = () => {



    let [redirectToLogin,setRedirectToLogin]=useState("");
    useEffect(()=> {
        if(!localStorage.getItem('seller')){
                setRedirectToLogin(<Redirect to="/login"/>)
        }
        console.log("hello");
    },[])


    return (
        <div>
            {redirectToLogin}
            <Link to="/showproducts"><button className="btn btn-primary">Show All Product</button></Link>
            <Link to="/addproduct"><button className="btn btn-primary">Add New Product</button></Link>
            <Link to="/profile"><button className="btn btn-primary">View Profile</button></Link>
        </div>
    );
};

export default SellerDashboard;