import React, { useEffect,useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Redirect} from "react-router-dom";

const DeleteProduct = () => {
    let [redirectToLogin, setRedirectToLogin] = useState("");

        const dId = useParams();
        useEffect(() => {
            if (!localStorage.getItem('seller')) {
                setRedirectToLogin(<Redirect to="/login"/>)
            }

            axios
                .post(`delete_single_product/${dId.id}`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        });
    return (
        <div>
            {redirectToLogin}
            <div className="d-flex flex-column justify-content-center">
                <h1 className="text-center m-5">product deleted</h1>
                <div className="mx-auto">
                    <Link to="/showproducts">
                        <button className="btn btn-primary mx-5">
                                back to show product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;