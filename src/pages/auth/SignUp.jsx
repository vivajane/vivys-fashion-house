import "./SignIn.css";
import React from "react";
import Button from "../../Assets/Button";

const SignUp = () => {
  return (
    <div className="div-form">
      <div className="sign-up"><p>SIGN UP</p></div>
      <form className="sign-up-form">
        <div className="fullname">
          <label htmlFor="name">
            Fullname
            <input type="text" name="name" id="" />
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="" />
          </label>
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="" />
          </label>
          <div />
          <div className="btn">
            <Button variant="sign">SIGN UP</Button>
          </div>
          <div className="already">
          <p>
            Already have an account? <a href="login"><span style={{color: "green", fontSize: "larger"}}>Sign In</span></a>
          </p>
          <span>or</span>
          <p>Sign up with</p>
          </div>

         
        </div>
        <div className="btn">
          <Button variant="sign">Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
