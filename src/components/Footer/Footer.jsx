import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

// Custom SVG Icon Components
const XIcon = ({ size = 28, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26 24" fill="none" className={`vectors-wrapper-3 is-footer ${className}`}>
    <path d="M20.4766 0.5H24.4634L15.7533 10.2425L26 23.5H17.977L11.6929 15.4595L4.50267 23.5H0.513413L9.82969 13.0793L0 0.5H8.22676L13.907 7.84939L20.4766 0.5ZM19.0772 21.1646H21.2865L7.02637 2.71271H4.65573L19.0772 21.1646Z" fill="currentColor"></path>
  </svg>
);

const MIcon = ({ size = 28, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 29 29" fill="none" className={`vectors-wrapper-3-copy is-footer ${className}`}>
    <path d="M14.5 0C6.49181 0 0 6.49181 0 14.5C0 22.5082 6.49181 29 14.5 29C22.5082 29 29 22.5082 29 14.5C29 6.49181 22.5082 0 14.5 0ZM22.5556 8.37552L21.2692 9.60867C21.1584 9.69309 21.1033 9.83197 21.1262 9.96956V19.0304C21.1033 19.168 21.1581 19.3069 21.2692 19.3913L22.5253 20.6245V20.8951H16.2075V20.6245L17.5086 19.3614C17.6365 19.2334 17.6365 19.1961 17.6365 19.0005V11.6764L14.0186 20.8652H13.5298L9.3177 11.6764V17.835C9.28258 18.0941 9.36861 18.3544 9.55099 18.542L11.2433 20.5948V20.8655H6.44444V20.5948L8.13676 18.542C8.31784 18.3544 8.39872 18.0921 8.3549 17.835V10.7139C8.37488 10.516 8.29948 10.3208 8.1519 10.1877L6.64744 8.37552V8.10486H11.3184L14.9286 16.0228L18.1028 8.10486H22.5556V8.37552Z" fill="currentColor"></path>
  </svg>
);

const SendIcon = ({ size = 28, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 29 24" fill="none" className={`vectors-wrapper-3 is-footer ${className}`}>
    <path d="M11.3794 15.6585L10.8996 22.0801C11.586 22.0801 11.8833 21.7995 12.2397 21.4626L15.4576 18.5358L22.1253 23.183C23.3482 23.8315 24.2098 23.49 24.5396 22.1123L28.9163 2.59461L28.9175 2.59346C29.3054 0.873064 28.2638 0.200318 27.0724 0.622366L1.34633 9.99597C-0.40942 10.6446 -0.382836 11.5761 1.04787 11.9981L7.62498 13.945L22.9023 4.84744C23.6213 4.39435 24.275 4.64505 23.7373 5.09814L11.3794 15.6585Z" fill="currentColor"></path>
  </svg>
);

// Footer Component
function Footer() {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="footer-top">
        <div className="top-logos">
          <div className="logo-wrapper">
            <img src="logo.avif" alt="Company Logo" />
          </div>

          <div className="top-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Team</a>
            <a href="#">Tokenomics</a>
            <a href="#">Roadmap</a>
          </div>

          <div className="footer-media-icon">
            <XIcon className='media-icons'/>
            <MIcon className='media-icons'/>
            <SendIcon className='media-icons'/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="CA">
          CA: <span>0x4a35feae3378298d65F123576C61ACD62b52A920</span>
        </p>
        <p className="copyright">© 2025 YieldStone. All rights reserved.</p>
      </div>
    </motion.div>
  );
}

export default Footer;
