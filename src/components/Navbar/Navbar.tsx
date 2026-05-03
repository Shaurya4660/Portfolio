// src/components/Navbar/Navbar.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '../../utils/data';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onThemeToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = NAV_ITEMS.map((n) => n.href.replace('#', ''));
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 992) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-left">
            <a className="navbar-logo" href="#hero" onClick={() => handleNavClick('#hero')}>
              <div className="logo-box">SV</div>
              <span>Shaurya <span className="logo-surname">Vishnoi</span></span>
            </a>
          </div>

          {/* Desktop links - Centered */}
          <div className="navbar-center">
            <ul className="navbar-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={activeId === item.href.replace('#', '') ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.label}
                    {activeId === item.href.replace('#', '') && <span className="active-dot" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls & Hire - Right */}
          <div className="navbar-right">
            <button
              className="theme-toggle"
              onClick={onThemeToggle}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <div className="navbar-profile">
               <img src="/assest/image/IMG_20240330_111624.jpg" alt="Profile" className="profile-img-avatar" />
            </div>

            <button
              className="btn btn-primary nav-hire-btn"
              onClick={() => handleNavClick('#contact')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hire Me
            </button>

            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeId === item.href.replace('#', '') ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
