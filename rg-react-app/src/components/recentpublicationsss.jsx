import React from "react";

const members = [
  {
    id: "1",
    name: "John Doe",
    role: "President",
    publications: "10 Research Papers",
    social: "https://linkedin.com/in/johndoe",
    image: "/assets/johndoe.png",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Vice President",
    publications: "8 Research Papers",
    social: "https://linkedin.com/in/janesmith",
    image: "/assets/janesmith.png",
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Treasurer",
    publications: "5 Research Papers",
    social: "https://linkedin.com/in/michaelbrown",
    image: "/assets/michaelbrown.png",
  },
];

const publications = [
  {
    id: "1",
    title: "Advanced AI Techniques",
    author: "John Doe",
    link: "https://example.com/advanced-ai",
  },
  {
    id: "2",
    title: "Blockchain and Security",
    author: "Jane Smith",
    link: "https://example.com/blockchain-security",
  },
  {
    id: "3",
    title: "Quantum Computing Basics",
    author: "Michael Brown",
    link: "https://example.com/quantum-computing",
  },
];

const MemberCard = ({ member }) => (
  <div style={styles.card}>
    <img src={member.image} alt={member.name} style={styles.image} />
    <h2 style={styles.name}>{member.name}</h2>
    <p style={styles.role}>{member.role}</p>
    <p style={styles.publications}>{member.publications}</p>
    <button style={styles.button} onClick={() => window.open(member.social, "_blank")}>
      View Profile
    </button>
  </div>
);

const PublicationCard = ({ publication }) => (
  <div style={styles.card}>
    <h2 style={styles.name}>{publication.title}</h2>
    <p style={styles.role}>By: {publication.author}</p>
    <button style={styles.button} onClick={() => window.open(publication.link, "_blank")}>
      Read Publication
    </button>
  </div>
);

const MembersPage = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Club Members</h1>
    <div style={styles.list}>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
    <h1 style={styles.header}>Recent Publications</h1>
    <div style={styles.list}>
      {publications.map((publication) => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "250px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  role: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "5px",
  },
  publications: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default MembersPage;
