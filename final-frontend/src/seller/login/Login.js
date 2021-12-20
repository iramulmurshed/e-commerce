import React, {useEffect, useState} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import ErrorMessage from "../signup/ErrorMessage";


const Login = () => {
    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [redirectToDashboard, setRedirectToDashboard] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState([]);


    useEffect(() => {
        if (localStorage.getItem('seller')) {
            setRedirectToDashboard(<Redirect to="/dashboard"/>)
        }
    })

    const loginSubmit = () => {
        let obj = {
            s_email: email,
            s_password: password,
        };


        axios
            .post("/login", obj)
            .then((resp) => {
                let token = resp.data;
                if (resp.data.validation_errors) {
                    const errors = resp.data.validation_errors;
                    let errorMessage = [];
                    for (const error in resp.data.validation_errors) {
                        errorMessage.push(errors[error]);
                    }
                    console.log(errorMessage);
                    setValidationErrorMessage(errorMessage);
                } else {
                    if (token.token) {
                        let user = {userId: token.userid, access_token: token.token};
                        localStorage.setItem("seller", JSON.stringify(user));
                        axios.defaults.headers.common["Authorization"] = token.token;
                        console.log(token.token);
                        setRedirectToDashboard(<Redirect to='/dashboard'/>)

                    } else {
                        alert("email or password is invalid")
                    }
                }

            })
            .catch((err) => {
                console.log(err);
            });


    };
    return (
        <div>
            <ErrorMessage messeges={validationErrorMessage}/>
            <form className="d-flex flex-column w-50 mx-auto m-5 bg-success p-5 bg-opacity-25">

                <label className="">Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    className="my-3 p-2"
                />
                <label>Password: </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="my-3 p-2"
                />
                <input
                    className="btn btn-primary my-3 p-1"
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