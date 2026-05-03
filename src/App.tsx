// src/App.tsx
// Root component — wires together all sections and theme logic

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppWidget from './components/WhatsApp/WhatsAppWidget';
import { useScrollReveal } from './hooks/useScrollSpy';
import './index.css';

const App: React.FC = () => {
  // Theme: persisted in localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('sv-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme attribute to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sv-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // Activate scroll reveal globally
  useScrollReveal();

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          top: '-100%',
          left: 0,
          padding: '0.75rem 1.5rem',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          zIndex: 9999,
          borderRadius: '0 0 var(--radius-md) 0',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => { e.currentTarget.style.top = '0'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-100%'; }}
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <WhatsAppWidget />
      <Footer />
    </>
  );
};

export default App;
