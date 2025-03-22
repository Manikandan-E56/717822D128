import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'

const Register = () => {
    const url = "http://20.244.56.144/test";
    const [clientId, setClientId] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    const [data, setData] = useState({
        companyname: "",
        ownername: "",
        rollnumber: "",
        owneremail: "",
        accesscode: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${url}/register`, data);
            if (response.data.status === 200) {
                setClientId(response.data.clientId);
                setClientSecret(response.data.clientSecret);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={register}>
                <input
                    type="text"
                    placeholder="Company Name"
                    name="companyname"
                    onChange={onChangeHandler}
                    value={data.companyname}
                />
                <input
                    type="text"
                    placeholder="Owner Name"
                    name="ownername"
                    onChange={onChangeHandler}
                    value={data.ownername}
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    name="rollnumber"
                    onChange={onChangeHandler}
                    value={data.rollnumber}
                />
                <input
                    type="email"
                    placeholder="Owner Email"
                    name="owneremail"
                    onChange={onChangeHandler}
                    value={data.owneremail}
                />
                <input
                    type="text"
                    placeholder="Access Code"
                    name="accesscode"
                    onChange={onChangeHandler}
                    value={data.accesscode}
                />
                <button type="submit">Register</button>
            </form>
            {clientId && clientSecret && (
                <div>
                    <h1>Client ID: {clientId}</h1>
                    <h1>Client Secret: {clientSecret}</h1>
                </div>
            )}
        </>
    );
    
};

export {Register};