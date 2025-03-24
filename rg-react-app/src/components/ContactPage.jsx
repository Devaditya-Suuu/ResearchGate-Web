import React from "react";

const ContactPage = () => {
  const handleEmailClick = () => {
    const email = "sitresearchgate@sit.sc.in";
    window.location.href = `mailto:${email}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <div style={styles.infoContainer}>
        <p style={styles.label}>Phone:</p>
        <p style={styles.text}>+91 8296015593</p>

        <p style={styles.label}>Email:</p>
        <a href="mailto:sitresearchgate@sit.sc.in" style={styles.emailText} onClick={handleEmailClick}>
          sitresearchgate@sit.sc.in
        </a>

        <p style={styles.label}>Address:</p>
        <p style={styles.text}>Siddaganga Institute of Technology, Tumkur, 572103</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 2, 0.2)",
  },
  header: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  label: {
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#555",
  },
  text: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#777",
  },
  emailText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default ContactPage;
