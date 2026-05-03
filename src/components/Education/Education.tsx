// src/components/Education/Education.tsx

import React from 'react';
import { EDUCATIONS } from '../../utils/data';
import './Education.css';

const Education: React.FC = () => (
  <section id="education" className="section" aria-label="Education">
    <div className="container-wide">
      <p className="section-label reveal">Academic</p>
      <h2 className="section-title reveal reveal-delay-1">Education</h2>
      <div className="section-divider reveal reveal-delay-2" />

      <div className="education-horizontal-wrapper">
        <div className="timeline-horizontal-svg-container">
          <svg className="timeline-horizontal-svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path 
              className="timeline-path-bg" 
              d="M 0 50 Q 250 80, 500 50 T 1000 50" 
            />
            <path 
              className="timeline-path-active" 
              d="M 0 50 Q 250 80, 500 50 T 1000 50" 
            />
          </svg>
        </div>

        <div className="education-horizontal-items">
          {EDUCATIONS.map((edu, i) => {
            const isCurrent = edu.period.toLowerCase().includes('present');
            const level =
              edu.degree.includes('Master') ? 'Graduate' :
              edu.degree.includes('Bachelor') ? 'Undergraduate' :
              edu.degree.includes('12th') ? 'Higher Secondary' : 'Secondary';

            return (
              <div 
                key={edu.id} 
                className={`horizontal-item ${isCurrent ? 'current' : ''}`}
              >
                <div className="horizontal-content">
                  <span className="edu-level-tag">{level}</span>
                  <h3 className="edu-title">{edu.degree}</h3>
                  <p className="edu-school">{edu.institution}</p>
                  
                  <div className="edu-info-row">
                    <span className="edu-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
