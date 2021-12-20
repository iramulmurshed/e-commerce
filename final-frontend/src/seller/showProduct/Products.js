import React from 'react';
import Product from "./Product";

const Products = (props) => {
    return (
        <div>
            {
                props.list.map(
                    p=><Product key={p.p_id} data={p}></Product>
                )
            }
        </div>
    );
};

export default Products;