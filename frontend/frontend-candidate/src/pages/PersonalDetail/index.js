import React, { useState } from "react";
import "../../styles/details.css"; 

const PersonalDetail = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleResumeRemove = () => {
    setResume(null);
  };
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    address: "",
  });

  const [qualificationData, setQualificationData] = useState([
    { id: 1, degree: "B.Tech", Specialization: "XYZ", university: "XYZ University", year: "2020", grade: "A" },
  ]);

  const [experienceData, setExperienceData] = useState([
    { id: 1, Organization: "ABC Corp", Designation: "Software Engineer", servicefrom:"", serviceto:"" },
  ]);

  const [publicationsData, setPublicationsData] = useState([
    { id: 1, journal: "AI Research", publisher: "Springer", topic: "Machine Learning", doiNumber: "30" },
  ]);

  const [documents, setDocuments] = useState([
    { id: 1, name: "Resume.pdf", url: "#" },
  ]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleAddRow = (setData, defaultRow) => {
    setData((prev) => [...prev, { id: prev.length + 1, ...defaultRow }]);
  };

  return (
    <div className="container">
      {/* Tabs Navigation */}
      <div className="tabs">
        <button className={activeTab === "personal" ? "active" : ""} onClick={() => setActiveTab("personal")}>
          Personal Details
        </button>
        <button className={activeTab === "resume" ? "active" : ""} onClick={() => setActiveTab("resume")}>
          Resume
        </button>
        <button className={activeTab === "qualification" ? "active" : ""} onClick={() => setActiveTab("qualification")}>
          Qualification
        </button>
        <button className={activeTab === "experience" ? "active" : ""} onClick={() => setActiveTab("experience")}>
          Experience
        </button>
        <button className={activeTab === "publications" ? "active" : ""} onClick={() => setActiveTab("publications")}>
          Publications
        </button>
        <button className={activeTab === "documents" ? "active" : ""} onClick={() => setActiveTab("documents")}>
          Uploaded Documents
        </button>
      </div>

      {/* Dynamic Content Rendering */}
      <div className="section">
        {activeTab === "personal" && (
          <>
            <h2>Personal Details</h2>
            <form>
              <label>Date of Birth</label>
              <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} />
              
              <label>Gender</label>
              <input type="email" name="email" value={personalData.email} onChange={handlePersonalChange} />

              <label>Nationality</label>
              <input type="text" name="phone" value={personalData.phone} onChange={handlePersonalChange} />

              <label>Marital status</label>
              <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} />

              <label>Mobile Number</label>
              <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} />

              <label>Alternate Mobile Number</label>
              <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} />

              <label>Address</label>
              <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} />

              <button type="button">Save Changes</button>
            </form>
           
          </>
        )}
        

        {activeTab === "qualification" && (
          <>
            <h2>Qualification</h2>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Degree</th>
                  <th>University</th>
                  <th>Specialization</th>
                  <th>Year</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {qualificationData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td><input type="text" value={row.degree} /></td>
                    <td><input type="text" value={row.Specialization} /></td>
                    <td><input type="text" value={row.university} /></td>
                    <td><input type="text" value={row.year} /></td>
                    <td><input type="text" value={row.grade} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleAddRow(setQualificationData, { degree: "",Specialization:"", university: "", year: "", grade: "" })}>
              Add Row
            </button>
          </>
        )}

        {activeTab === "resume" && (
  <>
    <h2>Resume Upload</h2>
    <div>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
      {resume && (
        <div>
          <p>
            Uploaded File: {resume.name} <a href={URL.createObjectURL(resume)} download>Download</a>
          </p>
          <button onClick={handleResumeRemove}>Remove Resume</button>
        </div>
      )}
    </div>
  </>
)}


        {activeTab === "experience" && (
          <>
            <h2>Experience</h2>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Organization</th>
                  <th>Designation</th>
                  <th>Service From</th>
                  <th>Service To</th>
                </tr>
              </thead>
              <tbody>
                {experienceData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td><input type="text" value={row.Organization} /></td>
                    <td><input type="text" value={row.Designation} /></td>
                    <td><input type="text" value={row.servicefrom} /></td>
                    <td><input type="text" value={row.serviceto} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleAddRow(setExperienceData, { company: "", position: "", servicefrom: "",serviceto: "" })}>
              Add Row
            </button>
          </>
        )}

        {activeTab === "publications" && (
          <>
            <h2>Publications</h2>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Journal Name</th>
                  <th>Publisher</th>
                  <th>Topic</th>
                  <th>DOI Number</th>
                </tr>
              </thead>
              <tbody>
                {publicationsData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td><input type="text" value={row.journal} /></td>
                    <td><input type="text" value={row.publisher} /></td>
                    <td><input type="text" value={row.topic} /></td>
                    <td><input type="text" value={row.doiNumber} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => handleAddRow(setPublicationsData, { journal: "", publisher: "", topic: "", doiNumber: "" })}>
              Add Row
            </button>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h2>Upload Documents</h2>
            <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Document Name</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td>{doc.id}</td>
                    <td>{doc.name}</td>
                    <td><a href={doc.url} download>Download</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalDetail;
