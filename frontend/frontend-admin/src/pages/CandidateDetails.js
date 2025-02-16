import React from "react";
import { useParams } from "react-router-dom";
import "../pages/CandidateDetails.css";

const dummyResume = "https://www.africau.edu/images/default/sample.pdf"; 

const CandidateDetails = () => {
  const { id } = useParams();

  return (
    <div className="candidate-details-container">
      <h2>Candidate Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> Candidate {id}</p>
      <p><strong>Email:</strong> candidate{id}@example.com</p>
      <p><strong>Experience:</strong> 5 Years</p>
      <p><strong>Skills:</strong> React, JavaScript, Node.js, MongoDB</p>
      <a href={dummyResume} target="_blank" rel="noopener noreferrer">View Resume</a>
    </div>
  );
};

export default CandidateDetails;

