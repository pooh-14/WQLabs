import React from "react";
import forgotIcon from '../Images/forgot-icon.png'
import hideIcon from '../Images/hide-icon.png'
import hrms from '../Images/HRMS-SYMBOL-BLACK.png'
import './styles/Login.css'

const Login = () => {
  return (
    <div  id="screen">
      <div class='box'>
      <div id="start" class="container border rounded-top-1 text-white bs">
        <p class='mt-4'>Welcome Back!</p> 
        <p>Sign in to continue to HRMS</p>
        <div id="logo">
        <img src={hrms}/>
      </div>
      </div>
      <div class="container bs rounded-bottom-1 bg-light d-flex flex-column">
        <label class="form-label mt-5">Username</label>
        <input class="form-control ht" />
        <label class="form-label mt-3">Password</label>
        <div class='input-group mb-2' >
        <input class="form-control ht" />
        <img  class="input-group-text ht" src={hideIcon}/>
        </div>
        <div class='mt-1'>
          <input class="form-check-input cb  mb-1" type="checkbox" />
          <label class="form-check-label ms-2">Remember Me</label>
        </div>
        <div class="btn btn-success button">Login</div>
        <div class='d-flex mt-4 text justify-content-center'>
            <img class="ic me-1" src={forgotIcon}/>
            <p>Forgot your password?</p>
        </div>
        <div id="seclast" class='d-flex  w-100 justify-content-center '>
      <i class="bi bi-c-circle pe-1 "></i>
        <p class='pe-1'>2023 HRMS. Crafted with</p>
        <i class="bi bi-heart-fill pe-1"></i>
        <p>by Werq Labs</p>
      </div>
      </div>
      </div>
      <div id="last" class='d-flex mt-3 w-100 justify-content-center '>
      <i class="bi bi-c-circle pe-1 "></i>
        <p class='pe-1'>2023 HRMS. Crafted with</p>
        <i class="bi bi-heart-fill pe-1"></i>
        <p>by Werq Labs</p>
      </div>
      
    </div>
  );
};

export default Login;
