import React from "react";
import logo from "../assests/chennai-cit-logo.svg";
import "../components/Navbar.css"; 
const Navbar = () => {
  return (
    <header className="header">
      {/* Logo & Title */}
      <div className="logo-container">
        <img src={logo} alt="College Logo" className="logo-img" />
        {/* <h1 className="portal-title">Career Portal</h1> */}
      </div>
    </header>
  );
};
  
  export default Navbar;