import React, {useState, useEffect} from 'react';
import Logout from "../logout/Logout";
import {Link, Redirect} from "react-router-dom";
import "./nav.css";
import axios from "axios";

const Nav = () => {
    let [name, setName] = useState("")
    // useEffect(() => {

    let [redirectToLogin, setRedirectToLogin] = useState("");
    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            setRedirectToLogin(<Redirect to="/login"/>)
        }
        else {
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

        }

    }, [])
    // let obj = JSON.parse(localStorage.getItem('seller'));
    // let id = obj.userId;
    // let url = `/profile/${id}`
    // console.log(url);
    // axios
    //     .get(url)
    //     .then((res) => {
    //         let p = res.data;
    //         setName(p.s_name);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    //
    // // }, []);
    return (

        <div className="position-sticky top-0">
            {redirectToLogin}
            <div className="d-flex justify-content-evenly s-nav bg-opacity-100 p-2">
                <h1 className="text-center text-color mx-4 text-uppercase">
                    E-SHOP
                </h1>
                <h1 className="s-dash">Seller Dashboard</h1>
                <div className="d-flex flex-row justify-content-evenly p-2">
                    <Link to="/dashboard">
                        <button className="btn btn-success mx-3">home</button>
                    </Link>
                    <div>
                        <h4 className="text-light mx-3">Welcome Back, {name}</h4>
                    </div>
                    <div>
                        <Logout/>
                    </div>

                </div>
            </div>
        </div>
        // <div className="d-flex justify-content-around nav-bar s-nav position-sticky top-0 align-items-center">
        //     <p className="mx-5">E-SHOP</p>
        //     <div className="d-flex w-100 h-100  align-items-center">
        //
        //         <Link to="/dashboard">
        //             <button className="btn btn-primary mx-5">Seller Dashboard</button>
        //         </Link>
        //         <p className="mx-5 s-name">{name}</p>
        //         <div className="mx-5">
        //         <Logout/>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Nav;