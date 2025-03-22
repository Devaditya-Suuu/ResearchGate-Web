import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa"; // React Icons for event icons

const eventsData = [
  {
    title: "Hack-cse-lerate",
    description:
      "Join us for Hackathon, an electrifying 12-hour coding marathon from 8 AM to 8 PM at the Birla Auditorium and Media Center. Compete against top innovators for a prize pool of ₹10,000, with ₹5,000 for 1st place, ₹3,000 for 2nd, and ₹2,000 for 3rd. Unleash your creativity, solve real-world problems, and make your mark in the tech world!",
    date: "March 29, 2025",
    time: "Timing is: 8 AM",
  },
];

const EventsPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Upcoming Events</h2>
        <p style={styles.heroDescription}>
          Stay updated with the latest events in the research community.
        </p>
      </div>

      {/* List of Events */}
      {eventsData.map((event, index) => (
        <div key={index} style={styles.eventCard}>
          <div style={styles.iconContainer}>
            <FaCalendar size={30} color="#333" />
          </div>
          <div style={styles.eventDetails}>
            <h3 style={styles.eventTitle}>{event.title}</h3>
            <p style={styles.eventDescription}>{event.description}</p>
            <p style={styles.eventDate}>{event.date}</p>
            <p style={styles.eventTime}>{event.time}</p>
            <Link to="/event-details">
              <button style={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "40px",
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  heroSection: {
    backgroundColor: "#98D2C0",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "20px",
  },
  heroTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  heroDescription: {
    fontSize: "16px",
    color: "#666",
  },
  eventCard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "16px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  iconContainer: {
    width: "50px",
    height: "50px",
    backgroundColor: "#98D2C0",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "16px",
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "6px",
  },
  eventDescription: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "6px",
  },
  eventDate: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },
  eventTime: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  },
  learnMoreButton: {
    backgroundColor: "#98D2C0",
    padding: "8px 20px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default EventsPage;
