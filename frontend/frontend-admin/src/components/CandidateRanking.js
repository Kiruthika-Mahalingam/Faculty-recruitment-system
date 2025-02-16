import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./../components/CandidateRanking.css";

const CandidateRanking = () => {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([
    { id: 1, name: "John Doe", rank: 1, email: "john@example.com", status: "Pending", resume: "/dummy_resume.pdf", details: "5 years of experience in CS." },
    { id: 2, name: "Jane Smith", rank: 2, email: "jane@example.com", status: "Pending", resume: "/dummy_resume.pdf", details: "MSc in Data Science, 3 years experience." },
    { id: 3, name: "Alice Brown", rank: 3, email: "alice@example.com", status: "Pending", resume: "/dummy_resume.pdf", details: "Full-stack developer with React expertise." },
  ]);

  const [topN, setTopN] = useState(""); 
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [scheduledMeetings, setScheduledMeetings] = useState([]);

  const handleFilter = () => {
    const num = parseInt(topN);
    if (!isNaN(num) && num > 0) {
      setFilteredCandidates(candidates.slice(0, num));
    } else {
      setFilteredCandidates(candidates);
    }
  };

  const updateCandidateStatus = (id, newStatus) => {
    const updatedCandidates = candidates.map(candidate =>
      candidate.id === id ? { ...candidate, status: newStatus } : candidate
    );
    setCandidates(updatedCandidates);
  };

  const scheduleMeeting = (candidate) => {
    const meetingTime = new Date();
    meetingTime.setMinutes(meetingTime.getMinutes() + 30); 

    const newMeeting = {
      candidateId: candidate.id,
      name: candidate.name,
      email: candidate.email,
      time: meetingTime.toLocaleString(),
    };

    setScheduledMeetings([...scheduledMeetings, newMeeting]);

    alert(`Meeting scheduled for ${candidate.name} at ${newMeeting.time}`);
  };

  return (
    <div className="ranking-container">
      <h2>Candidate Ranking</h2>

      <div className="filter-section">
        <input
          type="number"
          placeholder="Enter top N candidates"
          value={topN}
          onChange={(e) => setTopN(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={() => navigate("/schedule")}>View Scheduled Meetings</button>
      </div>

      <table className="ranking-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Email</th>
            <th>Resume</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.rank}</td>
              <td>
                <button className="view-btn" onClick={() => setSelectedCandidate(candidate)}>
                  {candidate.name}
                </button>
              </td>
              <td>{candidate.email}</td>
              <td>
                <a href={candidate.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
              </td>
              <td>{candidate.status}</td>
              <td>
                <button className="select-btn" onClick={() => updateCandidateStatus(candidate.id, "Selected")}>Select</button>
                <button className="reject-btn" onClick={() => updateCandidateStatus(candidate.id, "Rejected")}>Reject</button>
                <button className="schedule-btn" onClick={() => scheduleMeeting(candidate)}>Schedule Meeting</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCandidate && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedCandidate.name}</h3>
            <p><strong>Email:</strong> {selectedCandidate.email}</p>
            <p><strong>Details:</strong> {selectedCandidate.details}</p>
            <a href={selectedCandidate.resume} target="_blank" rel="noopener noreferrer" className="resume-link">View Resume</a>
            <button onClick={() => setSelectedCandidate(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateRanking;
