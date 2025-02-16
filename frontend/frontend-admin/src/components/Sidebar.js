import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import "../components/Sidebar.css"; 

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Recruiter Panel</h2>
//       <ul>
//         <li>
//           <Link to="/job-openings">
//             <FaBriefcase className="icon" /> Job Openings
//           </Link>
//         </li>
//         <li>
//           <Link to="/schedule">
//             <FaCalendarAlt className="icon" /> Schedule
//           </Link>
//         </li>
//         <li>
//           <Link to="/tracking">
//             <FaChartLine className="icon" /> Tracking
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
const Sidebar = ({ isOpen }) => {
    return (
      <div className={`sidebar ${isOpen ? "sidebar-show" : "sidebar-hide"}`}>
        <h2>Dashboard</h2>
        
        <ul>
         <li>
           <Link to="/jobs">
             <FaBriefcase className="icon" /> Job Openings
           </Link>
         </li>
         <li>
           <Link to="/schedule">
             <FaCalendarAlt className="icon" /> Schedule
           </Link>
         </li>
         <li>
           <Link to="/tracking">
             <FaChartLine className="icon" /> Tracking
           </Link>
         </li>
       </ul>
      </div>
    );
  };
  
  export default Sidebar;