import React from 'react';
import  { useState } from 'react';
import axios from 'axios'; 
import './Auth.css'

export default function Auth() {
    const url = "http://20.244.56.144/test/auth";

    const [token, setToken] = useState("");
    const [tokenType, setTokenType] = useState("")
    

    const [data, setData] = useState({
        companyName: "",
        clientId: "21731b96-08c8-4c5e-8477-639d41089d9",
        clientSecret: "TVtsSOMmjJmGfWpg",
        ownername: "",
        owneremail: "",
        rollNo: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const auth = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(url, data);
            if (response.data.status === 200) {
                setToken(response.data.access_token);
                setTokenType(response.data.token_type);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='auth'>
            <form onSubmit={auth}>
                <input
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    onChange={onChangeHandler}
                />
                {/* <input
                    type="text"
                    name="clientId"
                    placeholder="Client ID"
                    onChange={onChangeHandler}
                /> */}
                {/* <input
                    type="text"
                    name="clientSecret"
                    placeholder="Client Secret"
                    onChange={onChangeHandler}
                /> */}
                <input type="text" name="ownername" placeholder="Owner Name" onChange={onChangeHandler} />
                <input
                    type="email"
                    name="owneremail"placeholder="Owner Email" onChange={onChangeHandler}
                />
                <input
                    type="text"
                    name="rollNo"
                    placeholder="Roll Number"
                    onChange={onChangeHandler}
                />
                <button type="submit">Auth</button>
            </form>

            {token && tokenType && (
                <div>
                    <h1>{token}</h1>
                    <h1>{tokenType}</h1>
                </div>
            )}
        </div>
    );
}