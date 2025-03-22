import React from "react";
//import "../components/MembersPage.css"; // Import CSS file
import paiImage from "../components/assets/pai.jpg"; // Import images
import sujalImage from "../components/assets/sujal.jpg";
import devadityaImage from "../components/assets/devaditya.jpeg";
import "../components/MembersPage.css";

const members = [
  {
    id: "1",
    name: "Ujwal Pai",
    role: "Student Co-ordinator",
    publications: "3 Publications",
    social: "https://linkedin.com/in/johndoe",
    viewPublication: "https://www.researchgate.net/profile/Ujwal-Jakarbet",
    image: paiImage,
  },
  {
    id: "2",
    name: "Sujal",
    role: "Web Lead",
    publications: "8 Research Papers",
    social: "https://linkedin.com/in/sujalflash/",
    image: sujalImage,
  },
  {
    id: "3",
    name: "Devaditya Borah",
    role: "Member of Web Team",
    social:
      "https://www.linkedin.com/in/devaditya-borah-%F0%9F%87%AE%F0%9F%87%B3-65865026b/",
    image: devadityaImage,
  },
];

const MemberCard = ({ member }) => (
  <div className="card">
    <img src={member.image} alt={member.name} className="image" />
    <h3 className="name">{member.name}</h3>
    <p className="role">{member.role}</p>
    {member.publications && <p className="publications">{member.publications}</p>}
    <a href={member.social} target="_blank" rel="noopener noreferrer" className="link">
      View Profile
    </a>
    {member.viewPublication && (
      <a href={member.viewPublication} target="_blank" rel="noopener noreferrer" className="link">
        View Publications
      </a>
    )}
  </div>
);

const MembersPage = () => {
  return (
    <div className="container">
      <h2 className="header">Club Members</h2>
      <div className="members-list">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
