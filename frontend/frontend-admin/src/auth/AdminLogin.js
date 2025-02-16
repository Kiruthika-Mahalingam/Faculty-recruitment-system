import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const AdminLogin = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Fake authentication check
    if (credentials.email === "admin@example.com" && credentials.password === "admin123") {
      localStorage.setItem("isAuthenticated", "true"); // Save login state
      setIsAuthenticated(true);
      navigate("/"); // Redirect to the dashboard after login
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <button className="google-btn">Continue with Google</button>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/admin-signup">Sign up for free</a></p>
    </div>
  );
};

export default AdminLogin;
