import { Card, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState, useEffect } from "react";

const jobListings = [
  { id: 1, title: "Software Engineer",  description: "Develop and maintain software applications." },
  { id: 2, title: "Frontend Developer",  description: "Build UI components using React.js." },
];

const CurrentJobs = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Load applied jobs from local storage when page loads
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedJobs);
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleConfirmApply = () => {
    if (selectedJob) {
      const updatedJobs = [...appliedJobs, { ...selectedJob, status: "Application Submitted" }];
      setAppliedJobs(updatedJobs);
      localStorage.setItem("appliedJobs", JSON.stringify(updatedJobs));
    }
    setOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Current Job Openings
      </Typography>

      <Grid container spacing={2}>
        {jobListings.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2">{job.company}</Typography>
                <Typography variant="body2">{job.description}</Typography>
                <Button variant="contained" bg ="#0b4a87" sx={{ mt: 1 }} onClick={() => handleApply(job)}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Apply Job Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
        <DialogContent>
          <Typography>Company: {selectedJob?.company}</Typography>
          <Typography>Description: {selectedJob?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">Cancel</Button>
          <Button onClick={handleConfirmApply} color="primary" variant="contained">Submit Application</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CurrentJobs;
