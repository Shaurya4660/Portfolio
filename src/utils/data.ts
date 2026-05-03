// src/utils/data.ts
// All portfolio content — edit this file to update the site

import { Experience, Project, SkillCategory, Education, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  name: 'Shaurya Vishnoi',
  role: 'Software Developer',
  tagline: 'Building elegant web solutions with ASP.NET Core, C#, and modern frontend technologies.',
  email: 'shauryavishnoi0@gmail.com',
  phone: '9389520103',
  location: 'Ranibaag, Dhampur, Uttar Pradesh',
  github: 'https://github.com/shauryavishnoi',
  linkedin: 'https://linkedin.com/in/shauryavishnoi',
};

export const ABOUT = {
  summary:
    'Motivated and detail-oriented Software Developer with hands-on experience in building web applications using ASP.NET Core MVC, Web API, C#, and SQL Server. Adept at full-stack development with strong problem-solving skills. Currently pursuing MCA while gaining practical industry exposure. Passionate about writing clean, efficient code and delivering quality software solutions.',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'genius-world',
    role: 'Software Developer',
    company: 'Genius World',
    period: 'September 2025 – Present',
    bullets: [
      'Developed and maintained web applications using ASP.NET Core MVC and Web API',
      'Designed and optimized SQL Server databases for application data management',
      'Built responsive frontend interfaces using HTML, CSS, and Bootstrap',
      'Collaborated with team members using Git version control (GitHub / Bitbucket)',
      'Tested and debugged REST APIs using Postman to ensure reliability and performance',
    ],
    keyProject: {
      title: 'Travel Agency Web App',
      bullets: [
        'Developed a full-featured Travel Agency web application handling bookings, itineraries, and customer management',
        'Implemented backend logic with C# and ASP.NET Core; integrated SQL Server for persistent data storage',
        'Created clean, mobile-friendly UI using HTML, CSS, and Bootstrap',
      ],
    },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'travel-agency',
    title: 'Travel Agency Web Application',
    description:
      'A comprehensive travel booking platform that handles end-to-end customer journeys — from destination browsing and package selection to booking confirmation and itinerary management.',
    techStack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'HTML', 'CSS', 'Bootstrap', 'Web API'],
    highlights: [
      'Built end-to-end travel booking platform with features for destination management, tour packages, and customer inquiries',
      'Implemented RESTful Web APIs for data exchange between frontend and backend layers',
      'Followed MVC architecture pattern ensuring maintainable and scalable code',
      'Integrated SQL Server for reliable persistent data storage and efficient queries',
    ],
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages & Frameworks',
    icon: '⚡',
    skills: ['C#', 'ASP.NET Core MVC', 'ASP.NET MVC', 'Web API', 'HTML', 'CSS', 'Bootstrap', 'T-SQL'],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: '🗄️',
    skills: ['SQL Server', 'Entity Framework Core'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Visual Studio', 'Visual Studio Code', 'SQL Server Management Studio'],
  },
  {
    id: 'vcs',
    label: 'Version Control & Testing',
    icon: '🔀',
    skills: ['GitHub', 'Bitbucket', 'Postman'],
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA) — Pursuing',
    institution: 'Graphic Era Hill University, Dehradun',
    period: 'July 2025 – Present',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IFTM University, Moradabad',
    period: 'July 2022 – June 2025',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate (12th) — UP Board',
    institution: 'Radha Inter College, Dhampur',
    period: '2021',
    score: '71.3%',
  },
  {
    id: 'highschool',
    degree: 'High School (10th) — UP Board',
    institution: 'Radha Inter College, Dhampur',
    period: '2019',
    score: '71.3%',
  },
];
