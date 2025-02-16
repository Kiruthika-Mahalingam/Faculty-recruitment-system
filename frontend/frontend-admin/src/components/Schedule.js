import React, { useEffect, useState } from "react";

const Schedule = () => {
  const [meetings, setMeetings] = useState([]); 

  useEffect(() => {

    fetch("/api/meetings") 
      .then((res) => res.json())
      .then((data) => setMeetings(data || [])) 
      .catch((err) => console.error("Error fetching meetings:", err));
  }, []);

  return (
    <div>
      <h2>Scheduled Meetings</h2>
      <p>Total Meetings: {meetings?.length || 0}</p> 
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            {meeting.title} - {meeting.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
