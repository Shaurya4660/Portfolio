// src/components/Skills/Skills.tsx

import React, { useState, useEffect } from 'react';
import './Skills.css';

interface SkillNode {
  id: string;
  name: string;
  icon: string;
  color: string;
  anchorX: number; // Base position %
  anchorY: number; // Base position %
}

const SKILLS_DATA: SkillNode[] = [
  // Far Left Edge
  { id: '1', name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26', anchorX: 5, anchorY: 20 },
  { id: '2', name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6', anchorX: 10, anchorY: 38 },
  { id: '3', name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952b3', anchorX: 6, anchorY: 58 },
  { id: '4', name: 'V. Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', color: '#5c2d91', anchorX: 8, anchorY: 80 },
  
  // Far Right Edge
  { id: '5', name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#239120', anchorX: 95, anchorY: 25 },
  { id: '6', name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', color: '#512bd4', anchorX: 90, anchorY: 48 },
  { id: '7', name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', color: '#cc2927', anchorX: 94, anchorY: 68 },
  { id: '8', name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#f05032', anchorX: 92, anchorY: 88 },

  // Distributed Centers
  { id: '9', name: 'Web API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007acc', anchorX: 42, anchorY: 25 },
  { id: '10', name: 'EF Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg', color: '#007acc', anchorX: 58, anchorY: 78 },
  { id: '11', name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#ef5b25', anchorX: 28, anchorY: 18 },
  { id: '12', name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#ffffff', anchorX: 74, anchorY: 35 },
  { id: '13', name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', color: '#0052cc', anchorX: 72, anchorY: 88 },
  { id: '14', name: 'T-SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', color: '#cc2927', anchorX: 25, anchorY: 75 },
];

const CONNECTIONS = [
  ['1', '2'], ['2', '3'], ['3', '4'], ['1', '11'], ['11', '9'], ['9', '12'], ['12', '5'], ['5', '6'], ['6', '7'], ['7', '8'], ['8', '13'], ['13', '10'], ['10', '14'], ['14', '4'], ['3', '14'], ['9', '6'], ['12', '6']
];

const Skills: React.FC = () => {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    let frameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.015;
      const next: Record<string, { x: number; y: number }> = {};
      
      SKILLS_DATA.forEach((s) => {
        const freq = 0.5 + parseInt(s.id) * 0.1;
        const rangeX = 5; 
        const rangeY = 7;
        
        const dx = Math.sin(time * freq) * rangeX;
        const dy = Math.cos(time * freq * 0.8) * rangeY;
        
        next[s.id] = {
          x: Math.max(1, Math.min(99, s.anchorX + dx)),
          y: Math.max(5, Math.min(95, s.anchorY + dy))
        };
      });

      setPositions(next);
      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider" />
      </div>

      <div className="constellation-viewer full-width">
        <svg className="dynamic-lines" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {CONNECTIONS.map(([src, dst], i) => {
            const p1 = positions[src];
            const p2 = positions[dst];
            if (!p1 || !p2) return null;
            return (
              <line 
                key={i} 
                x1={`${p1.x}%`} y1={`${p1.y}%`} 
                x2={`${p2.x}%`} y2={`${p2.y}%`} 
                stroke="rgba(184, 94, 54, 0.22)" 
                strokeWidth="0.08" 
              />
            );
          })}
        </svg>

        {SKILLS_DATA.map((node) => {
          const pos = positions[node.id];
          if (!pos) return null;
          return (
            <div
              key={node.id}
              className="dynamic-node"
              style={{
                top: `${pos.y}%`,
                left: `${pos.x}%`,
                '--node-color': node.color,
              } as any}
            >
              <div className="icon-wrapper">
                <img src={node.icon} alt={node.name} />
              </div>
              <span className="skill-tag-name">{node.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
