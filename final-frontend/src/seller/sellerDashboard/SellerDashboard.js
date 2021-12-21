import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import "./dashboard.css"
import axios from "axios";


const SellerDashboard = () => {


    let [redirectToLogin, setRedirectToLogin] = useState("");
    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            setRedirectToLogin(<Redirect to="/login"/>)
        }
        console.log("hello");

    }, [])


    return (
        <div>
            {redirectToLogin}

            <div className="d-flex flex-column mx-auto w-50 action-container ">
                <Link to="/showproducts">
                    <button className="btn btn-primary  p-5 m-3 w-100" id="bt-text2">Show All Product</button>
                </Link>
                <Link to="/addproduct">
                    <button className="btn btn-primary   p-5 m-3 w-100" id="bt-text1">Add New Product</button>
                </Link>
                <Link to="/profile">
                    <button className="btn btn-primary  p-5 m-3 w-100" id="bt-text3">View Profile</button>
                </Link>
            </div>
        </div>
    );
};

export default SellerDashboard;