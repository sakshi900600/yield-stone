// Hero.jsx
import React, { useState, useRef } from 'react';
import './Hero.css';
import Button from '../../components/Button/Button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const greenBarRef = useRef(null);

  const handleMouseMove = (e) => {
    if (greenBarRef.current) {
      const rect = greenBarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      
      // Calculate the offset from center with limited range - ONLY HORIZONTAL
      const maxOffset = 20; // Reduced maximum pixels to move horizontally
      const offsetX = Math.max(-maxOffset, Math.min(maxOffset, (e.clientX - centerX) * 0.1));
      const offsetY = 0; // Keep Y position fixed at 0
      
      setMousePosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="hero-container">
      {/* Background layers */}
      <div className="gradient-bg-layer"></div>
      <div className="green-rectangle-layer"></div>
      <div 
        className="green-bar"
        ref={greenBarRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: isHovering ? 'none' : 'transform 0.3s ease-in-out'
        }}
      ></div>
               
      {/* Main Content will be added here later */}
      <div className="hero-content">
        <h1>The First RWA-Tokenized Real Estate Fund</h1>
        <img src="/HeroAssets/button_img.avif" alt="" />
        <p>Deploying AI-Driven Intelligence To
Maximize RWA Yields</p>

        <Button  text={"View Whitepaper"} />
      </div>
    </div>
  );
};

export default Hero;