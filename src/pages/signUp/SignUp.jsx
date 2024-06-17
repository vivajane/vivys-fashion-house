import "./SignIn.css";
import React from "react";
import Button from "../../Assets/Button";
import { useState } from "react";

const SignUp = () => {
  const[formSignUp, setFormSignUp] = useState({
    name:"",
    email: "",
    password: "",

  })

  const onChangeHandler = (e) => {
    const{name,value} = e.target;
    setFormSignUp((prev) =>{
      return{
        ...prev,
        [name]: value,
      }
    })
    console.log(name,value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(formSignUp.name && formSignUp.email && formSignUp.password){
      console.log("Account created successfuly")

    }
    else{
      console.log("failed")
    }
  }
  return (
    <div className="div-form">
      <div className="sign-up"><p>SIGN UP</p></div>
      <form className="sign-up-form" onSubmit={onSubmitHandler}>
        <div className="fullname">
          <label htmlFor="name">
            Fullname
            <input type="text" name="name" id="" onChange={onChangeHandler} value={formSignUp.name}/>
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="" onChange={onChangeHandler} value={formSignUp.email}/>
          </label>
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="" onChange={onChangeHandler} value={formSignUp.password}/>
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
