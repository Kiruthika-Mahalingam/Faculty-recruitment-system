import { 
  Card, Typography, Box, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Avatar 
} from "@mui/material";
import { useEffect, useState } from "react";  
import { FaUser } from "react-icons/fa";  

const CandidateDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const candidate = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
  };

  useEffect(() => {
    // Fetch applied jobs from local storage
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedJobs);
  }, []);

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ padding: "10px" }}>

      {/* Profile and Photo Upload Section */}
      <Box display="flex" gap="20px" mb="30px">
        {/* Profile Box */}
        <Card sx={{ p: 2, width: "40%", boxShadow: 3 }}>
          <Typography p={1} variant="h6" fontWeight="bold">
            Candidate Details
          </Typography>
          <Typography p={1} variant="body1"><strong>Name  </strong> {candidate.name}</Typography><hr/>
          <Typography p={1} variant="body1"><strong>Email </strong> {candidate.email}</Typography><hr/>
          <Typography p={1} variant="body1"><strong>Phone </strong> {candidate.phone}</Typography><hr/>
        </Card>

        {/* Profile Photo Upload */}
        <Card sx={{ p: 2, width: "40%", textAlign: "center", boxShadow: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            Upload Profile Photo
          </Typography>

          {/* Profile Picture Preview and Upload */}
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            gap={2} 
            mt={2}
          >
            {/* Profile Image */}
            {profilePhoto ? (
              <Avatar src={profilePhoto} sx={{ width: 100, height: 100, border: "2px solid #0b4a87" }} />
            ) : (
              <FaUser size={50} color="gray" />
            )}

            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="profile-upload"
              onChange={handleProfileUpload}
            />
            
            {/* Upload Button */}
            <label htmlFor="profile-upload">
              <Button variant="contained" component="span">
                Choose Photo
              </Button>
            </label>
          </Box>
        </Card>
      </Box>

      {/* Applied Jobs Section in Table Format */}
      <Typography variant="h6" fontWeight="bold" marginBottom={2}>
        Applied Jobs
      </Typography>
      {appliedJobs.length === 0 ? (
        <Typography>No jobs applied yet.</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#0b4a87" }}> {/* Blue header */}
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Job Role</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Applied Date</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appliedJobs.map((job, index) => (
                <TableRow key={index}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.appliedDate || "N/A"}</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: job.status === "Application Submitted" ? "blue" : "green" }}>
                    {job.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>        
      )}
    </div>
  );
};

export default CandidateDashboard;
