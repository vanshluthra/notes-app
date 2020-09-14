import React, { useState, useEffect } from "react";
import App from "../../App";
import firebase from "../../config/fbconfig";
import LoginDisplay from "./LoginDisplay";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Login() {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [AccountState, setAccountState] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invali-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <Router >
        {User ? (
            <App />
        ):(
            <LoginDisplay
            email={Email}
            password={Password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={AccountState}
            setHasAccount={setAccountState}
            emailError={EmailError}
            passwordError={PasswordError}
          />
        )
        }
    </Router>
  );
}

export default Login;
