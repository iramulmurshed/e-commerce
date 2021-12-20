import React,{useState,useEffect} from 'react';
import Logout from "../logout/Logout";
import {Link, Redirect} from "react-router-dom";
import "./nav.css"
import axios from "axios";

const Nav = () => {
    let [name,setName] =useState("")
    // useEffect(() => {


            let obj = JSON.parse(localStorage.getItem('seller'));
            let id = obj.userId;
            let url = `/profile/${id}`
            console.log(url);
            axios
                .get(url)
                .then((res) => {
                    let p = res.data;
                    setName(p.s_name);
                })
                .catch((err) => {
                    console.log(err);
                });

    // }, []);
    return (
        <div className="d-flex ">
            <p>E-SHOP</p>
            <div className="d-flex">

            <Link to="/dashboard"><button className="btn btn-primary">Seller Dashboard</button></Link>
                <p>{name}</p>
                <Logout/>
            </div>
        </div>
    );
};

export default Nav;