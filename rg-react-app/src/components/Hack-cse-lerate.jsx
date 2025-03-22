import React from 'react';

const EventDetailsPage = () => {
  return (
    <div className="container mt-4">
      {/* Event Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Hack-cse-lerate - 29th March 2025</h1>
        <p className="text-muted">Date: 29th March 2025</p>
      </div>

      {/* Event Timing */}
      <div className="mb-4">
        <h2 className="fw-bold">Event Timing:</h2>
        <p><strong>Overall event time:</strong> 8:00 AM - 8:00 PM</p>
        <p><strong>Location:</strong> Birla Audit & Media Center</p>
      </div>

      {/* Prize Pool */}
      <div className="mb-4">
        <h2 className="fw-bold">Prize Pool:</h2>
        <ul>
          <li><strong>Total Prize Pool:</strong> ₹10,000</li>
          <li>1st Place: ₹5,000</li>
          <li>2nd Place: ₹3,000</li>
          <li>3rd Place: ₹2,000</li>
        </ul>
      </div>

      {/* Schedule */}
      <div className="mb-4">
        <h2 className="fw-bold">Schedule:</h2>
        <ul>
          <li>8:00 AM - Event Begins</li>
          <li>11:00 AM - First Mentor Round</li>
          <li>3:00 PM - Second Mentor Round (Elimination round for 6-8 teams)</li>
          <li>5:00 PM - Judges Start Evaluating</li>
          <li>7:00 PM - Judges Finish Evaluating</li>
          <li>7:00 - 8:00 PM - Prize Distribution</li>
        </ul>
      </div>

      {/* Register Button */}
      <div className="text-center">
        <button className="btn btn-primary btn-lg">Register Now</button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
