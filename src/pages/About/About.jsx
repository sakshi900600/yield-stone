import React from 'react';
import './About.css';

const cardData = [
  {
    id: 1,
    icon: '/about/about-icon1.avif',
    title: 'NEXUS Fund',
    description: 'Fractional, liquid stakes in a diversified portfolio of multifamily properties, short-term rentals, and data-center infrastructure.',
    hoverImage: 'hoverImage.avif'
  },
  {
    id: 2,
    icon: '/about/about-icon2.avif',
    title: 'PropAI',
    description: 'A suite of agentic AI advisory tools delivering predictive valuations, portfolio optimization, and market-cycle forecasts - powering the NEXUS Fund and available to external subscribers.',
    hoverImage: 'hoverImage.avif'
  },
  {
    id: 3,
    icon: '/about/about-icon3.avif',
    title: 'YieldPIN',
    description: 'A decentralized GPU marketplace powering PropAI while renting idle compute to third parties, unlocking an extra revenue stream for the ecosystem.',
    hoverImage: 'hoverImage.avif'
  }
];

const About = () => {
  return (
    <div className="about-section">

      <div className="new-section-container">

        <div className="new-section-bg-02">
            <img src="/numbers/two.svg" alt="" />
        </div>

        <img src="/about/about-left-img.svg" alt="Corner Design" className="new-section-corner-img" />

        <div className="new-section-content">
          {/* Left Div */}
          <div className="new-section-left">
            <p className="about-us-heading">ABOUT US</p>
            <h1 className="yieldstone-heading"><span>YieldStone </span>AI <br /> Blockchain <br /> Products</h1>
            <img src="/about/about-topper-img.svg" alt="Bottom Left" className="new-section-left-bottom-img" />
          </div>

          {/* Right Div */}
          <div className="new-section-right">
            <h2>Why Yieldstone?</h2>
            <p>Traditional real-estate funds lock out smaller investors, remain painfully illiquid, and rely on human-only decision making processes.</p>
            <p>Yieldstone solves these issues by providing the first RWA-tokenized real-estate investment platform powered by agentic AI - unlocking enhanced yields and instant liquidity.</p>
          </div>
        </div>

      </div>




      {/* Card Container */}
      <div className="about-card-container">
        {cardData.map((card) => (
          <div className="about-card" key={card.id}>
            <div className="about-header">
              <div className="about-header-top">
                <img src={card.icon} alt="icon" />
                <h1>{card.title}</h1>
              </div>
              <div className="about-corners about-top-left"></div>
              <div className="about-corners about-top-right"></div>
              <div className="about-corners about-bottom-left"></div>
              <div className="about-corners about-bottom-right"></div>
            </div>

            <div className="about-details">
              <p>{card.description}</p>
            </div>

            <div className="about-hover-bg"></div>
            <div className="about-hover-image">
              <img src={card.hoverImage} alt="hover" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Arrow */}
      <div className="about-bottom-arrow">
        <img src="/about/about-bottom-arrow.svg" alt="Bottom Arrow" />
      </div>
    </div>
  );
};

export default About;
