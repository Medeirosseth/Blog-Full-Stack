import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className="logIn">
    <span className='loginTitle'>LOG IN </span>
    <form className="loginForm">
      <label>Email</label>
      <input input='text' className="loginInput" placeholder='Enter Email'></input>
      <label>Password</label>
      <input input='text' className="loginInput" placeholder='Enter Password'></input>
      <label>Button</label>
      <button className='loginButton'>Login</button>
    </form>
      <button className='LoginRegisterButton'>
        <Link className="link" to='/register'>Register</Link>
      </button>
    </div>
  )
}
