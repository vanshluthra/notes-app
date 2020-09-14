import React from "react";
import "./login.css";

function LoginDisplay(props) {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <div className="brand-logo">MyNotes</div>
        </div>
      </nav>
      <section className="login">
        <div className="loginContainer">
          <h3 className="green-text center-align">Welcome</h3>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <p className="errorMsg">{emailError}</p>

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="green" onClick={handleLogin}>
                  Sign In
                </button>
                <p>
                  Dont't have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="green" onClick={handleSignup}>
                  Sign Up
                </button>
                <p>
                  Already have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginDisplay;
