import React from "react";
import Button from "../../Assets/Button";
import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const[formData, setFormData] = useState({
    email:"",
    password: ""
  })
  const onChangeHandler = (e) => {
    const {name,value} = e.target
    setFormData((prev) =>{
      return{
        ...prev,
        [name]: value,

      }
    })
    console.log(name,value)
  }

  const onSubmitHandlerForm = (e)=>{
    e.preventDefault()
    if(formData.email && formData.password){
      console.log("submited")
    }
    else{
      window.alert("Empty!, Input a value")
      
    }
  }
  return (
    <div className="div-form">
      <div className="sign-up">
        <p>SIGN IN</p>
      </div>
      <form className="sign-up-form" onSubmit={onSubmitHandlerForm}>
        <div className="fullname">
          <label htmlFor="email">
            FullName
            <input type="email" name="email" id="" onChange={onChangeHandler} value={formData.email} />
          </label>
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="" onChange={onChangeHandler} value={formData.password}  />
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
