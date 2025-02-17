import React, { useState } from "react";
import "../components/Tracking.css";

const Tracking = () => {
  const [selectedRound, setSelectedRound] = useState("All");
  const [selectedJob, setSelectedJob] = useState("All");

  // Static data for selected candidates
  const candidates = [
    { id: 1, name: "raj", job: "Accountant", round: 1 },
    { id: 2, name: "mani", job: "Technical Assistant LMS", round: 1 },
    { id: 3, name: "mohan", job: "Accountant", round: 2 },
    { id: 4, name: "krish", job: "Technical Assistant LMS", round: 2 },
    { id: 5, name: "dhanush", job: "Accountant", round: 3 },
    { id: 6, name: "preethi", job: "Accountant", round: 3 },
  ];

  // Filter candidates by job role and round
  const filteredCandidates = candidates.filter(candidate =>
    (selectedJob === "All" || candidate.job === selectedJob) &&
    (selectedRound === "All" || candidate.round === parseInt(selectedRound))
  );

  return (
    <div className="tracking-container">
      <h2>Tracking</h2>

      {/* Dynamic Total Applicants Count */}
      <div className="total-applicants">
        <strong>Total Applicants:</strong> {filteredCandidates.length}
      </div>

      {/* Filters Section */}
      <div className="filter-container">
        <label>Filter by Round:</label>
        <select value={selectedRound} onChange={(e) => setSelectedRound(e.target.value)} className="round-filter">
          <option value="All">All Rounds</option>
          <option value="1">Round 1</option>
          <option value="2">Round 2</option>
          <option value="3">Final Round</option>
        </select>

        <label className="job-filter-label">Filter by Job:</label>
        <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} className="job-filter">
          <option value="All">All Jobs</option>
          <option value="Accountant">Accountant</option>
          <option value="Technical Assistant LMS">Technical Assistant LMS</option>
        </select>
      </div>

      {/* Tracking Table */}
      <div className="tracking-list">
        <div className="tracking-header">
          <span className="column serial">S.no</span>
          <span className="column name">Candidate Name</span>
          <span className="column job">Job Role</span>
          <span className="column round">Round</span>
        </div>

        {filteredCandidates.map((candidate, index) => (
          <div key={candidate.id} className="tracking-item">
            <span className="serial">{index + 1}</span>
            <span className="name">{candidate.name}</span>
            <span className="job">{candidate.job}</span>
            <span className="round">Round {candidate.round}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;
