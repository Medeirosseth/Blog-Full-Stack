import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className="register">
    <span className='registerTitle'>Register </span>
    <form className="registerForm">
    <label>Username</label>
    <input input='text' className="loginInput" placeholder='Enter Username'></input>
      <label>Email</label>
      <input input='text' className="registerInput" placeholder='Enter Email'></input>
      <label>Password</label>
      <input input='text' className="registerInput" placeholder='Enter Password'></input>
      <label>Button</label>
      <button className='registerButton'>Register</button>
    </form>
      <button className='registerLoginButton'>
        <Link to='/login'>Login</Link>
      </button>
    </div>
  )
}
