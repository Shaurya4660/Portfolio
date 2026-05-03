// src/components/Hero/Terminal.tsx
import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

interface TermLine {
  type: 'command' | 'output';
  prompt?: string;
  text: string;
  isStatus?: boolean;
}

const LINES: TermLine[] = [
  { type: 'command', prompt: '$', text: ' whoami' },
  { type: 'output', text: 'shaurya_vishnoi — software_developer' },
  { type: 'command', prompt: '$', text: ' cat stack.txt' },
  { type: 'output', text: 'ASP.NET Core • C# • SQL Server • React • TypeScript' },
  { type: 'command', prompt: '$', text: ' cat experience.txt' },
  { type: 'output', text: 'Software Developer @ Genius World • 2025-Present' },
  { type: 'command', prompt: '$', text: ' echo $STATUS' },
  { type: 'output', text: 'open_to_opportunities', isStatus: true },
];

const TYPING_SPEED = 45;     // ms per character for commands
const OUTPUT_DELAY = 300;    // ms pause before showing output
const LINE_PAUSE = 600;      // ms pause between command groups

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<
    { line: TermLine; displayText: string; done: boolean }[]
  >([]);
  const [showCursor, setShowCursor] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const animate = async () => {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        const line = LINES[i];

        if (line.type === 'command') {
          // Type command character by character
          const entry = { line, displayText: '', done: false };
          setVisibleLines((prev) => [...prev, entry]);

          for (let c = 0; c < line.text.length; c++) {
            if (cancelled) return;
            await sleep(TYPING_SPEED);
            const partial = line.text.slice(0, c + 1);
            setVisibleLines((prev) => {
              const copy = [...prev];
              copy[copy.length - 1] = { ...copy[copy.length - 1], displayText: partial };
              return copy;
            });
          }

          // Mark done
          setVisibleLines((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { ...copy[copy.length - 1], done: true };
            return copy;
          });

          await sleep(OUTPUT_DELAY);
        } else {
          // Output appears instantly
          setVisibleLines((prev) => [
            ...prev,
            { line, displayText: line.text, done: true },
          ]);
          await sleep(LINE_PAUSE);
        }

        // Auto-scroll
        if (bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
      }
    };

    animate();

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);

    return () => {
      cancelled = true;
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="terminal-window reveal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">shaurya@dev ~ zsh</div>
      </div>
      <div className="terminal-body font-mono" ref={bodyRef}>
        {visibleLines.map((entry, idx) => {
          const isLast = idx === visibleLines.length - 1;
          const showCursorHere = isLast && !entry.done;

          if (entry.line.type === 'command') {
            return (
              <div
                className={`terminal-line${idx > 0 ? ' mt-2' : ''}`}
                key={idx}
              >
                <span className="terminal-prompt">{entry.line.prompt}</span>
                <span className="terminal-command">{entry.displayText}</span>
                {showCursorHere && (
                  <span
                    className="terminal-cursor"
                    style={{ opacity: showCursor ? 1 : 0 }}
                  />
                )}
              </div>
            );
          }

          // Output line
          return (
            <div className="terminal-output" key={idx}>
              {entry.displayText}
              {entry.line.isStatus && (
                <>
                  {' '}
                  <svg
                    className="terminal-check"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#27c93f"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </>
              )}
            </div>
          );
        })}

        {/* Final blinking cursor when everything is done */}
        {(visibleLines.length === 0 || visibleLines[visibleLines.length - 1].done) && (
          <div className="terminal-line mt-2">
            <span className="terminal-prompt">$</span>
            <span
              className="terminal-cursor"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
