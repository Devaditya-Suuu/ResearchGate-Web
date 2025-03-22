import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button 
      style={styles.button} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default Button;
