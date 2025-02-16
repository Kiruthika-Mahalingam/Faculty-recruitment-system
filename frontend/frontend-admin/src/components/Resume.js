import React, { useState } from "react";
import "../components/Resume.css";

const Resume = () => {
  const [filterNumber, setFilterNumber] = useState("");
  
  // Static candidate data for now
  const candidates = [
    { id: 1, name: "Alice Johnson", personalDetails: "/alice-details.pdf", resume: "/alice-resume.pdf" },
    { id: 2, name: "Bob Williams", personalDetails: "/bob-details.pdf", resume: "/bob-resume.pdf" },
    { id: 3, name: "Charlie Brown", personalDetails: "/charlie-details.pdf", resume: "/charlie-resume.pdf" },
    { id: 4, name: "David Smith", personalDetails: "/david-details.pdf", resume: "/david-resume.pdf" },
    { id: 5, name: "Eva Davis", personalDetails: "/eva-details.pdf", resume: "/eva-resume.pdf" },
  ];

  // Filter candidates based on number input
  const filteredCandidates = filterNumber
    ? candidates.slice(0, Number(filterNumber))
    : candidates;

  return (
    <div className="resume-container">
      <h2>Candidate Resumes</h2>

      {/* Filter Section */}
      <div className="filter-container">
        <label>Show Top:</label>
        <input
          type="number"
          value={filterNumber}
          onChange={(e) => setFilterNumber(e.target.value)}
          placeholder="Enter a number"
          min="1"
          max={candidates.length}
        />
      </div>

      {/* Resume Table */}
      <div className="resume-list">
        <div className="resume-header">
          <span className="column serial">S.no</span>
          <span className="column name">Candidate Name</span>
          <span className="column">Personal Details</span>
          <span className="column">Resume</span>
          <span className="column action">Actions</span>
        </div>

        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="resume-item">
            <span className="serial">{candidate.id}</span>
            <span className="name">{candidate.name}</span>
            <a href={candidate.personalDetails} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
            <a href={candidate.resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <div className="action-buttons">
              <button className="accept-btn">Accept</button>
              <button className="reject-btn">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
