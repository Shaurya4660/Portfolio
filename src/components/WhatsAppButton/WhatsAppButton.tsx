// src/components/WhatsAppButton/WhatsAppButton.tsx
// Floating WhatsApp CTA button — opens a pre-filled direct chat

import React, { useState } from 'react';
import './WhatsAppButton.css';

const PHONE = '919389520103'; // country code + number (no + or spaces)
const PRE_MESSAGE = encodeURIComponent("Hi Shaurya! I came across your portfolio and would love to connect. 👋");

const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${PHONE}?text=${PRE_MESSAGE}`;

  return (
    <a
      id="whatsapp-float-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${hovered ? 'wa-float--hovered' : ''}`}
      aria-label="Chat with me on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip label */}
      <span className="wa-float__tooltip">Chat on WhatsApp</span>

      {/* WhatsApp SVG icon */}
      <svg
        className="wa-float__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.848 7.262L1 31l7.938-1.822A14.94 14.94 0 0 0 16 31c8.284 0 15-6.716 15-15S24.284 1 16 1z"
          fill="#25D366"
        />
        <path
          d="M23.472 19.838c-.31-.155-1.833-.904-2.117-.006-.277.875-1.08 1.098-1.862.746a10.615 10.615 0 0 1-3.143-2.928 10.638 10.638 0 0 1-1.636-3.878c-.143-.87.343-1.418 1.012-1.636.308-.1.58-.252.71-.567.13-.315.002-.737-.13-1.042l-.964-2.3c-.254-.606-.533-.597-.8-.607-.226-.009-.486-.011-.746-.011-.26 0-.682.098-.1.039l-.014.002c-.39.066-1.5.663-1.93 1.709-.598 1.446-.294 3.19.702 4.823a17.624 17.624 0 0 0 2.982 3.748 17.66 17.66 0 0 0 4.134 2.858c1.768.797 3.384.647 4.647-.218.816-.563 1.377-1.572 1.48-2.634.047-.476-.116-.694-.325-.799z"
          fill="#fff"
        />
      </svg>

      {/* Pulse ring */}
      <span className="wa-float__pulse" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
