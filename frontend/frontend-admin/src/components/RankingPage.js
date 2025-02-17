import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/RankingPage.css";

const RankingPage = () => {
  const { id } = useParams(); 
  const [candidates, setCandidates] = useState([
    { id: 1, name: "raj", experience: "5 years", skills: ["React", "Node.js"], rank: 1, resume: "john_resume.pdf", email: "john@example.com" },
    { id: 2, name: "mani", experience: "3 years", skills: ["Python", "Django"], rank: 2, resume: "jane_resume.pdf", email: "jane@example.com" },
    { id: 3, name: "mohan", experience: "4 years", skills: ["Java", "Spring"], rank: 3, resume: "mike_resume.pdf", email: "mike@example.com" },
  ]);

  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  useEffect(() => {
    setSelectedCandidates(candidates.slice(0, selectedCount));
  }, [selectedCount]);

  const handleScheduleMeeting = () => {
    if (selectedCandidates.length === 0) {
      alert("Select at least one candidate to schedule a meeting.");
      return;
    }
    selectedCandidates.forEach(candidate => {
      window.open(`https://calendar.google.com/calendar/r/eventedit?text=Interview+with+${candidate.name}&dates=20240701T100000Z/20240701T110000Z&details=Interview+for+Job+ID+${id}&location=Online&trp=false`, "_blank");
    });
    alert("Meeting scheduled successfully!");
  };

  return (
    <div className="ranking-container">
      <h2>Candidates Ranking for Job {id}</h2>
      <div className="selection-box">
        <label>Select Top: </label>
        <input type="number" min="1" max={candidates.length} value={selectedCount} onChange={(e) => setSelectedCount(Number(e.target.value))} />
      </div>

      <div className="candidate-list">
        {selectedCandidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <h3>{candidate.rank}. {candidate.name}</h3>
            <p>🛠 Experience: {candidate.experience}</p>
            <p>📌 Skills: {candidate.skills.join(", ")}</p>
            <p>✉ Email: {candidate.email}</p>
            <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="resume-btn">View Resume</a>
          </div>
        ))}
      </div>

      <button className="schedule-btn" onClick={handleScheduleMeeting}>📅 Schedule Meeting</button>
    </div>
  );
};

export default RankingPage;
