import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


const Login = () => {
    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [redirectToDashboard, setRedirectToDashboard] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState([]);


    const loginSubmit = () => {
        let obj = {
            s_email: email,
            s_password: password,
        };


        axios
            .post("/login", obj)
            .then((resp) => {
                let token = resp.data;
                if (token.token) {
                    let user = { userId: token.userid, access_token: token.token };
                    localStorage.setItem("seller", JSON.stringify(user));
                    axios.defaults.headers.common["Authorization"] = token.token;
                    console.log(token.token);
                    setRedirectToDashboard(<Redirect to='/dashboard'/>)

                } else {
                    alert("email or password is invalid")
                }

            })
            .catch((err) => {
                console.log(err);
            });



    };
    return (
        <div>
            <form>
                <label>Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                />
                <label>Password: </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="button"
                    onClick={loginSubmit}
                    value="log in"
                />
            </form>
            {redirectToDashboard}
        </div>
    );
};

export default Login;