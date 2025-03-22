import React from 'react';
import { Link } from 'react-router-dom';

const Front = () => {
  const handleExternalLink1 = (url) => {
    window.open('https://www.researchgate.net/publication/388962283_Comparative_Analysis_of_Various_Game_Theory_Algorithms_for_CPU_and_GPU_Resource_Allocation', '_blank', 'noopener,noreferrer');
  }
  const handleExternalLink2 = (url) => {
    window.open('https://www.researchgate.net/publication/388976271_Machine_Learning_Based_Public_Transit_Bus_Arrival_Time_Prediction_System?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Advancing Research Together</h1>
        <p>Connect, collaborate, and contribute to global research initiatives</p>
        <Link to="/recent-publications" className="btn btn-primary">Explore Research</Link>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          <div className="event-card">
            <span role="img" aria-label="calendar">📅</span>
            <h3>Hack-cse-lerate</h3>
            <p>Join us for a 12-hour coding marathon from 8 AM to 8 PM at the Birla Auditorium and Media Center.</p>
            <p><strong>March 29, 2025</strong></p>
            <Link to="/events" className="btn btn-primary">Registration open</Link>
          </div>
          <div className="event-card">
            <span role="img" aria-label="workshop">👥</span>
            <h3>Workshop Series</h3>
            <p>Interactive workshops on research methodologies.</p>
            <p><strong>April 5, 2025</strong></p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications-section">
        <h2>Recent Publications</h2>
        <div className="publication-card">
          <h3>Comparative Analysis of Various Game Theory Algorithms for CPU and GPU Resource Allocation</h3>
          <p><strong>Authors:</strong> Ujwal Pai Jakarbet, Arshan Ali Khan, Suhas S P, Savithramma R M</p>
          <p><strong>Dec 2024</strong></p>
          <button onClick={handleExternalLink1} className={"external_linking-btn"}>click here</button>
        </div>
        <div className="publication-card">
          <h3>Machine Learning Based Public Transit Bus Arrival Time Prediction System</h3>
          <p><strong>Authors:</strong> Savithramma R M, Ashwini B P, Ujwal Pai Jakarbet, Aparna B P, Suhas S P, Arshan Ali Khan</p>
          <p><strong>Dec 2024</strong></p>
          <button onClick={handleExternalLink2} className={"external_linking-btn"}>click here</button>
        </div>
        <Link to="/recent-publications" className="btn btn-primary">Click here to see more publications</Link>
      </section>
    </div>
  );
};

export default Front;