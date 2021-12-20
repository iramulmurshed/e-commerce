import React, {useEffect, useState} from 'react';
import Products from "./Products";
import Product from "./Product";

const SearchProduct = (props) => {
    const [nameFilterValue, setNameFilterValue] = useState("");
    const [filteredProduct, setFilterdProduct] = useState([]);

    useEffect(() => {
        let pList = [];
        props.list.map(
            (p) => {

                if (p.p_name === nameFilterValue) {
                    pList.push(p);
                }
            }
        )
        setFilterdProduct(pList);
    }, [nameFilterValue])

    return (
        <div>
            <h1 className="text-primary"> Search Product By Name:</h1>
            <input type="text" className="w-75 p-2 my-3" onChange={(e) => {
                setNameFilterValue(e.target.value);
            }}/>
            <Products list={filteredProduct}/>

        </div>
    );
};

export default SearchProduct;