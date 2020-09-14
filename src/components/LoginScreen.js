import React, { useState } from "react";
import firebase from "firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const signInWithEmailAndPasswordHandler = (event, email, password) => {
  //   event.preventDefault();
  //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  // };
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target.value;

  //   if (name === "userEmail") {
  //     setEmail(value);
  //   } else if (name === "userPassword") {
  //     setPassword(value);
  //   }
  // };
  // const createUserWithEmailAndPasswordHandler = (event, email, password) => {
  //   event.preventDefault();
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  //   setEmail("");
  //   setPassword("");
  //   // setDisplayName("");
  // };

  return (
    <div className="container login">
      <div>
        <h4>Welcome</h4>
      </div>
      <form>
        <div className="input-field">
          <input
            id="email"
            type="email"
            className="validate"
            value={email}
            autoFocus
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <span
            className="helper-text"
            data-error="Incorrect Email"
            data-success="Correct"
          ></span>
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            className="validate"
            value={password}
            autoComplete="off"
            
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <span
            className="helper-text"
            data-error="Incorrect Password"
            data-success="Correct"
          ></span>
        </div>
        <div style={{ padding: "10px" }}>
          <button
            className="btn green"
            // onClick = {signup}
          >
            Sign Up
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <button
            className="btn green"
            onClick = {login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );

  // async function login(){
  //   try{
  //     await firebase.auth().signInWithEmailAndPassword(email, password)
  //     console.log("Successfull")
  //   }
  //   catch(error){
  //     console.log(error.message)
  //   }
  // }
};

export default (LoginScreen);
