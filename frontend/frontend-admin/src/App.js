// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import JobList from "./components/JobList";
// import RankingPage from "./components/RankingPage";
// import CandidateProfile from "./components/CandidateProfile";
// import Schedule from "./components/Schedule";
// import Tracking from "./components/Tracking";
// import Navbar from "./components/Navbar";
// import AdminLogin from "./auth/AdminLogin";
// import AdminSignup from "./auth/AdminSignup";
// import "./App.css";


// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); 
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isAuthenticated");
//     setIsAuthenticated(loggedIn === "true");
//   }, []);

//   return (
//     <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
//       {isAuthenticated && <Navbar />}
//       {isAuthenticated && (
//         <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? "☰" : "☰"}
//         </button>
//       )}
//       {isAuthenticated && <Sidebar isOpen={isSidebarOpen} />}

//       <div className="main-content">
//         <Routes>
          
//           {!isAuthenticated ? (
//             <>
//               <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
//               <Route path="/admin-signup" element={<AdminSignup />} />
//               <Route path="*" element={<Navigate to="/admin-login" />} /> {/* Redirect all pages to login */}
//             </>
//           ) : (
//             <>
//               <Route path="/" element={<JobList />} />
//               <Route path="/ranking/:jobId" element={<RankingPage />} />
//               <Route path="/candidate/:candidateId" element={<CandidateProfile />} />
//               <Route path="/schedule" element={<Schedule />} />
//               <Route path="/tracking" element={<Tracking />} />
//               <Route path="*" element={<Navigate to="/" />} /> 
//             </>
//           )}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import JobList from "./components/JobList";
import RankingPage from "./components/RankingPage";
import CandidateProfile from "./components/CandidateProfile";
import Schedule from "./components/Schedule";
import Tracking from "./components/Tracking";
import Resume from "./components/Resume"; 
import Navbar from "./components/Navbar";
import AdminLogin from "./auth/AdminLogin";
import AdminSignup from "./auth/AdminSignup";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(loggedIn === "true");
  }, []);

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {isAuthenticated && <Navbar />}
      {isAuthenticated && (
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "☰" : "☰"}
        </button>
      )}
      {isAuthenticated && <Sidebar isOpen={isSidebarOpen} />}

      <div className="main-content">
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/admin-signup" element={<AdminSignup />} />
              <Route path="*" element={<Navigate to="/admin-login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<JobList />} />
              <Route path="/ranking/:jobId" element={<RankingPage />} />
              <Route path="/candidate/:candidateId" element={<CandidateProfile />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/resume" element={<Resume />} /> 
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;

