import React, {useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import Products from "./Products";
import SearchProduct from "./SearchProduct";


const ShowProducts = () => {
    const [productList, setProductList] = useState([]);
    let [redirectToLogin, setRedirectToLogin] = useState("");


    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            setRedirectToLogin(<Redirect to="/login"/>)
        }else{
        let seller = JSON.parse(localStorage.getItem('seller'))
        console.log(seller.access_token)
        const data = {
            s_id: seller.userId,
        }
        axios
            .post("/show_product",data)
            .then((res) => {
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []);

    // useEffect(()=>{
    //     //console.log(nameFilterValue)
    //
    //
    //     let productListCopy=[...productList];
    //     const result = productListCopy.filter(p =>p.p_name===nameFilterValue);
    //     console.log(result);
    //     setProductList(result);
    //
    // },[nameFilterValue])

    return (
        <div>
            {redirectToLogin}
            <SearchProduct list={productList}/>

            <h1>All posted Product</h1>
            <Products list={productList}/>
        </div>
    );
};



export default ShowProducts;