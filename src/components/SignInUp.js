import React from 'react';
import '../css/signInUp.css';

const SignInUp = (props) => (
  <div className="signup_page_body">
    <div className="signup_box ">
      <h2>Sign In / Sign Up</h2>
        <label>User Name</label>
        <input type="text" id="userName" value=""></input>
        <label>Password</label>
        <input type="password" id="password"  value=""></input>
        <button>Login</button>
        <button>Create account</button>
      </div>    
  </div>
);

export default SignInUp;