// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import "../components/JobList.css";

// const JobList = () => {
//   const navigate = useNavigate(); 

//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Accountant",
//       department: "Directorate of Online Education",
//       reference: "SRM Exam-JP/00036",
//       experience: "2 to 4 years",
//       positions: 1,
//       campus: "CIT",
//       salary: "Rs. 50,000 - 70,000",
//       description: "Responsible for financial reporting and compliance.",
//     },
//     {
//       id: 2,
//       title: "Technical Assistant LMS",
//       department: "Directorate of Online Education",
//       reference: "SRM Exam-JP/00035",
//       experience: "3 to 5 years",
//       positions: 2,
//       campus: "CITAR",
//       salary: "Rs. 40,000 - 60,000",
//       description: "Manage LMS data and provide technical support.",
//     },
//   ]);

//   const [showPopup, setShowPopup] = useState(false);
//   const [editingJob, setEditingJob] = useState(null);
//   const [showDetails, setShowDetails] = useState(null);
//   const [newJob, setNewJob] = useState({
//     title: "",
//     department: "",
//     reference: "",
//     experience: "",
//     positions: "",
//     campus: "CIT",
//     salary: "",
//     description: "",
//   });

//   const handleAddOrUpdateJob = () => {
//     if (editingJob) {
//       setJobs(jobs.map((job) => (job.id === editingJob.id ? { ...newJob, id: editingJob.id } : job)));
//       setEditingJob(null);
//     } else {
//       setJobs([...jobs, { ...newJob, id: Date.now() }]);
//     }
//     setShowPopup(false);
//     setNewJob({ title: "", department: "", experience: "", positions: "", campus: "CIT", salary: "", description: "" });
//   };

//   const handleEdit = (job) => {
//     setNewJob(job);
//     setEditingJob(job);
//     setShowPopup(true);
//   };

//   const handleRemove = (id) => {
//     setJobs(jobs.filter((job) => job.id !== id));
//   };

//   const handleJobClick = (job) => {
//     navigate(`/ranking/${job.id}`, { state: { job } }); 
//   };

//   return (
//     <div className="job-container">
//       <button className="add-btn" onClick={() => setShowPopup(true)}>+ Add Job</button>
//       <div className="job-list">
//         {jobs.map((job) => (
//           <div key={job.id} className="job-card" onClick={() => handleJobClick(job)}>
//             <span className="campus">🏛 Campus: {job.campus}</span>
//             <h3>{job.title}</h3>
//             <p>{job.department}</p>
//             <p>🛠 Experience: {job.experience}</p>
//             <p>👥 Positions: {job.positions}</p>
//             <p>💰 Salary: {job.salary}</p>
//             <div className="button-group">
//               <button className="details-btn" onClick={(e) => { e.stopPropagation(); setShowDetails(job); }}>More details</button>
//               <button className="edit-btn" onClick={(e) => { e.stopPropagation(); handleEdit(job); }}>Edit</button>
//               <button className="remove-btn" onClick={(e) => { e.stopPropagation(); handleRemove(job.id); }}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>{editingJob ? "Edit Job" : "Add Job"}</h2>
//             <input type="text" placeholder="Role" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
//             <input type="text" placeholder="Department" value={newJob.department} onChange={(e) => setNewJob({ ...newJob, department: e.target.value })} />
//             <input type="text" placeholder="Experience" value={newJob.experience} onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })} />
//             <input type="number" placeholder="No. of Positions" value={newJob.positions} onChange={(e) => setNewJob({ ...newJob, positions: e.target.value })} />
//             <select value={newJob.campus} onChange={(e) => setNewJob({ ...newJob, campus: e.target.value })}>
//               <option value="CIT">CIT</option>
//               <option value="CITAR">CITAR</option>
//             </select>
//             <input type="text" placeholder="Salary Range" value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} />
//             <textarea placeholder="Description" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}></textarea>
//             <button onClick={handleAddOrUpdateJob}>OK</button>
//             <button onClick={() => setShowPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {showDetails && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>{showDetails.title}</h2>
//             <p><strong>Department:</strong> {showDetails.department}</p>
//             <p><strong>Experience:</strong> {showDetails.experience}</p>
//             <p><strong>Positions:</strong> {showDetails.positions}</p>
//             <p><strong>Campus:</strong> {showDetails.campus}</p>
//             <p><strong>Salary:</strong> {showDetails.salary}</p>
//             <p><strong>Description:</strong> {showDetails.description}</p>
//             <button onClick={() => setShowDetails(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobList;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../components/JobList.css";

