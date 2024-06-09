import "./SignIn.css";
import React from "react";
import Button from "../../Assets/Button";

const SignUp = () => {
  return (
    <div className="div-form">
      <div className="sign-up"><p>SIGN UP</p></div>
      <form className="form">
        <div className="fullname">
          <label htmlFor="">
            Fullname
            <input type="text" name="" id="" />
          </label>
        </div>
        <div className="email">
          <label htmlFor="">
            Email-Address
            <input type="email" name="" id="" />
          </label>
        </div>
        <div className="password">
          <label htmlFor="">
            Password
            <input type="password" name="" id="" />
          </label>
          <div />
          <div>
            <Button variant="sign">SIGN UP</Button>
          </div>

          <p>
            Already have an account? <a href="login"><span style={{color: "green", fontSize: "larger"}}>Sign In</span></a>
          </p>
          <span>or</span>
          <p>Sign up with</p>
        </div>
        <div className="btn">
          <Button variant="sign">Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
