import React, {useState, useEffect} from 'react';
import axios from "axios";
import ErrorMessage from "../signup/ErrorMessage";
import {Redirect} from "react-router-dom";

const Profile = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDoB] = useState("");
    const [phone, setPhone] = useState("");


    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");


    const [validationErrorMessage, setValidationErrorMessage] = useState([]);

    let [redirectToLogin, setRedirectToLogin] = useState("");


    useEffect(() => {
        if (!localStorage.getItem('seller')) {
            setRedirectToLogin(<Redirect to="/login"/>)
        } else {
            console.log("hello");
            let obj = JSON.parse(localStorage.getItem('seller'));
            let id = obj.userId;
            let url = `/profile/${id}`
            console.log(url);
            axios
                .get(url)
                .then((res) => {
                    let p = res.data;
                    setName(p.s_name);
                    setPassword(p.s_password);
                    setDoB(p.s_dob);
                    setPhone(p.s_phone);
                    setEmail(p.s_email);
                    setGender(p.s_gender);
                    console.log(p);


                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);


    let updateProfile = () => {


        let obj1 = JSON.parse(localStorage.getItem('seller'));
        let id1 = obj1.userId;

        const data = {
            s_name: name,

            s_phone: phone,
            s_dob: dob,
            s_id: id1,
        };

        console.log(data);

        axios.post("/profileUpdate", data).then((res) => {
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
                alert("updated");
                setValidationErrorMessage([]);

            }
        });
    }


    return (
        <div>
            {redirectToLogin}
            <ErrorMessage messeges={validationErrorMessage}/>
            <form>
                <label>Full Name: </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <h4>Email : {email}</h4>

                <h4>Gender: {gender}</h4>
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
                <input type="button" onClick={updateProfile} value="update"/>
            </form>
        </div>
    );
};


export default Profile;