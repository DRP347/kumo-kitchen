// src/components/reservations/steps/GuestsStep.tsx
"use client";

import React, { useEffect, useRef } from "react";

type GuestsStepProps = {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  onNext: () => void;
  min?: number;
  max?: number;
};

export default function GuestsStep({
  guests,
  setGuests,
  onNext,
  min = 1,
  max = 8,
}: GuestsStepProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const dec = () => setGuests((g) => Math.max(min, g - 1));
  const inc = () => setGuests((g) => Math.min(max, g + 1));

  // keep keyboard UX + avoid any weird focus state
  useEffect(() => {
    wrapRef.current?.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") dec();
    if (e.key === "ArrowRight") inc();
    if (e.key === "Enter") onNext();
  };

  return (
    <div
      ref={wrapRef}
      className="reservation-step"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="reservation-label">Guests</div>

      <div className="guests-selector">
        <button
          type="button"
          className="reservation-counter-btn"
          onClick={dec}
          aria-label="Decrease guests"
        >
          –
        </button>

        <div className="guests-number" aria-live="polite">
          {guests}
        </div>

        <button
          type="button"
          className="reservation-counter-btn"
          onClick={inc}
          aria-label="Increase guests"
        >
          +
        </button>
      </div>

      <p className="reservation-hint">Optimal experience for 2–4 guests</p>

      <button type="button" className="reservation-next" onClick={onNext}>
        Continue
      </button>
    </div>
  );
}