const JobList = () => {
  const navigate = useNavigate(); 

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Accountant",
      department: "Directorate of Online Education",
           experience: "2 to 4 years",
      positions: 1,
      campus: "CIT",
      salary: "Rs. 50,000 - 70,000",
      description: "Responsible for financial reporting and compliance.",
    },
    {
      id: 2,
      title: "Technical Assistant LMS",
      department: "Directorate of Online Education",
      experience: "3 to 5 years",
      positions: 2,
      campus: "CITAR",
      salary: "Rs. 40,000 - 60,000",
      description: "Manage LMS data and provide technical support.",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    reference: "",
    experience: "",
    positions: "",
    campus: "CIT",
    salary: "",
    description: "",
  });

  const handleAddOrUpdateJob = () => {
    if (editingJob) {
      setJobs(jobs.map((job) => (job.id === editingJob.id ? { ...newJob, id: editingJob.id } : job)));
      setEditingJob(null);
    } else {
      setJobs([...jobs, { ...newJob, id: Date.now() }]);
    }
    setShowPopup(false);
    setNewJob({ title: "", department: "", experience: "", positions: "", campus: "CIT", salary: "", description: "" });
  };

  const handleEdit = (job) => {
    setNewJob(job);
    setEditingJob(job);
    setShowPopup(true);
  };

  const handleRemove = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleJobClick = (job) => {
    if (job?.id) {
      navigate(`/ranking/${job.id}`, { state: { job } });
    }
  };

  return (
    <div className="job-container">
      <button className="add-btn" onClick={() => setShowPopup(true)}>+ Add Job</button>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card" onClick={() => handleJobClick(job)}>
            <span className="campus">🏛 Campus: {job.campus}</span>
            <h3>{job.title}</h3>
            <p>{job.department}</p>
            <p>🛠 Experience: {job.experience}</p>
            <p>👥 Positions: {job.positions}</p>
            <p>💰 Salary: {job.salary}</p>
            <div className="button-group">
              <button className="details-btn" onClick={(e) => { e.stopPropagation(); setShowDetails(job); }}>More details</button>
              <button className="edit-btn" onClick={(e) => { e.stopPropagation(); handleEdit(job); }}>Edit</button>
              <button className="remove-btn" onClick={(e) => { e.stopPropagation(); handleRemove(job.id); }}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingJob ? "Edit Job" : "Add Job"}</h2>
            <input type="text" placeholder="Role" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
            <input type="text" placeholder="Department" value={newJob.department} onChange={(e) => setNewJob({ ...newJob, department: e.target.value })} />
            <input type="text" placeholder="Experience" value={newJob.experience} onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })} />
            <input type="number" placeholder="No. of Positions" value={newJob.positions} onChange={(e) => setNewJob({ ...newJob, positions: e.target.value })} />
            <select value={newJob.campus} onChange={(e) => setNewJob({ ...newJob, campus: e.target.value })}>
              <option value="CIT">CIT</option>
              <option value="CITAR">CITAR</option>
            </select>
            <input type="text" placeholder="Salary Range" value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} />
            <textarea placeholder="Description" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}></textarea>
            <button onClick={handleAddOrUpdateJob}>OK</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showDetails && (
        <div className="popup" onClick={() => setShowDetails(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{showDetails.title}</h2>
            <p><strong>Department:</strong> {showDetails.department}</p>
            <p><strong>Experience:</strong> {showDetails.experience}</p>
            <p><strong>Positions:</strong> {showDetails.positions}</p>
            <p><strong>Campus:</strong> {showDetails.campus}</p>
            <p><strong>Salary:</strong> {showDetails.salary}</p>
            <p><strong>Description:</strong> {showDetails.description}</p>
            <button onClick={() => setShowDetails(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;