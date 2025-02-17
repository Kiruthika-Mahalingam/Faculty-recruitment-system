import React from "react";
import { useParams } from "react-router-dom";
import "../components/CandidateProfile.css";

const CandidateProfile = () => {
  const { candidateId } = useParams(); 
  const candidate = {
    id: candidateId,
    name: "raj",
    experience: "5 years",
    skills: ["React", "Node.js", "MongoDB"],
    education: "B.Tech in Computer Science",
    workHistory: "Software Engineer at XYZ Corp (3 years)",
    status: "Interview Scheduled",
    resume: "john_resume.pdf",
  };

  return (
    <div className="profile-container">
      <h2>Candidate Profile</h2>
      <div className="profile-card">
        <h3>👤 {candidate.name}</h3>
        <p>📌 Experience: {candidate.experience}</p>
        <p>🛠 Skills: {candidate.skills.join(", ")}</p>
        <p>🎓 Education: {candidate.education}</p>
        <p>💼 Work History: {candidate.workHistory}</p>
        <p>📊 Status: <span className="status">{candidate.status}</span></p>
        <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="resume-btn">📄 View Resume</a>
      </div>
    </div>
  );
};

export default CandidateProfile;
