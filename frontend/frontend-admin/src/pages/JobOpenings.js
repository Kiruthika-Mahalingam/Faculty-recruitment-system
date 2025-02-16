import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/JobOpenings.css";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", location: "Remote", description: "Full Stack Developer" },
    { id: 2, title: "Data Scientist", location: "New York", description: "Machine Learning Expert" },
  ]);
  const [newJob, setNewJob] = useState({ title: "", location: "", description: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddJob = () => {
    if (newJob.title && newJob.location && newJob.description) {
      if (editingIndex !== null) {
       
        const updatedJobs = [...jobs];
        updatedJobs[editingIndex] = { ...newJob, id: jobs[editingIndex].id };
        setJobs(updatedJobs);
        setEditingIndex(null);
      } else {
       
        setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      }
      setNewJob({ title: "", location: "", description: "" });
    }
  };

  const handleEditJob = (index) => {
    setNewJob(jobs[index]);
    setEditingIndex(index);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="job-openings-container">
      <h2>Job Openings</h2>
      <div className="add-job-form">
        <input
          type="text"
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newJob.location}
          onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newJob.description}
          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
        />
        <button onClick={handleAddJob}>{editingIndex !== null ? "Update Job" : "Add Job"}</button>
      </div>

      <table className="job-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.id}>
              <td>{index + 1}</td>
              <td
                className="clickable"
                onClick={() => navigate(`/ranking/${job.id}`)}
              >
                {job.title}
              </td>
              <td>{job.location}</td>
              <td>{job.description}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEditJob(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDeleteJob(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobOpenings;
