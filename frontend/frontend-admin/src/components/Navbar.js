import React from "react";
import logo from "../assests/chennai-cit-logo.svg";
import "../components/Navbar.css"; 
function Navbar() {
    return (
      <nav className="navbar">
        <h2></h2>
        <img src={logo} alt="College Logo" className="navbar-logo" />
      </nav>
    );
  }
  
  export default Navbar;