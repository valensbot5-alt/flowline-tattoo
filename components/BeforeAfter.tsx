"use client";

import { useState, useRef } from "react";

type BeforeAfterProps = {
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({ beforeLabel = "Prije", afterLabel = "Poslije" }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  function updatePosition(clientX: number) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }

  function handlePointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }

  function handlePointerUp() {
    isDragging.current = false;
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-square cursor-ew-resize select-none overflow-hidden rounded-sm bg-primary"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* "Before" side (full) */}
      <div className="absolute inset-0 flex items-center justify-center bg-primary/80">
        <div className="text-center text-foreground/30">
          <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-sm">{beforeLabel}</p>
        </div>
      </div>

      {/* "After" side (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-background"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="text-center text-foreground/30">
          <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-sm">{afterLabel}</p>
        </div>
      </div>

      {/* Slider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-secondary"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary shadow-lg">
          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 z-10 rounded-sm bg-primary/80 px-2 py-1 text-xs font-medium text-foreground/70">
        {beforeLabel}
      </span>
      <span className="absolute bottom-3 right-3 z-10 rounded-sm bg-primary/80 px-2 py-1 text-xs font-medium text-foreground/70">
        {afterLabel}
      </span>
    </div>
  );
}
