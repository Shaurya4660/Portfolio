// src/components/Experience/Experience.tsx

import React from 'react';
import { EXPERIENCES } from '../../utils/data';
import './Experience.css';

const Experience: React.FC = () => (
  <section id="experience" className="section" aria-label="Work experience">
    <div className="container">
      <p className="section-label reveal">Work</p>
      <h2 className="section-title reveal reveal-delay-1">Experience</h2>
      <div className="section-divider reveal reveal-delay-2" />

      <div className="experience-timeline">
        {EXPERIENCES.map((exp, i) => (
          <article
            key={exp.id}
            className={`exp-item reveal reveal-delay-${Math.min(i + 2, 5)}`}
          >
            <div className="exp-dot" aria-hidden="true" />

            <header className="exp-header">
              <p className="exp-period">{exp.period}</p>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">@ {exp.company}</p>
            </header>

            <ul className="exp-bullets" aria-label="Responsibilities">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>

            {exp.keyProject && (
              <div className="exp-key-project">
                <p className="kp-label">
                  <span>🔑</span> Key Project
                </p>
                <h4 className="kp-title">{exp.keyProject.title}</h4>
                <ul className="kp-bullets">
                  {exp.keyProject.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
