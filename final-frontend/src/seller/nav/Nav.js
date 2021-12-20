import React,{useState,useEffect} from 'react';
import Logout from "../logout/Logout";
import {Link, Redirect} from "react-router-dom";

const Nav = () => {

    return (
        <div>

            <Logout/>
            <Link to="/dashboard"><button>Seller Dashboard</button></Link>
        </div>
    );
};

export default Nav;