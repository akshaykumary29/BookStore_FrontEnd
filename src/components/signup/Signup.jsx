import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import '../signup/Signup.scss'
import { registration } from '../../services/UserService'

export default function Signup() {
  const [inputField, setInputField] = useState({ fullName: '', email: '', password: '', number: '' })

  const [error, setError] = useState({
    fullNameError: '',
    emailError: '',
    passwordError: '',
    numberError: ''
  });

  const changeHandle = (e) => {
    setInputField({ [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  const validation = () => {
    let isError = false;
    error.fullNameError = inputField.fullName === '' ? true : false;
    error.emailError = inputField.email === '' ? true : false;
    error.passwordError = inputField.password === '' ? true : false;
    error.numberError = inputField.number === '' ? true : false;

    setError({
      ...error
    })

    return isError = error.fullNameError || error.emailError || error.passwordError || error.numberError;
  }

  function next() {
    let validated = validation();
    if (!validated) {
      console.log("validated");
      let data = {
        "fullName": inputField.fullName,
        "email": inputField.email,
        "password": inputField.password,
        "phone": inputField.number
      }
      registration(data)
        .then((res) => {
          console.log(res);

        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return <div>
    <div className='signup' >
      <TextField
        className='fullName'
        id='outlined-required'
        type="text"
        label="Full Name"
        variant='outlined'
        onChange={changeHandle}
        value={inputField.fullName}
        error={error.fullNameError}
        helpertext={error.fullNameError ? "fullname is required" : " "} >

      </TextField>

      <TextField
        className='emailInput'
        id='outlined-required'
        type="email"
        name="email"
        label="EmaiId"
        variant='outlined'
        onChange={changeHandle}
        value={inputField.email}
        error={error.emailError}
        helpertext={error.emailError ? "email required" : " "} >

      </TextField>

      <TextField
        className='passwordSignup'
        id='outlined-password'
        type="password"
        label="Password"
        variant='outlined'
        onChange={changeHandle}
        value={inputField.password}
        error={error.passwordError}
        helpertext={error.passwordError ? "password required" : " "} >

      </TextField>

      <TextField
        className='numSignup'
        id='outlined-required'
        label="MobileNumber"
        type="number"
        variant='outlined'
        onChange={changeHandle}
        value={inputField.number}
        error={error.numberError}
        helpertext={error.numberError ? "phonenumber required" : " "} >

      </TextField>

      <Button className='signupButton' style={{ backgroundColor: '#A03037' }} onClick={next} > SignUp </Button>
    </div>
  </div>;
}
