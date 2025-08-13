import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomeAfter.css";

const features = [
  {
    id: 0,
    title: "Accessible Real Estate Investment",
    colorImg: "/features/feature1.svg",
    blackWhiteImg: "/features/feature1b.avif",
  },
  {
    id: 1,
    title: "Passive Income Potential",
    colorImg: "/features/feature2.svg",
    blackWhiteImg: "/features/feature2b.avif",
  },
  {
    id: 2,
    title: "Enhanced Liquidity",
    colorImg: "/features/feature3.svg",
    blackWhiteImg: "/features/feature3b.avif",
  },
  {
    id: 3,
    title: "Effortless Management",
    colorImg: "/features/feature4.svg",
    blackWhiteImg: "/features/feature4b.avif",
  },
];

const FeatureSlider = ({ stripePosition = "top" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      className="feature-slider-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {stripePosition === "top" && (
        <div className="stripe">
          <div
            className="stripe-fill"
            style={{
              width: `${100 / features.length}%`,
              left: `${(100 / features.length) * activeIndex}%`,
            }}
          />
        </div>
      )}

      <div className="feature-grid">
        {features.map((feature, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={feature.id}
              className={`feature-card ${isActive ? "active" : ""}`}
              onClick={() => handleClick(idx)}
            >
              <div className="vertical-stripe-mobile" />
              <div className="image-wrapper">
                <img
                  src={feature.blackWhiteImg}
                  alt={feature.title}
                  className="bw-img"
                />
                <img
                  src={feature.colorImg}
                  alt={feature.title}
                  className={`color-img ${isActive ? "visible" : ""}`}
                />
              </div>
              <p className={`feature-text ${isActive ? "active-text" : ""}`}>
                {feature.title}
              </p>
            </div>
          );
        })}
      </div>

      {stripePosition === "bottom" && (
        <div className="stripe">
          <div
            className="stripe-fill"
            style={{
              width: `${100 / features.length}%`,
              left: `${(100 / features.length) * activeIndex}%`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default FeatureSlider;
