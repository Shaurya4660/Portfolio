// src/components/Projects/Projects.tsx

import React from 'react';
import { PROJECTS } from '../../utils/data';
import './Projects.css';

const Projects: React.FC = () => (
  <section id="projects" className="section" aria-label="Projects">
    <div className="container">
      <p className="section-label reveal">Work</p>
      <h2 className="section-title reveal reveal-delay-1">Projects</h2>
      <div className="section-divider reveal reveal-delay-2" />

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <article
            key={project.id}
            className={`card project-card${project.featured ? ' featured' : ''} reveal reveal-delay-${Math.min(i + 2, 5)}`}
          >
            {project.featured && (
              <div className="project-featured-badge" aria-label="Featured project">
                ⭐ Featured Project
              </div>
            )}

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <ul className="project-highlights" aria-label="Project highlights">
              {project.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>

            <p className="project-stack-label">Tech Stack</p>
            <div className="project-stack" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
