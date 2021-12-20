import React, {useEffect, useState} from 'react';
import Products from "./Products";
import Product from "./Product";

const SearchProduct = (props) => {
    const [nameFilterValue, setNameFilterValue] = useState("");
    const [filteredProduct, setFilterdProduct] = useState([]);

    useEffect(()=>{
        let pList=[];
        props.list.map(
            (p) => {

                if (p.p_name === nameFilterValue) {
                    pList.push(p);
                }
            }
        )
        setFilterdProduct(pList);
    },[nameFilterValue])

    return (
        <div>
            <h1> search product by name</h1>
            <input type="text" onChange={(e) => {
                setNameFilterValue(e.target.value);
            }}/>
            <Products list={filteredProduct}/>

        </div>
    );
};

export default SearchProduct;