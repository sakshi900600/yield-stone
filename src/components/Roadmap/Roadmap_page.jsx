import React from "react";
import "./Roadmap_page.css";
import Button from "../Button/Button";
// import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Step 1: Foundational AI Intelligence",
    points: [
      {
        label: "PropAI Chat Launch",
        description:
          "Introduce an AI-powered assistant providing real-time property analytics, market forecasts, and strategic asset insights.",
      },
      {
        label: "Immediate Utility",
        description:
          "Users can tap into high-level intelligence right away, with $YIELD granting premium access and features.",
      },
    ],
  },
  {
    title: "Step 2: AI Agent Ecosystem & Community Innovation",
    points: [
      {
        label: "Specialized Agents",
        description:
          "Expand to multiple AI agents, each focused on niche tasks—predictive market analysis, portfolio optimization, regional insights, and more.",
      },
      {
        label: "Developer Participation",
        description:
          "Enable developers to build and monetize custom AI models, continuously enriching the platform’s offerings.",
      },
      {
        label: "Network Effect",
        description:
          "More agents, more users, more data, driving $YIELD utility and platform growth.",
      },
    ],
  },
  {
    title: "Step 3: Decentralized Compute Infrastructure",
    points: [
      {
        label: "Scalable Power",
        description:
          "Introduce decentralized virtual machines, storage, and GPU capabilities, ensuring the computational backbone needed for robust AI operations.",
      },
      {
        label: "Flexible Access",
        description:
          "Easy-to-use interfaces and APIs let anyone harness massive computing power on-demand, with $YIELD at the core of the resource economy.",
      },
    ],
  },
  {
    title: "Step 4: GPU Marketplace MVP",
    points: [
      {
        label: "On-Demand Compute",
        description:
          "Launch a functional GPU marketplace, allowing users and developers to rent compute power for AI training, analytics, and simulations.",
      },
      {
        label: "AI-Optimized Matching",
        description:
          "Our AI agents streamline resource allocation, ensuring fair pricing and top-tier performance.",
      },
      {
        label: "Value Alignment",
        description:
          "This marketplace creates an ongoing demand loop for $YIELD, tying platform growth directly to token value.",
      },
    ],
  },
  {
    title: "Step 5: The YieldStone NEXUS Fund & Enhanced Real Estate Ventures",
    points: [
      {
        label: "Fund Launch",
        description:
          "Introduce the YieldStone NEXUS Fund, a tokenized real estate investment vehicle focused on infrastructure-driven opportunities—particularly data centers—and a range of core assets like multifamily units, rental properties, and development projects.",
      },
      {
        label: "AI-Enhanced Acquisition",
        description:
          "Advanced AI models guide investment decisions, factoring in population growth, migration trends, economic indicators, and more to pinpoint prime opportunities.",
      },
      {
        label: "Real-World Integration",
        description:
          "Tangible properties and data centers support the ecosystem’s compute needs, while real estate income streams bolster the $YIELD token economy and platform stability.",
      },
    ],
  },
  {
    title: "Step 6: Full Ecosystem Integration & Community Governance",
    points: [
      {
        label: "Holistic Convergence",
        description:
          "By this stage, AI analytics, decentralized compute, the GPU marketplace, and the YieldStone NEXUS Fund form a seamless ecosystem.",
      },
      {
        label: "Tokenized Influence",
        description:
          "$YIELD holders vote on strategic moves—property expansions, fund directives, new AI agent priorities—ensuring that community interests shape the platform’s evolution.",
      },
      {
        label: "Sustainable Growth",
        description:
          "A diversified, AI-driven, asset-backed environment emerges, offering users unprecedented ways to invest, innovate, and thrive within the YieldStoneXAI universe.",
      },
    ],
  },
];

const Roadmap = () => {

  return (
    <div className="roadmap-container">
      <img src="/logo.avif" alt="Brand Logo" className="brand-logo" />

      <div className="roadmap">
        {/* Header */}
        <header className="roadmap-header">
          <h1>YieldStoneXAI: A 6-Step Roadmap</h1>
        </header>

        {/* Steps */}
        <section className="roadmap-steps">
          {steps.map((step, index) => (
            <div className="roadmap-step" key={index}>
              <h2>{step.title}</h2>
              <ul>
                {step.points.map((point, i) => (
                  <li key={i}>
                    <strong>{point.label}:</strong> {point.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Button */}
        <div className="roadmap-btn">
          <Button href='/' text="Go to Homepage" target="_self"
 />
        </div>

        {/* Footer */}
        <footer className="roadmap-footer">
          <div className="footer-left">
            <img src="/logo.avif" alt="Brand Logo" className="footer-logo" />
            <p>© 2025 YieldStone. All rights reserved.</p>
          </div>
          <div className="footer-right">
            {[
              { href: "https://x.com/yieldstone" }, // Twitter/X
              { href: "https://linkedin.com/company/yieldstone" }, // LinkedIn
              { href: "https://t.me/Yieldstoneai" }, // Telegram
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                {i === 0 && (
                  // Twitter/X SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 26 24"
                    fill="none"
                  >
                    <path
                      d="M20.4766 0.5H24.4634L15.7533 10.2425L26 23.5H17.977L11.6929 15.4595L4.50267 23.5H0.513413L9.82969 13.0793L0 0.5H8.22676L13.907 7.84939L20.4766 0.5ZM19.0772 21.1646H21.2865L7.02637 2.71271H4.65573L19.0772 21.1646Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {i === 1 && (
                  // LinkedIn SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15 0C6.71567 0 0 6.71567 0 15C0 23.2843 6.71567 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71567 23.2843 0 15 0ZM23.3333 8.66433L22.0027 9.94C21.888 10.0273 21.831 10.171 21.8547 10.3133V19.6867C21.831 19.829 21.8877 19.9727 22.0027 20.06L23.302 21.3357V21.6157H16.7663V21.3357L18.1123 20.029C18.2447 19.8967 18.2447 19.858 18.2447 19.6557V12.079L14.502 21.5847H13.9963L9.639 12.079V18.45C9.60267 18.718 9.69167 18.9873 9.88033 19.1813L11.631 21.305V21.585H6.66667V21.305L8.41733 19.1813C8.60467 18.9873 8.68833 18.716 8.643 18.45V11.0833C8.66367 10.8787 8.58567 10.6767 8.433 10.539L6.87667 8.66433V8.38433H11.7087L15.4433 16.5753L18.727 8.38433H23.3333V8.66433Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {i === 2 && (
                  // Telegram SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 29 24"
                    fill="none"
                  >
                    <path
                      d="M11.3794 15.6585L10.8996 22.0801C11.586 22.0801 11.8833 21.7995 12.2397 21.4626L15.4576 18.5358L22.1253 23.183C23.3482 23.8315 24.2098 23.49 24.5396 22.1123L28.9163 2.59461L28.9175 2.59346C29.3054 0.873064 28.2638 0.200318 27.0724 0.622366L1.34633 9.99597C-0.40942 10.6446 -0.382836 11.5761 1.04787 11.9981L7.62498 13.945L22.9023 4.84744C23.6213 4.39435 24.275 4.64505 23.7373 5.09814L11.3794 15.6585Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Roadmap;
