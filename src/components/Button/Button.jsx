import React from 'react';
import { motion } from 'framer-motion';
import './Button.css'; // Import the separate CSS file

// This is a standalone, reusable component for the animated button.
// It accepts a 'text' prop for the button's label and an optional 'href' prop for the link.
export default function Button({ text, href = "https://yieldstone.gitbook.io/yieldstone-whitepaper" }) {
  // Variants for the button's scale animation.
  const buttonVariants = {
    initial: { scale: 1 },
    // hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  // Variants for the initial arrow that is visible by default.
  const arrowInnerVariants = {
    initial: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { duration: 0.5, ease: "easeOut", delay: 0.2 },
        opacity: { duration: 0.5, ease: "easeOut", delay: 0.2 }
      }
    },
    hover: {
      x: '100%',
      opacity: 0,
      transition: {
        x: { duration: 0.3, ease: "easeIn" },
        opacity: { duration: 0.3, ease: "easeIn" }
      }
    }
  };

  // Variants for the second arrow that is hidden by default.
  const arrowNextVariants = {
    initial: {
      x: '-100%',
      opacity: 0,
      transition: {
        x: { duration: 0.3, ease: "easeIn" },
        opacity: { duration: 0.3, ease: "easeIn" }
      }
    },
    hover: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { duration: 0.5, ease: "easeOut", delay: 0.2 },
        opacity: { duration: 0.5, ease: "easeOut", delay: 0.2 }
      }
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animated-button"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
    >
      <span className="button-text">
        {text}
      </span>

      <div className="arrow-container">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="#27D690"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-svg"
          variants={arrowInnerVariants}
        >
          <path d="M1 7.02515H13" /><path d="M7.34326 1.36841L13.0001 7.02526L7.34326 12.6821" />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="#27D690"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow-svg"
          variants={arrowNextVariants}
        >
          <path d="M1 7.02515H13" /><path d="M7.34326 1.36841L13.0001 7.02526L7.34326 12.6821" />
        </motion.svg>
      </div>
    </motion.a>
  );
}
