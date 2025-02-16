import React, { useEffect, useState } from "react";

const Tracking = () => {
  const [trackingData, setTrackingData] = useState([]); 

  useEffect(() => {
    
    fetch("/api/tracking") 
      .then((res) => res.json())
      .then((data) => setTrackingData(data || [])) 
      .catch((err) => console.error("Error fetching tracking data:", err));
  }, []);

  return (
    <div>
      <h2>Tracking Process</h2>
      {trackingData.length === 0 ? (
        <p>No tracking data available.</p> 
      ) : (
        <ul>
          {trackingData.map((item, index) => (
            <li key={index}>{item.status} - {item.date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tracking;
