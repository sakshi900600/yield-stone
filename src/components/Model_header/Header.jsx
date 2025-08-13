import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const ModelHeader = ({ imageSrc, label, title }) => {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);      // animate once
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`model-header ${inView ? "in-view" : ""}`}>
      <img src={imageSrc} alt="Model Number" className="model-number-img reveal-up-img" />

      <div className="overlay-content">
        <span className="model-label">{label}</span>
      </div>

      <h2 className="model-title reveal-up-title">{title}</h2>
    </div>
  );
};

export default ModelHeader;
