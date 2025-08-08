import React, { useState, useRef } from 'react';
import ModelHeader from '../../components/Model_header/Header'; // Assuming this path is correct
import './DaoSection.css'; // New CSS file for this section

const DaoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 for normal, can go up to 2 or more
  const modalImageRef = useRef(null);

  const handleImageClick = () => {
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom when opening modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleZoom = () => {
    setZoomLevel(prevZoom => (prevZoom === 1 ? 2 : 1)); // Toggle between 1x and 2x zoom
  };

  return (
    <section className="dao-section-container">
      {/* Header for the section */}
      <ModelHeader
        imageSrc="/numbers/six.svg" icon
        label="THE DAO"
        title="YieldStone Model"
      />

      {/* Container for the main image and background elements */}
      <div className="dao-image-wrapper">
        {/* Background images (hidden on small screens via CSS) */}
        <img
          src="/model/model-bg.avif" // image_69f10b.png (top right)
          alt="Background abstract lines"
          className="dao-bg-image dao-top-right"
          // onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/000000/FFFFFF?text=BG1'; }}
        />
        <img
          src="/model/model-bg.avif" // image_69f10b.png (bottom left)
          alt="Background abstract lines"
          className="dao-bg-image dao-bottom-left"
          // onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/000000/FFFFFF?text=BG2'; }}
        />

        {/* Main interactive image */}
        <div className="dao-main-image-container" onClick={handleImageClick}>
          <img
            src="/model/model-img.avif" // image_69f129.jpg (main diagram)
            alt="YieldStone DAO Model Diagram"
            className="dao-main-image"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/000000/FFFFFF?text=DAO+Model'; }}
          />
          {/* Zoom icon on hover */}
          <div className="zoom-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in">
              <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Modal for zoomed image view */}
      {isModalOpen && (
        <div className="dao-modal-overlay">
          <div className="dao-modal-content">
            <button className="dao-modal-close-btn" onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
            <img
              src="/model/model-img.avif" // image_69f129.jpg
              alt="YieldStone DAO Model Diagram Zoomed"
              className="dao-modal-image"
              style={{ transform: `scale(${zoomLevel})` }}
              ref={modalImageRef}
            />
            <div className="dao-modal-controls">
              <button onClick={handleZoom}>
                {zoomLevel === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in">
                    <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-out">
                    <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>
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
