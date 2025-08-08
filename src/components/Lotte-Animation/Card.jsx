import React from "react";
import AICanvas from "./AICanvas";

const Card = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "400px",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <AICanvas />

      {/* Card content */}
      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        <h2>AI Powered</h2>
        <p>Some description here...</p>
      </div>
    </div>
  );
};

export default Card;
