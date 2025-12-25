import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

const saveSession = (user) => {
  try {
    localStorage.setItem("authToken", "dummy-token");
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
  } catch {}
};

const saveUserInfo = (userInfo) => {
  try {
    if (userInfo) localStorage.setItem("userData", JSON.stringify(userInfo));
  } catch {}
}


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user_id = null;

    // Make sure valid login
    try {
      const res = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      const data = await res.json()

      if (!res.ok && data) {
        setStatus(data.message || `Login failed (${res.status})`);
        return;
      }

      // Save user id 
      user_id = data?.user_id;

      saveSession(data);

    } catch (err) {
      setStatus("Network error: " + err.message);
    }

    // User user id to fetch complete user data
    try{
      const res = await fetch(`/api/users/${user_id}`);
      const data = await res.json();
      if(!res.ok){
        setStatus(data.message || `Failed to fetch user data (${res.status})`);
        return;
      }

      saveUserInfo(data);
    }catch(err){
      setStatus("Network error: " + err.message);
      return;
    }

      setStatus("Login successful!");
      navigate("/home");
  };

  return (
    <>
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">
            <img src="sn_csulb.png" alt="" />
          </div>
          <h1 className="title">StudentNest Login</h1>
          <p className="subtitle">Access your account</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input"
                type="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="button">
              Sign In
            </button>
          <p className="status-message">{status}</p>

            <p className="footer-text">
              Forgot your password?{" "}
              <a href="#" className="link">
                Reset it
              </a>
            </p>
            <p className="footer-text">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                Create One
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
