import React from "react";
import { FaUser, FaStar } from "react-icons/fa";

const Card = ({ ref }) => {
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div
      style={{
        background: "white",
        color: "black",
        padding: "1rem",
        // textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      Hello
    </div>
  );
};

export default Card;
