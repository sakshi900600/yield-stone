import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Technology.css";
import Button from "../../components/Button/Button";

const TOP_DURATION = 0.55;   // seconds (top card animation length)
const GAP_AFTER_TOP = 0.85;  // seconds (small pause before bottom cards)

const Technology = () => {
  const sectionRef = useRef(null);

  const [inView, setInView] = useState(false);       // triggers top card
  const [bottomReady, setBottomReady] = useState(false); // triggers bottom cards

  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);
  const canvas3Ref = useRef(null);

  const setupCanvas = (canvasRef) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#26d18c";
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 300, 200);
  };

  // Start animations ONLY when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);                 // start top card
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.35,                   // ~35% visible
        root: null,
        rootMargin: "0px 0px -7% 0px",    // waits a bit longer before firing
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When top begins, draw its canvas immediately.
  // Then after the top finishes + a small gap, reveal bottoms and draw their canvases.
  useEffect(() => {
    if (!inView) return;

    // draw top canvas now
    setupCanvas(canvas3Ref);

    const timer = setTimeout(() => {
      setBottomReady(true);
      setupCanvas(canvas1Ref);
      setupCanvas(canvas2Ref);
    }, (TOP_DURATION + GAP_AFTER_TOP) * 1000);

    return () => clearTimeout(timer);
  }, [inView]);

  // Animation variants
  const topVariant = {
    hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: TOP_DURATION,
        ease: [0.22, 1, 0.36, 1], // smooth ease-out curve
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // smooth ease-out
      },
    }),
  };

  return (
    <div ref={sectionRef}>
      {/* TOP CARD */}
      <motion.div
        className="gpu-marketplace-card ai-content"
        style={{ willChange: "transform, opacity", transformPerspective: 1000 }}
        variants={topVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="gpu-card-content">
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
            <Button
              target="_blank"
              href="https://yieldstone.gitbook.io/yieldstone-whitepaper"
              text={"View Full Roadmap"}
            />
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
        <div className="ai-canvas-bg gpu-canvas">
          <canvas ref={canvas3Ref} width="1612" height="817" />
        </div>
      </motion.div>



      {/* BOTTOM CARDS */}
      <div className="technology-bottom-cards">
        <motion.div
          className="ai-card-wrapper"
          style={{ willChange: "transform, opacity" }}
          variants={cardVariant}
          custom={0} // starts immediately once bottomReady is true
          initial="hidden"
          animate={bottomReady ? "visible" : "hidden"}
        >
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
        </motion.div>

        <motion.div
          className="ai-card-wrapper"
          style={{ willChange: "transform, opacity" }}
          variants={cardVariant}
          custom={0.15} // small stagger between the two bottom cards
          initial="hidden"
          animate={bottomReady ? "visible" : "hidden"}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
