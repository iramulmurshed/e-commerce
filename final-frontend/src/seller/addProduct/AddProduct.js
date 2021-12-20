import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";
import ErrorMessage from "../signup/ErrorMessage";

const AddProduct = () => {

    let [productName,setProductName]=useState("");
    let [productType,setProductType]=useState("");
    let [productDescription,setProductDescription]=useState("");
    let [productPrice,setProductPrice]=useState("");
    let [productStatus,setProductStatus]=useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState([]);
    let addProduct=()=>
    {
        let seller=JSON.parse(localStorage.getItem('seller'))
        console.log(seller.access_token)
        const data = {
            p_name: productName,
            p_type: productType,
            p_des: productDescription,
            p_price: productPrice,
            p_status: productStatus,
            s_id: seller.userId,



        };
        console.log(data);

        axios.post("/add_product", data).then((res) => {
            console.log(res.data)
            if (res.data.validation_errors) {
                const errors = res.data.validation_errors;
                let errorMessage = [];
                for (const error in res.data.validation_errors) {
                    errorMessage.push(errors[error]);
                }
                console.log(errorMessage);
                setValidationErrorMessage(errorMessage);
            } else {
                console.log("added");

            }
        });
    }

    return (
        <div>
            <ErrorMessage messeges={validationErrorMessage}/>
            <form>
                <div>

                    <p>Product name:</p>
                    <input
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        type="text"
                        placeholder="Product name"
                    />

                    <p>Product type:</p>
                    <input
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        type="text"
                        placeholder="Product type"
                    />


                    <p>Product description:</p>
                    <input
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        type="text"
                        placeholder="Product description"
                    />


                    <p>Product price:</p>
                    <input
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        type="text"
                        placeholder="Price"
                    />


                    <p>Product Status:</p>

                    <select
                        onChange={(e) => setProductStatus(e.target.value)}
                        defaultValue={''}
                        className="form-select"
                    >
                        <option value=''>Select Product Status</option>
                        <option value="available">Available</option>
                        <option value="stockOut">Stock out</option>
                        <option value="comingSoon">Coming Soon</option>
                    </select>


                    <input type="button" onClick={addProduct} value="add product"/>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;