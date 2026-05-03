// src/types/index.ts
// Central type definitions for the portfolio

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  keyProject?: {
    title: string;
    bullets: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
}
