import React from "react";
import publications from "./PublicationsData";

const RecentPublications = () => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Error: Cannot open this link");
    }
  };

  return (
    <div style={styles.list}>
      {publications.map((item) => (
        <div key={item.id} style={styles.card}>
          <h2 style={styles.title}>{item.title}</h2>
          <p style={styles.author}>Author: {item.author}</p>
          <button onClick={() => openLink(item.link)} style={styles.linkButton}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  list: {
    padding: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  card: {
    backgroundColor: "#E3F2FD",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    width: "250px",
    textAlign: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0D47A1",
  },
  author: {
    fontSize: "15px",
    color: "#37474F",
    marginTop: "6px",
  },
  linkButton: {
    marginTop: "10px",
    padding: "8px",
    backgroundColor: "#64B5F6",
    color: "#FFF",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default RecentPublications;
