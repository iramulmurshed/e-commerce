import React,{useState,useEffect} from 'react';
import Logout from "../logout/Logout";
import {Link, Redirect} from "react-router-dom";
import "./nav.css"

const Nav = () => {

    return (
        <div className="d-flex ">
            <p>E-SHOP</p>
            <div className="d-flex">

            <Link to="/dashboard"><button className="btn btn-primary">Seller Dashboard</button></Link>
                <Logout/>
            </div>
        </div>
    );
};

export default Nav;