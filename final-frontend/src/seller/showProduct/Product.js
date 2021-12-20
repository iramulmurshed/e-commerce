import React from 'react';
import "./product.css"
import {Link} from "react-router-dom";

const Product = (props) => {
    const data = props.data;
    return (
        <div>
            <div className="product-card m-5">
                <div>
                <p>product id:</p><p className="text-danger"> {data.p_id}</p>
                <p>product Name :</p><p> {data.p_name}</p>
                <p>product Status :</p><p>{data.p_status}</p>
                <p>Product Type : </p><p>{data.p_type}</p>
                {/*</div>*/}
                {/*<div>*/}
                <p id="p-desc">Product Description :</p><p className="text-success">{data.p_des}</p>
                <p>product price : </p><p className="text-primary">{data.p_price}</p>
                </div>

            <div className="d-flex justify-content-evenly">
                <Link to={{pathname: `update/${data.p_id}`}}>
                    <button className="btn btn-primary py-2 px-5 mx-5 my-4">update</button>
                </Link>
                <Link to={{pathname: `delete/${data.p_id}`}}>
                    <button className="btn btn-danger  py-2 px-5 mx-5  my-4">delete</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Product;