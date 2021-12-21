import React, {useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import Products from "./Products";
import SearchProduct from "./SearchProduct";
import ShowProductCount from "./ShowProductCount";


const ShowProducts = () => {
    const [productList, setProductList] = useState([]);
    let [redirectToLogin, setRedirectToLogin] = useState("");
    const [a, setA] = useState(0);
    const [o, setO] = useState(0);
    const [u, setU] = useState(0);

    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            setRedirectToLogin(<Redirect to="/login"/>)
        } else {
            let seller = JSON.parse(localStorage.getItem('seller'))
            console.log(seller.access_token)
            const data = {
                s_id: seller.userId,
            }
            axios
                .post("/show_product", data)
                .then((res) => {
                    setProductList(res.data);
                    let data=res.data;
                    let  a1=0;
                    let  o1=0;
                    let  u1=0;
                    data.map((d)=>{

                        if(d.p_status==="available"){
                            a1++;
                        }
                        if(d.p_status==="stockOut"){
                            o1++;
                        }
                        if(d.p_status==="comingSoon"){
                            u1++;
                        }
                        console.log(a1);
                        console.log(o1);
                        console.log(u1);
                    })
                    setA(a1)
                    setU(u1)
                    setO(o1)
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
            {/*<ShowProducts u={u} o={o} a={a} />*/}
            {/*<ShowProductCount list={productList}/>*/}
            <ShowProductCount u={u} o={o} a={a}/>
            <div className="d-flex m-5">
                <div className="p-5 w-100">
                    <h1 className="mx-5">All posted Product</h1>
                    <Products list={productList}/>
                </div>
                <div className="p-5 w-100">
                    <SearchProduct list={productList}/>
                </div>
            </div>
        </div>
    );
};


export default ShowProducts;