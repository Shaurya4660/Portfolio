// src/components/About/About.tsx

import React from 'react';
import { HERO, ABOUT } from '../../utils/data';
import './About.css';

const About: React.FC = () => (
  <section id="about" className="section" aria-label="About me">
    <div className="container">
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal reveal-delay-1">Who I Am</h2>
      <div className="section-divider reveal reveal-delay-2" />

      <div className="about-grid">
        {/* Summary text */}
        <div className="about-text reveal reveal-delay-2">
          <p>
            {ABOUT.summary}
          </p>
          <p>
            I thrive at the intersection of{' '}
            <span className="about-highlight">backend architecture</span> and{' '}
            <span className="about-highlight">clean UI design</span> — building systems that are
            reliable under the hood and a pleasure to use on the surface.
          </p>
          <p>
            When I'm not writing code, you'll find me exploring new frameworks,
            contributing to team projects on GitHub, or sharpening my academic
            foundation at Graphic Era Hill University.
          </p>
        </div>

        {/* Aside cards */}
        <div className="about-aside reveal reveal-delay-3">
          <div className="card about-card-info">
            <div className="info-row">
              <span className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <div className="info-label">Location</div>
                <div className="info-value">{HERO.location}</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <div>
                <div className="info-label">Email</div>
                <div className="info-value">
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${HERO.email}`}>{HERO.email}</a>
                </div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-value">
                  <a href={`tel:${HERO.phone}`}>{HERO.phone}</a>
                </div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
              </span>
              <div>
                <div className="info-label">Status</div>
                <div className="info-value">Pursuing MCA · Open to Work</div>
              </div>
            </div>
          </div>

          <div className="card about-passions">
            <div className="passion-title">Interests & Passions</div>
            <div className="passion-tags">
              {[
                { icon: '💻', label: 'Clean Code' },
                { icon: '🚀', label: 'Full-Stack Dev' },
                { icon: '🔌', label: 'REST APIs' },
                { icon: '🗄️', label: 'SQL Design' },
                { icon: '🌿', label: 'Git Workflows' },
                { icon: '✨', label: 'UI/UX' },
                { icon: '🧩', label: 'Problem Solving' },
                { icon: '🌍', label: 'Open Source' },
              ].map((p) => (
                <span key={p.label} className="passion-tag">
                  <span className="passion-icon">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
