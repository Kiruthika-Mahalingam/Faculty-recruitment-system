import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/JobList.css"; 
const JobList = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", department: "IT", experience: "2-4 years", positions: 3, salary: "$60k-$80k", description: "Develop and maintain web applications." },
    { id: 2, title: "Data Scientist", department: "AI", experience: "3-5 years", positions: 2, salary: "$70k-$90k", description: "Analyze data and build predictive models." },
    { id: 3, title: "Marketing Manager", department: "Marketing", experience: "5+ years", positions: 1, salary: "$50k-$70k", description: "Lead marketing campaigns and brand strategies." }
  ]);

  const [newJob, setNewJob] = useState({ id: null, title: "", department: "", experience: "", positions: "", salary: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  
  const handleAddOrUpdateJob = () => {
    if (isEditing) {
      setJobs(jobs.map((job) => (job.id === newJob.id ? newJob : job)));
      setIsEditing(false);
    } else {
      setJobs([...jobs, { ...newJob, id: Date.now() }]);
    }
    setNewJob({ id: null, title: "", department: "", experience: "", positions: "", salary: "", description: "" });
  };

  const handleEdit = (job) => {
    setNewJob(job);
    setIsEditing(true);
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const handleShowDetails = (job) => {
    setSelectedJob(job);
  };

  const handleClosePopup = () => {
    setSelectedJob(null);
  };

  const handleNavigate = (id, event) => {
    if (event.target.tagName !== "BUTTON") {
      navigate(`/ranking/${id}`, { state: { job: jobs.find(job => job.id === id) } });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? "Edit Job" : "Add New Job"}</h2>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <input type="text" name="title" placeholder="Job Title" value={newJob.title} onChange={handleInputChange} className="border p-2 m-2 w-full rounded" />
        <input type="text" name="department" placeholder="Department" value={newJob.department} onChange={handleInputChange} className="border p-2 m-2 w-full rounded" />
        <input type="text" name="experience" placeholder="Experience" value={newJob.experience} onChange={handleInputChange} className="border p-2 m-2 w-full rounded" />
        <input type="number" name="positions" placeholder="Positions Available" value={newJob.positions} onChange={handleInputChange} className="border p-2 m-2 w-full rounded" />
        <input type="text" name="salary" placeholder="Salary Range" value={newJob.salary} onChange={handleInputChange} className="border p-2 m-2 w-full rounded" />
        <textarea name="description" placeholder="Job Description" value={newJob.description} onChange={handleInputChange} className="border p-2 m-2 w-full rounded"></textarea>

        <button onClick={handleAddOrUpdateJob} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {isEditing ? "Update Job" : "Add Job"}
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} onClick={(event) => handleNavigate(job.id, event)} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.department} - {job.experience}</p>
            <p className="text-gray-700 font-bold">{job.salary}</p>
            <div className="mt-2 flex justify-between">
              <button onClick={(e) => { e.stopPropagation(); handleEdit(job); }} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Edit</button>
              <button onClick={(e) => { e.stopPropagation(); handleRemove(job.id); }} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
              <button onClick={(e) => { e.stopPropagation(); handleShowDetails(job); }} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">More Details</button>
            </div>
          </div>
        ))}
      </div>

     
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
            <p><strong>Department:</strong> {selectedJob.department}</p>
            <p><strong>Experience:</strong> {selectedJob.experience}</p>
            <p><strong>Positions Available:</strong> {selectedJob.positions}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <button onClick={handleClosePopup} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
