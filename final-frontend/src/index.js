import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from "./seller/signup/Signup";


let token = null;
if(localStorage.getItem('moderator')){
    let obj = JSON.parse(localStorage.getItem('moderator'));
    token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
         <Route exact path='/signup'><Signup/></Route>
     </Switch>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
