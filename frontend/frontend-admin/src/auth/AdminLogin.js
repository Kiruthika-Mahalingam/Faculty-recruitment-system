import React, { useState } from "react";
import "../styles/auth.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Admin Login: ${credentials.email}`);
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
