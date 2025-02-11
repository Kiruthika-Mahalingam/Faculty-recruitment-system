import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./auth/AdminLogin";
import AdminSignup from "./auth/AdminSignup";

const App = () => {
  return (
    <Router>  {/* ✅ Wrapped inside <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
