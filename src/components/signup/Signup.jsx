import { Button } from '@material-ui/core'
import React from 'react'
import '../signup/Signup.scss'

export default function Signup() {
  return <div>
    <div className='signup' >
        <input className='fullName' type="text" placeholder='Full Name' helpertext='Full Name' ></input>
        <input className='emailInput' type="email" placeholder='Email Id' helpertext='Email' ></input>
        <input className='passwordSignup' type="password" placeholder='Password' helpertext='Password' ></input>
        <input className='numSignup' type="number" placeholder='Mobile Number' helpertext='number' ></input>

        <Button className='signupButton' style={{ backgroundColor: '#A03037' }} > SignUp </Button>
    </div>
    </div>;
}
