// import React, { useEffect, useState } from "react";

// const Schedule = () => {
//   const [meetings, setMeetings] = useState([]); 

//   useEffect(() => {

//     fetch("/api/meetings") 
//       .then((res) => res.json())
//       .then((data) => setMeetings(data || [])) 
//       .catch((err) => console.error("Error fetching meetings:", err));
//   }, []);

//   return (
//     <div>
//       <h2>Scheduled Meetings</h2>
//       <p>Total Meetings: {meetings?.length || 0}</p> 
//       <ul>
//         {meetings.map((meeting, index) => (
//           <li key={index}>
//             {meeting.title} - {meeting.date}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Schedule;
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css"; // Custom CSS for styling

const Schedule = () => {
  const [events] = useState({
    "2024-07-05": "Initial Screening - 10 AM",
    "2024-07-10": "Technical Interview - 2 PM",
    "2024-07-15": "Final Interview - 11 AM",
    "2024-07-20": "Onboarding Session - 9 AM"
  });

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div className="schedule-container">
      <h2>Faculty Recruitment Schedule</h2>
      <Calendar
        tileContent={({ date }) => {
          const dateStr = formatDate(date);
          return events[dateStr] ? <div className="dot"></div> : null;
        }}
        tileClassName={({ date }) => {
          const dateStr = formatDate(date);
          return events[dateStr] ? "highlight-date" : null;
        }}
        onMouseOver={(e) => {
          const target = e.target.closest(".react-calendar__tile");
          if (target) {
            const dateStr = target.getAttribute("data-date");
            if (events[dateStr]) {
              target.setAttribute("title", events[dateStr]);
            }
          }
        }}
      />
    </div>
  );
};

export default Schedule;
