import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ModelHeader from '../../components/Model_header/Header';
import './DaoSection.css';

const DaoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const modalImageRef = useRef(null);

  const handleImageClick = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleZoom = () => {
    setZoomLevel(prevZoom => (prevZoom === 1 ? 2 : 1));
  };

  return (
    <section className="dao-section-container">
      {/* Model Header stays as-is */}
      <ModelHeader
        imageSrc="/numbers/six.svg" icon
        label="THE DAO"
        title="YieldStone Model"
      />

      {/* Main image wrapper */}
      <div className="dao-image-wrapper">
        {/* Background images */}
        <img
          src="/model/model-bg.avif"
          alt="Background abstract lines"
          className="dao-bg-image dao-top-right"
        />
        <img
          src="/model/model-bg.avif"
          alt="Background abstract lines"
          className="dao-bg-image dao-bottom-left"
        />

        {/* Animated Main Image */}
        <motion.div
          className="dao-main-image-container"
          onClick={handleImageClick}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/model/model-img.avif"
            alt="YieldStone DAO Model Diagram"
            className="dao-main-image"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/000000/FFFFFF?text=DAO+Model'; }}
          />
          {/* Zoom icon */}
          <div className="zoom-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="dao-modal-overlay">
          <div className="dao-modal-content">
            <button className="dao-modal-close-btn" onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
            <img
              src="/model/model-img.avif"
              alt="YieldStone DAO Model Diagram Zoomed"
              className="dao-modal-image"
              style={{ transform: `scale(${zoomLevel})` }}
              ref={modalImageRef}
            />
            <div className="dao-modal-controls">
              <button onClick={handleZoom}>
                {zoomLevel === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DaoSection;
