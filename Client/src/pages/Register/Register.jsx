import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { axios } from 'axios'
import './register.css'

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth/register", {
      username, 
      email, 
      password,
    });
      console.log(res.data)
  }

  return (
    <div className="register">
      <span className='registerTitle'>Register </span>
      <form className="registerForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          input='text' 
          className="loginInput" 
          placeholder='Enter Username'
          onChange={e => setUsername(e.target.value)}>
        </input>
        <label>Email</label>
          <input 
            input='text' 
            className="registerInput" 
            placeholder='Enter Email'
            onChange={e => setEmail(e.target.value)}>
          </input>
        <label>Password</label>
        <input 
          input='text' 
          className="registerInput" 
          placeholder='Enter Password'
          onChange={e => setPassword(e.target.value)}>
          
        </input>
          <button className='registerButton' type="submit">Register</button>
      </form>
      <button className='registerLoginButton'>
        <Link to='/login' className="link">Login</Link>
      </button>
    </div>
  )
}
