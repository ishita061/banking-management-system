import React from "react";
import "../style.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Internet Banking</h2>
        <form>
          <input type="text" placeholder="User ID" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="btn-primary full-width">Login</button>
        </form>
        <p className="login-help">
          Trouble logging in? <a href="#">Get Help</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
