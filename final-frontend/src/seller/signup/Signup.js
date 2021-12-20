import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";
import ErrorMessage from "./ErrorMessage";


const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDoB] = useState("");
    const [phone, setPhone] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState([]);
    const [redirectToLogin, setRedirectToLogin] = useState("");
    let [redirectToDashboard, setRedirectToDashboard] = useState("");
    useEffect(()=>{
        if(localStorage.getItem('seller')){
            setRedirectToDashboard(<Redirect to="/dashboard"/>)
        }
    })
    const signUpAction = () => {
        const data = {
            s_name: name,

            s_password: password,
            s_phone: phone,
            s_email: email,
            s_dob: dob,
            s_gender: gender,


        };
        console.log(data);
        axios.post("/signup", data).then((res) => {
            if (res.data.validation_errors) {
                const errors = res.data.validation_errors;
                let errorMessage = [];
                for (const error in res.data.validation_errors) {
                    errorMessage.push(errors[error]);
                }
                console.log(errorMessage);
                setValidationErrorMessage(errorMessage);
            } else {
                setRedirectToLogin(<Redirect to="/login" />);
            }
        });
    };

    return (
        <div>
            {redirectToDashboard}
            <ErrorMessage messeges={validationErrorMessage}/>
            <form className="w-50 d-flex mx-auto my-5 flex-column">
                <label>Full Name: </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <label>Password: </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <label>Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                />
                <label>Select Gender: </label>
                <select
                    onChange={(e) => setGender(e.target.value)}
                    defaultValue={''}
                    className="form-select"
                >
                    <option value=''>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <label>Birth Date:</label>
                <input
                    value={dob}
                    onChange={(e) => setDoB(e.target.value)}
                    type="date"
                />
                <label>Phone Number: </label>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Phone Number"
                />
                <input
                    type="button"
                    className="btn btn-success my-2"
                    value="Sign Up"
                    onClick={signUpAction}
                />
            </form>
            {redirectToLogin}
        </div>
    );
};

export default Signup;