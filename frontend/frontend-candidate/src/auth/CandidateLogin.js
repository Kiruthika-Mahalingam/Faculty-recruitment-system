import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const CandidateLogin = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!credentials.email || !credentials.password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", credentials.email);
      setIsAuthenticated(true);
      navigate("/Dashboard");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      
      {/* Google Login Button */}
      <button className="google-btn">Continue with Google</button>
      
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter email" 
          value={credentials.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Enter password" 
          value={credentials.password}
          onChange={handleChange} 
          required 
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p>Don't have an account? <Link to="/CandidateSignup">Sign up for free</Link></p>
    </div>
  );
};

export default CandidateLogin;
