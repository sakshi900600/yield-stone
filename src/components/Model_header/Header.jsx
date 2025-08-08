import React from "react";
import "./Header.css";

const ModelHeader = ({ imageSrc, label, title }) => {
  return (
    <div className="model-header">
      <img src={imageSrc} alt="Model Number" className="model-number-img" />
      <div className="overlay-content">
        <span className="model-label">{label}</span>
      </div>
      <h2 className="model-title">{title}</h2>
    </div>
  );
};

export default ModelHeader;
