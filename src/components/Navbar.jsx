import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import Button from './Button/Button';

const navLinkItems = [
  'Home',
  'About',
  'Features',
  'Tokenomics',
  'Team',
  'Roadmap'
];

const totalItems = navLinkItems.length + 1 + 3; // nav links + button + 3 socials

const itemVariants = {
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.45 + i * 0.08,
      type: 'spring',
      stiffness: 100,
    }
  }),
  closed: (i) => ({
    opacity: 0,
    x: 50,
    transition: {
      delay: (totalItems - 1 - i) * 0.05,
    }
  })
};

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarReady, setSidebarReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isClicked) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isClicked]);

  return (
    <>
      <nav className={`navbar ${showNavbar ? 'show' : 'hide'} ${scrolled ? 'scrolled' : ''}`}>
        <a href="#"><img id="nav-logo" src="/logo.avif" alt="logo" /></a>
        <div
          onClick={() => {
            setIsClicked(!isClicked);
            if (!isClicked) setSidebarReady(false);
          }}
          className={`menu ${isClicked ? 'clicked' : ''}`}
        >
          <div className="menu-line menu-line-1"></div>
          <div className="menu-line menu-line-2"></div>
        </div>
      </nav>

      <AnimatePresence>
        {isClicked && (
          <motion.div
            key="sidebar"
            className="sidebar"
            initial={{ right: '-100%' }}
            animate={{ right: 0 }}
            exit={{ right: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onAnimationComplete={() => setSidebarReady(true)}
          >
            <ul className="nav-links">
              {navLinkItems.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  initial="closed"
                  animate={sidebarReady ? 'open' : 'closed'}
                  exit="closed"
                  variants={itemVariants}
                >
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>

            <div className="sidebar-bottom">
              <Button className="nav-btn" text={'View Whitepaper'}/>

              <div className="sidebar-socials">
                {[0, 1, 2].map((_, i) => (
                  <motion.a
                    key={i}
                    href=""
                    custom={navLinkItems.length + 1 + i}
                    initial="closed"
                    animate={sidebarReady ? 'open' : 'closed'}
                    exit="closed"
                    variants={itemVariants}
                  >
                    {i === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 24" fill="none"><path d="M20.4766 0.5H24.4634L15.7533 10.2425L26 23.5H17.977L11.6929 15.4595L4.50267 23.5H0.513413L9.82969 13.0793L0 0.5H8.22676L13.907 7.84939L20.4766 0.5ZM19.0772 21.1646H21.2865L7.02637 2.71271H4.65573L19.0772 21.1646Z" fill="currentColor"></path></svg>
                    )}
                    {i === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 30 30" fill="none"><path d="M15 0C6.71567 0 0 6.71567 0 15C0 23.2843 6.71567 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71567 23.2843 0 15 0ZM23.3333 8.66433L22.0027 9.94C21.888 10.0273 21.831 10.171 21.8547 10.3133V19.6867C21.831 19.829 21.8877 19.9727 22.0027 20.06L23.302 21.3357V21.6157H16.7663V21.3357L18.1123 20.029C18.2447 19.8967 18.2447 19.858 18.2447 19.6557V12.079L14.502 21.5847H13.9963L9.639 12.079V18.45C9.60267 18.718 9.69167 18.9873 9.88033 19.1813L11.631 21.305V21.585H6.66667V21.305L8.41733 19.1813C8.60467 18.9873 8.68833 18.716 8.643 18.45V11.0833C8.66367 10.8787 8.58567 10.6767 8.433 10.539L6.87667 8.66433V8.38433H11.7087L15.4433 16.5753L18.727 8.38433H23.3333V8.66433Z" fill="currentColor"></path></svg>
                    )}
                    {i === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 29 24" fill="none"><path d="M11.3794 15.6585L10.8996 22.0801C11.586 22.0801 11.8833 21.7995 12.2397 21.4626L15.4576 18.5358L22.1253 23.183C23.3482 23.8315 24.2098 23.49 24.5396 22.1123L28.9163 2.59461L28.9175 2.59346C29.3054 0.873064 28.2638 0.200318 27.0724 0.622366L1.34633 9.99597C-0.40942 10.6446 -0.382836 11.5761 1.04787 11.9981L7.62498 13.945L22.9023 4.84744C23.6213 4.39435 24.275 4.64505 23.7373 5.09814L11.3794 15.6585Z" fill="currentColor"></path></svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
