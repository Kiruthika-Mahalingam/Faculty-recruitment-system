import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CandidateLogin from "./auth/CandidateLogin";
import CandidateSignup from "./auth/CandidateSignup";
import CandidateDashboard from "./pages/Dashboard";
import CurrentJobs from "./pages/CurrentJobs";
import PersonalDetail from "./pages/PersonalDetail";
import Sidebar from "./pages/global/Sidebar";
import Header from "./pages/global/Header";
// import Feedback from "./pages/Feedback";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const shouldHideSidebar = ["/", "/CandidateLogin", "/CandidateSignup"].includes(location.pathname);

  return (
    <div>
      <Header />
      <div className="app-container">
        {!shouldHideSidebar && <Sidebar />}
        <div className="content">
          <Routes>
            {/* Redirect to Login when app starts */}
            <Route path="/" element={<Navigate to="/CandidateLogin" />} />
            <Route path="/CandidateLogin" element={<CandidateLogin setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/CandidateSignup" element={<CandidateSignup />} />
            <Route path="/Dashboard" element={<CandidateDashboard />} />
            <Route path="/CurrentJobs" element={<CurrentJobs />} />
            <Route path="/PersonalDetail" element={<PersonalDetail />} />
            {/* <Route path="/Feedback" element={<Feedback/>} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
