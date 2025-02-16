import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
import profilePic from "../../assets/profile.png";
import logo from "../../assets/citlogo.svg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Get candidate name from local storage
  const candidateName = localStorage.getItem("userEmail") || "Candidate";

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/CandidateLogin");
  };

  return (
    <header className="header">
      {/* Logo & Title */}
      <div className="logo-container">
        <img src={logo} alt="College Logo" className="logo-img" />
      </div>
      
      {/* Profile Section */}
      <div className="profile">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          onClick={toggleDropdown}
        />
        
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <p className="dropdown-item">{candidateName}</p>
            <button className="dropdown-item logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
