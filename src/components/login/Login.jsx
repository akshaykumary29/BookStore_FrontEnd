import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import '../login/Login.scss'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/UserService';


function Login() {
    let history = new useHistory();

    const email = /akkiyam29@gmail.com/;
    const password = /akshayyam@123/;
    const [inputField, setInputField] = useState({
        email: '',
        password: '',
        emailError: false,
        passError: false
    })

    // const [error, setError] = useState({ ,  });

    const inputsHandler = (e) => {
        setInputField({
            // return { [e.target.name]: e.target.value }
            // console.log(e.target.value);
            ...inputField, email: e.target.value
        })
    }

    const validation = () => {
        // let isError = false;
        let emailIdError = inputField.email === '' ? true : false;
        let passwordError = inputField.password === '' ? true : false;

        setInputField((previousvalues) => {
            return { ...previousvalues, emailError: emailIdError, passError: passwordError }
        })

        return emailIdError || passwordError;
    }

    const next = () => {
        var validated = validation()
        if (!validated) {
            let data = {
                "email": inputField.email,
                "password": inputField.password
            }
            login(data).then((res) => {
                console.log(res);

                localStorage.setItem('token', res.data.result.accessToken)
                console.log("this is token" + localStorage.setItem('token', res.data.result.accessToken));

                history.push('/homepage')
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    }



    return (
        <div className="login">

            <TextField
                name="emailId"
                id="outlined-email"
                className="emailInput"
                type="text"
                label="Email Id"
                variant="outlined"
                // onChange={inputsHandler}
                onChange={(e) => inputsHandler(e)}
                // value={inputField.email}
                error={inputField.emailError}
            // helpertext={error.emailError ? "email required" : " "}
            >

            </TextField><br></br>

            <TextField
                name="password"
                className="passInput"
                id="outlined-password"
                label="Password"
                type="password"
                variant="outlined"
                // onChange={inputsHandler}
                onChange={(e) => inputsHandler(e)}
                // value={inputField.password}
                error={inputField.passError}
            // helpertext={error.passError ? "password required" : " "} 
            >

            </TextField>
            <br />
            <Button className="loginButton" style={{ backgroundColor: '#A03037' }} onClick={() => next()} > Login </Button>

            <p className="midBar">OR</p>

            <div className="twoButton">
                <Button className="fdButton" style={{ backgroundColor: "#4266B2" }} variant="contained" >Facebook</Button>
                <Button className="googleButton" variant="contained" >Google</Button>
            </div>
        </div>
    );
}

export default Login;