import React from 'react'
import './styles/Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const router =useNavigate();
  return (
    <div id="screen">
    <div id="box">
      <h2>Login</h2>
      <div id="formone">
        <form>
          <div>
            <label>Email ID:</label>
            <input placeholder="Enter Email Id" />
          </div>
          <div>
            <label>Password:</label>
            <input placeholder="Enter Password" />
          </div>
          <button>Login</button>
          <p>
            New User?<b onClick={()=>router('/register')}>Register</b>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
