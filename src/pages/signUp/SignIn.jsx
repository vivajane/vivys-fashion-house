import React from "react";
import Button from "../../Assets/Button";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="div-form">
      <div className="sign-up">
        <p>SIGN IN</p>
      </div>
      <form className="form">
        <div className="fullname">
          <label htmlFor="email">
            FullName
            <input type="email" name="" id="" />
          </label>
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
            <input type="password" name="" id="" />
          </label>
        </div>
        <div className="btn">
          <Button variant="sign">Sign In</Button>
        </div>
        <div className="already">
          <p>
            Don't have an account?{" "}
            <a href="signup">
              <span style={{color: "green", fontSize: "larger"}}>Sign Up</span> <br />{" "}
            </a>{" "}
          </p>
          <p>Sign in with</p>
        </div>

        <Button variant="sign">Google</Button>
      </form>
    </div>
  );
};

export default SignIn;
