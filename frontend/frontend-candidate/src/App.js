import { Routes, Route } from "react-router-dom";  
import CandidateLogin from "./auth/CandidateLogin";
import CandidateSignup from "./auth/CandidateSignup";
import CandidateDashboard from "./pages/CandidateDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CandidateLogin />} />
      <Route path="/candidate-signup" element={<CandidateSignup />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
    </Routes>
  );
};

export default App;
