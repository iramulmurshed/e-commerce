import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";

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
            <h1>Seller Dashboard</h1>
        </div>
    );
};

export default SellerDashboard;