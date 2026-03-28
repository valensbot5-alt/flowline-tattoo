"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${fadeOut ? "loading-screen--fade" : ""}`}
      aria-hidden="true"
    >
      {/* Tattoo needle SVG */}
      <svg
        className="loading-needle"
        viewBox="0 0 60 200"
        width="60"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Needle grip / body */}
        <rect x="22" y="0" width="16" height="100" rx="4" fill="#333" />
        <rect x="24" y="10" width="12" height="80" rx="2" fill="#444" />
        {/* Grip rings */}
        <rect x="20" y="20" width="20" height="3" rx="1" fill="#555" />
        <rect x="20" y="35" width="20" height="3" rx="1" fill="#555" />
        <rect x="20" y="50" width="20" height="3" rx="1" fill="#555" />
        {/* Needle tip */}
        <polygon points="30,100 26,105 30,180 34,105" fill="#888" />
        <polygon points="30,140 28,130 30,180 32,130" fill="#AAA" />
        {/* Ink drops */}
        <circle className="loading-drop loading-drop--1" cx="30" cy="185" r="3" fill="#D4A853" />
        <circle className="loading-drop loading-drop--2" cx="26" cy="190" r="2" fill="#D4A853" />
        <circle className="loading-drop loading-drop--3" cx="34" cy="192" r="2" fill="#D4A853" />
      </svg>

      {/* Studio name with draw-in effect */}
      <div className="loading-text">
        <span className="loading-text__flow">FLOW</span>
        <span className="loading-text__line">LINE</span>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0A0A0A;
          transition: opacity 0.4s ease;
          opacity: 1;
        }
        .loading-screen--fade {
          opacity: 0;
          pointer-events: none;
        }

        /* Needle bounce animation */
        .loading-needle {
          animation: needle-bounce 0.6s ease-in-out infinite;
        }
        @keyframes needle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* Ink drops pulse */
        .loading-drop {
          opacity: 0;
          animation: drop-pulse 0.6s ease-in-out infinite;
        }
        .loading-drop--1 { animation-delay: 0s; }
        .loading-drop--2 { animation-delay: 0.15s; }
        .loading-drop--3 { animation-delay: 0.3s; }
        @keyframes drop-pulse {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          50% { opacity: 1; transform: translateY(4px) scale(1); }
          100% { opacity: 0; transform: translateY(10px) scale(0.5); }
        }

        /* Text draw-in */
        .loading-text {
          margin-top: 24px;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 8px;
          display: flex;
          gap: 8px;
          overflow: hidden;
        }
        .loading-text__flow {
          color: #E8E8E8;
          animation: slide-in 0.6s ease-out 0.3s both;
        }
        .loading-text__line {
          color: #D4A853;
          animation: slide-in 0.6s ease-out 0.6s both;
        }
        @keyframes slide-in {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
