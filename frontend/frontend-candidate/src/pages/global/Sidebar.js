import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/sidebar.css";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", icon: <FaBriefcase />, label: "Dashboard" },
    { path: "/CurrentJobs", icon: <FaBriefcase />, label: "Current Jobs" },
    { path: "/PersonalDetail", icon: <FaUserGraduate />, label: "Personal Details" },
    // { path: "/Feedback", icon: <FaUserGraduate />, label: "Feedback" },
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
    </div>
  );
};

export default Sidebar;
