import React from 'react';

import {Link} from "react-router-dom";

const Product = (props) => {
    const data = props.data;
    return (
        <div>
            <h4>product id: {data.p_id}</h4>
            <h4>product Name : {data.p_name}</h4>
            <h4>product Status : {data.p_status}</h4>
            <h4>Product Type : {data.p_type}</h4>
            <h4>Product Description : {data.p_des}</h4>
            <h4>product price : {data.p_price}</h4>
            {/*<UpdateProduct data={data}></UpdateProduct>*/}

          <Link to={{pathname: `update/${data.p_id}`}} ><button>update</button></Link>
            <Link to={{pathname: `delete/${data.p_id}`}} ><button>delete</button></Link>
        </div>
    );
};

export default Product;