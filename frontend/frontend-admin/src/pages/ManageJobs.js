import React, { useState } from "react";
import "../pages/ManageJobs.css";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", department: "IT", status: "Open" },
    { id: 2, title: "Data Analyst", department: "Data Science", status: "Closed" },
  ]);

  const [newJob, setNewJob] = useState({ title: "", department: "", status: "Open" });

  const addJob = (event) => {
    event.preventDefault();
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setNewJob({ title: "", department: "", status: "Open" });
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="manage-jobs-container">
      <h2>Manage Jobs</h2>
      <form onSubmit={addJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={newJob.department}
          onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
          required
        />
        <button type="submit">Add Job</button>
      </form>

      <h3>Job Listings</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> ({job.department}) - {job.status}
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageJobs;
