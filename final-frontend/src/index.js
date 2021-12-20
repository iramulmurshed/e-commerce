import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from "./seller/signup/Signup";
import Login from "./seller/login/Login";
import SellerDashboard from "./seller/sellerDashboard/SellerDashboard";
import AddProduct from "./seller/addProduct/AddProduct";
import ShowProducts from "./seller/showProduct/ShowProducts";


let token = null;
if(localStorage.getItem('seller')){
    let obj = JSON.parse(localStorage.getItem('seller'));
    token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
         <Route exact path='/signup'><Signup/></Route>
         <Route exact path='/login'><Login/></Route>
         <Route exact path='/dashboard'><SellerDashboard/></Route>
         <Route exact path="/addproduct"><AddProduct/></Route>
         <Route exact path="/showproducts"><ShowProducts/></Route>
         <Route exact path="/updateproduct:id"><ShowProducts/></Route>
     </Switch>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
