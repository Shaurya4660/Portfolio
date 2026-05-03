// src/components/Footer/Footer.tsx

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">SV<span>.</span></div>

        <p className="footer-copy">
          © 2025 Shaurya Vishnoi. Crafted with <svg className="footer-heart" width="12" height="12" viewBox="0 0 24 24" fill="#f43f5e" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> & clean code.
        </p>

        <button
          className="footer-back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
