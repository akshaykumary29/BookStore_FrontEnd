import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import '../login/Login.scss'


function Login() {
    const [inputField, setInputField] = useState({ email: '', password: '' })

    const [error, setError] = useState({ emailError: '', passError: '' });

    // const inputEmail = (e) => {
    //     setInputField({ ...inputField, [e.target.name]: e.target.value })
    //     console.log(e.target.value);
    // }

    // const inputPassword = (e) => {
    //     setInputField(
    //         { ...inputField, [e.target.name]: e.target.value }
    //     )
    //     console.log(e.target.value);
    // }

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value} )
         console.log(e.target.value);
       }

    const validation = () => {
        let isError = false;
        error.emailError = inputField.email === '' ? true : false;
        error.passError = inputField.password === '' ? true : false;

        setError({
            ...error
        })

        return isError = error.emailError || error.passError;
    }

    function next() {
        var validated = validation()
        if (!validated) {
            let data = {
                "email": inputField.email,
                "password": inputField.password
            }
        }
    }



    return (
        <div className="login">

            <TextField
                required
                id="outlined-email"
                className="emailInput"
                // type="text"
                label="Email Id"
                variant="outlined"
                fullWidth 
                onChange={inputsHandler}
                value={inputField.email}
                error={error.emailError}
                helpertext={error.emailError ? "email required" : " "}>

            </TextField><br></br>

            <TextField
                required
                className="passInput"
                id="outlined-password"
                label="Password"
                // type="password"
                // placeholder="Password"
                variant="outlined"
                fullWidth
                onChange={inputsHandler}
                value={inputField.password}
                error={error.passError}
                helpertext={error.passError ? "password required" : " "} >

            </TextField>
            <br />
            <Button className="loginButton" style={{ backgroundColor: '#A03037' }} onClick={next} > Login </Button>

            <p className="midBar">OR</p>

            <div className="twoButton">
                <Button className="fdButton" style={{ backgroundColor: "#4266B2" }} variant="contained" >Facebook</Button>
                <Button className="googleButton" variant="contained" >Google</Button>
            </div>
        </div>
    );
}

export default Login;