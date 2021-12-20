import React, { useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const DeleteProduct = () => {


        const dId = useParams();
        useEffect(() => {
            axios
                .post(`delete_single_product/${dId.id}`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        });
    return (
        <div>
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