import React from "react";
import "./styles/Register.css";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  
  const router =useNavigate();
  return (
    <div id="screen">
      <div id="left">
        <img src="https://static.vecteezy.com/system/resources/previews/024/100/488/non_2x/account-login-and-password-on-smartphone-and-laptop-screen-data-protection-cyber-security-online-registration-confidentiality-concept-modern-flat-cartoon-style-illustration-vector.jpg"/>
      </div>
      <div id="box">
        <h2>Register</h2>
        <div id="formone">
          <form>
            <div>
              <label>First Name:</label>
              <input placeholder="Enter First Name" />
            </div>
            <div>
              <label>Last Name:</label>
              <input placeholder="Enter Last Name" />
            </div>
            <div>
              <label>Role:</label>
              <select>
                <option value="Select Role">Select Role</option>
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>
            <div>
              <label>Email ID:</label>
              <input placeholder="Enter Email Id" />
            </div>
            <div>
              <label>Phone Number:</label>
              <div >
                <select
                >
                  <option></option>
                  <option>+01</option>
                  <option>+91</option>
                  <option>+345</option>
                  <option>+99</option>
                  <option>+21</option>
                </select>
                <input
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <input placeholder="Enter Password" />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input placeholder="Enter Confirm Password" />
            </div>
            <button >Register</button>
            <p>
              Already have an account?<b onClick={()=>router('/login')}>Login</b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
