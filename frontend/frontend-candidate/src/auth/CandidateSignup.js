import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const CandidateSignup = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");  

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userDetails", JSON.stringify(formData));

    if (typeof setIsAuthenticated === "function") {
      setIsAuthenticated(true);
    } else {
      console.error("setIsAuthenticated is not a function");
    }

    navigate("/Dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default CandidateSignup;
