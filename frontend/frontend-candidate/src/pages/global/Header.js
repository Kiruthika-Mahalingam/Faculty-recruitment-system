import "../../styles/header.css";
import profilePic from "../../assets/profile.png";
import logo from "../../assets/citlogo.svg";

const Header = () => {
  return (
    <header className="header">
      {/* Logo & Title */}
      <div className="logo-container">
        <img src={logo} alt="College Logo" className="logo-img" />
        {/* <h1 className="portal-title">Career Portal</h1> */}
      </div>
      
      {/* Profile Section */}
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
