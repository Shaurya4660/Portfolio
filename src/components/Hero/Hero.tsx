// src/components/Hero/Hero.tsx

import React from 'react';
import { HERO } from '../../utils/data';
import Terminal from './Terminal';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Ambient background effects */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="hero-content-grid">
        {/* Left: Text Content */}
        <div className="hero-text-side">
          <div className="hero-badge reveal">
            <span className="badge-dot" />
            Open to opportunities
          </div>

          <p className="hero-eyebrow-line reveal reveal-delay-1">HELLO, I'M</p>

          <h1 className="hero-main-name reveal reveal-delay-2">
            Shaurya <span className="hero-surname">Vishnoi</span>
            <span className="name-dot" />
          </h1>

          <p className="hero-main-role reveal reveal-delay-3">{HERO.role}</p>

          <p className="hero-description reveal reveal-delay-4">
            {HERO.tagline}
          </p>

          {/* Tech stack pills */}
          <div className="hero-tech-stack reveal reveal-delay-4">
            {['ASP.NET Core', 'C#', 'SQL Server', 'React', 'TypeScript', 'Web API'].map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>

          {/* Main Actions */}
          <div className="hero-actions-row reveal reveal-delay-5">
            <button
              className="btn btn-primary btn-icon"
              onClick={() => scrollTo('contact')}
              aria-label="Hire me"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hire Me
            </button>

            <a
              href={HERO.github}
              className="btn btn-outline btn-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>

            <a
              href={HERO.linkedin}
              className="btn btn-outline btn-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Location / Info row */}
          <div className="hero-info-footer reveal reveal-delay-6">
            <span className="hero-info-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {HERO.location}
            </span>
            <span className="info-divider" />
            <span className="hero-info-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91-{HERO.phone}
            </span>
            <span className="info-divider" />
            <span className="hero-info-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              MCA · July 2027
            </span>
          </div>
        </div>

        {/* Right side: Visuals */}
        {/* Wireframe Globe (The "Dharti" Design) */}
        <div className="hero-visual-side">
          <div className="hero-visual-container">
            <div className="wireframe-globe">
              {/* Latitude lines */}
              <div className="lat lat-1"></div>
              <div className="lat lat-2"></div>
              <div className="lat lat-3"></div>
              {/* Longitude lines */}
              <div className="long long-1"></div>
              <div className="long long-2"></div>
              <div className="long long-3"></div>
              {/* Text in the middle */}
              <div className="globe-text">SV</div>
              {/* Glow backdrop */}
              <div className="globe-glow"></div>
            </div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
