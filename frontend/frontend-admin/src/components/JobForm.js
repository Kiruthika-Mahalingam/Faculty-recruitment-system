import React, { useState } from "react";

const JobForm = ({ addJob }) => {
  const [jobData, setJobData] = useState({ title: "", description: "", salary: "" });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(jobData);
    setJobData({ title: "", description: "", salary: "" });
  };

  return (
    <div className="job-form">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={jobData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={jobData.description} onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobForm;
