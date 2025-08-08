import React, { useEffect, useRef } from "react";
import "./Technology.css"; // adjust path as needed
import Button from "../../components/Button/Button";

const Technology = () => {
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);
  const canvas3Ref = useRef(null); // for GPU Marketplace (top card)

  const setupCanvas = (canvasRef) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "#26d18c";
      context.strokeRect(50, 50, 300, 200);
    };
    const handleScroll = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) draw();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    setupCanvas(canvas1Ref);
    setupCanvas(canvas2Ref);
    setupCanvas(canvas3Ref);
  }, []);

  return (
    <>
      {/* TOP FULL-WIDTH GPU Marketplace CARD */}
      <div className="gpu-marketplace-card ai-content">
        {/* LEFT CONTENT */}
        <div className=" gpu-card-content">
          <h2 className="ai-title">
            <span style={{ color: "#26d18c" }}>GPU Marketplace</span>{" "}
            <span>(DePIN Backbone)</span>
          </h2>

          <ul className="ai-points">
            <li>
              <strong>Resource Allocation:</strong> Requests are matched with
              providers offering the best price-performance ratio, as evaluated
              by AI agents.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> Market dynamics dictate GPU
              rental rates, ensuring fair compensation and cost efficiency.
            </li>
            <li>
              <strong>$YIELD Integration:</strong> All compute fees are settled
              in $YIELD, fostering continuous token demand.
            </li>
          </ul>

          <div className="gpu-card-button">
            <Button text={"View Full Roadmap"} />
          </div>

        </div>


        <div className="about-corners about-top-left"></div>
          <div className="about-corners about-top-right"></div>
          <div className="about-corners about-bottom-left"></div>
          <div className="about-corners about-bottom-right"></div>
          <div className="ai-blur-top"></div>

        <div className="ai-blur-bottom">
            <img
              src="https://cdn.prod.website-files.com/675b2366b8047c66057f0ae8/675d21230ed24797af43f21a_Group%20134.avif"
              alt="blur-bottom"
            />
          </div>

        {/* RIGHT CANVAS */}
        <div className="ai-canvas-bg gpu-canvas">
          <canvas ref={canvas3Ref} width="1612" height="817" />
        </div>
      </div>



      {/* BOTTOM 2 CARDS */}
      <div className="technology-bottom-cards">
        {/* Card 1 */}
        <div className="ai-card-wrapper">
          <div className="ai-content">
            <div className="about-corners about-top-left"></div>
            <div className="about-corners about-top-right"></div>
            <div className="about-corners about-bottom-left"></div>
            <div className="about-corners about-bottom-right"></div>
            <div className="ai-blur-top"></div>

            <h2 className="ai-title">AI Agents</h2>
            <ul className="ai-points">
              <li>
                <strong>Investment Scouting Agent:</strong> Identifies
                high-potential real estate targets based on demographic shifts,
                infrastructure projects, and migration patterns.
              </li>
              <li>
                <strong>Portfolio Optimization Agent:</strong> Uses predictive
                modeling to allocate funds optimally across various property
                types and geographic regions.
              </li>
              <li>
                <strong>Developer Model Integration:</strong> Third-party
                developers can create and monetize their own AI models, tapping
                into the GPU marketplace for compute and receiving $YIELD-based
                fees.
              </li>
            </ul>

            <div className="ai-blur-bottom">
              <img
                src="https://cdn.prod.website-files.com/675b2366b8047c66057f0ae8/675d21230ed24797af43f21a_Group%20134.avif"
                alt="blur-bottom"
              />
            </div>
          </div>

          <div className="ai-canvas-bg">
            <canvas ref={canvas1Ref} width="1612" height="817" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="ai-card-wrapper">
          <div className="ai-content">
            <div className="about-corners about-top-left"></div>
            <div className="about-corners about-top-right"></div>
            <div className="about-corners about-bottom-left"></div>
            <div className="about-corners about-bottom-right"></div>
            <div className="ai-blur-top"></div>

            <h2 className="ai-title">PropAI Chat & Model Marketplace</h2>
            <ul className="ai-points">
              <li>
                <strong>PropAI Chat</strong> is a user-facing AI advisor
                leveraging large language models and proprietary data analytics.
              </li>
              <li>
                <strong>Domain-Specific AI Models:</strong> Real estate
                valuation, underwriting analytics, trend forecasting, & more.
              </li>
              <li>
                <strong>Developer Model Integration:</strong> Third-party
                developers can create and monetize their own AI models, tapping
                into the GPU marketplace for compute and receiving $YIELD-based
                fees.
              </li>
              <li>
                <strong>Developer Platform:</strong> Third-party developers can
                list and monetize their models or integrate the GPU marketplace
                into their own workflows.
              </li>
            </ul>

            <div className="ai-blur-bottom">
              <img
                src="https://cdn.prod.website-files.com/675b2366b8047c66057f0ae8/675d21230ed24797af43f21a_Group%20134.avif"
                alt="blur-bottom"
              />
            </div>
          </div>

          <div className="ai-canvas-bg">
            <canvas ref={canvas2Ref} width="1612" height="817" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
