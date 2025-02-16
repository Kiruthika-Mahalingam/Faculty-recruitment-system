import React, { useState } from "react";
import "../components/Resume.css";

const Resume = () => {
  const [filterNumber, setFilterNumber] = useState("");
  const [selectedJob, setSelectedJob] = useState("All"); // Job filter state

  // Static candidate data with job roles
  const candidates = [
    { id: 1, name: "Alice Johnson", job: "Accountant", personalDetails: "/alice-details.pdf", resume: "/alice-resume.pdf" },
    { id: 2, name: "Bob Williams", job: "Technical Assistant LMS", personalDetails: "/bob-details.pdf", resume: "/bob-resume.pdf" },
    { id: 3, name: "Charlie Brown", job: "Accountant", personalDetails: "/charlie-details.pdf", resume: "/charlie-resume.pdf" },
    { id: 4, name: "David Smith", job: "Technical Assistant LMS", personalDetails: "/david-details.pdf", resume: "/david-resume.pdf" },
    { id: 5, name: "Eva Davis", job: "Accountant", personalDetails: "/eva-details.pdf", resume: "/eva-resume.pdf" },
  ];

  // Filter candidates based on job role selection
  const filteredByJob = selectedJob === "All" ? candidates : candidates.filter(candidate => candidate.job === selectedJob);
  
  // Further filter by the number input
  const finalFilteredCandidates = filterNumber ? filteredByJob.slice(0, Number(filterNumber)) : filteredByJob;

  return (
    <div className="resume-container">
      <h2>Candidate Resumes</h2>

      {/* Filters Section */}
      <div className="filter-container">
        <label>Show Top:</label>
        <input
          type="number"
          value={filterNumber}
          onChange={(e) => setFilterNumber(e.target.value)}
          placeholder="Enter a number"
          min="1"
          max={filteredByJob.length}
        />

        <label className="job-filter-label">Filter by Job:</label>
        <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} className="job-filter">
          <option value="All">All Jobs</option>
          <option value="Accountant">Accountant</option>
          <option value="Technical Assistant LMS">Technical Assistant LMS</option>
        </select>
      </div>

      {/* Resume Table */}
      <div className="resume-list">
        <div className="resume-header">
          <span className="column serial">S.no</span>
          <span className="column name">Candidate Name</span>
          <span className="column job">Job Role</span>
          <span className="column">Personal Details</span>
          <span className="column">Resume</span>
          <span className="column action">Actions</span>
        </div>

        {finalFilteredCandidates.map((candidate, index) => (
          <div key={candidate.id} className="resume-item">
            <span className="serial">{index + 1}</span>
            <span className="name">{candidate.name}</span>
            <span className="job">{candidate.job}</span>
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
