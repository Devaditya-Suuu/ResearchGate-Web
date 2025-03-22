import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// Define styles first
const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "4rem 0 2rem",
    marginTop: "auto"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem"
  },
  column: {
    textAlign: "center"
  },
  title: {
    color: "#333",
    marginBottom: "1rem"
  },
  description: {
    color: "#666",
    marginBottom: "1.5rem"
  },
  link: {
    display: "block",
    color: "#666",
    textDecoration: "none",
    marginBottom: "0.5rem",
    transition: "color 0.3s"
  },
  linkHover: {
    color: "#333"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1.5rem"
  },
  socialLink: {
    color: "#666",
    textDecoration: "none",
    transition: "color 0.3s"
  },
  socialLinkHover: {
    color: "#333"
  },
  icon: {
    fontSize: "1.5rem"
  },
  bottom: {
    marginTop: "3rem",
    padding: "1rem 0",
    borderTop: "1px solid #eee",
    textAlign: "center"
  },
  copyright: {
    color: "#666",
    fontSize: "0.9rem"
  }
};

// Define component after styles
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>ResearchGate</h3>
          <p style={styles.description}>
            Advancing research through collaboration and innovation.
          </p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Quick Links</h3>
          <Link to="/events" style={styles.link}>Events</Link>
          <Link to="/publications" style={styles.link}>Publications</Link>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Connect</h3>
          <div style={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/sit_researchgate/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
            >
              <FaInstagram style={styles.icon} />
            </a>
            <a 
              href="https://www.linkedin.com/company/sit-researchgate" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
            >
              <FaLinkedin style={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copyright}>© 2024 ResearchGate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;