import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaChartLine, FaListOl } from "react-icons/fa";
import "../components/Sidebar.css"; 
 
  const Sidebar = () => {
    const location = useLocation();
  
    const menuItems = [
      { path: "/jobs", icon: <FaBriefcase />, label: "Job Openings" },
      { path: "/schedul", icon: <FaCalendarAlt />, label: "Schedule" },
      { path: "/tracking", icon: <FaChartLine />, label: "Tracking" },
      { path: "/resume", icon: <FaListOl />, label: "Ranking" }
    ];
    
    return (
      <div className="sidebar">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>
                {item.icon} <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <p>kiruma3615@gmail.com</p>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    );
  };
  export default Sidebar;