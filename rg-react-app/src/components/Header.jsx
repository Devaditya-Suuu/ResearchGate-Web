import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>SITResearchGate</Link>

        <button
          style={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <div style={{ display: isMenuOpen ? "block" : "none" }}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/events" style={styles.navLink}>Events</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/members" style={styles.navLink}>Members</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Recent-publications" style={styles.navLink}>Recent Publications</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>Members Login</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#667eea",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.4)"

  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  menuToggle: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "2.5rem",
    cursor: "pointer",
    // display: "inline",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: "0.5rem"
  },
  navItem: {
    marginBottom: "0.5rem"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem",
    display: "block"
  }
};

export default Header;