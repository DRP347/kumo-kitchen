// src/components/reservations/ReservationFlow.tsx
"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type ReservationState = {
  date: string;
  guests: number;
  time: string;
  setDate: (v: string) => void;
  setGuests: (v: number) => void;
  setTime: (v: string) => void;
};

const ReservationCtx = createContext<ReservationState | null>(null);

function useReservation() {
  const ctx = useContext(ReservationCtx);
  if (!ctx) throw new Error("ReservationFlow must be used within provider");
  return ctx;
}

const DATES = ["14 Oct", "15 Oct", "16 Oct", "17 Oct"];
const TIMES = ["19:00", "19:30", "20:00"];
const CHIPS = ["Seasonal menu", "Chef-led pacing", "Limited seats"];
const PERKS = [
  "Welcome tea pairing",
  "Priority window table (when available)",
  "Complimentary palette cleanser",
];

function StickyCTA() {
  const { time, date, guests } = useReservation();

  const label = `CONFIRM RESERVATION — ${time}`;
  const sub = `${date} • ${guests} guest${guests > 1 ? "s" : ""}`;

  return (
    <div className="reservation-sticky-cta" role="region" aria-label="Confirm reservation">
      <button
        type="button"
        className="reservation-sticky-btn"
        aria-label={`${label}. ${sub}`}
        onClick={() => {
          console.log("Confirm reservation", { date, guests, time });
        }}
      >
        {label}
      </button>
      <div className="reservation-sticky-sub" aria-hidden="true">
        {sub}
      </div>
    </div>
  );
}

export default function ReservationFlow() {
  const [date, setDate] = useState(DATES[0]);
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState(TIMES[1]);

  const value = useMemo(
    () => ({ date, guests, time, setDate, setGuests, setTime }),
    [date, guests, time]
  );

  return (
    <ReservationCtx.Provider value={value}>
      <div className="reservation-flow-wrap">
        <div className="reservation-flow">
          {/* SELECT DATE */}
          <section className="reservation-extra-card" aria-label="Select date">
            <div className="reservation-eyebrow">Select date</div>

            <div className="reservation-calendar" role="list">
              {DATES.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`calendar-date ${date === d ? "is-active" : ""}`}
                  onClick={() => setDate(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </section>

          {/* THE OMAKASE PROMISE */}
          <section className="reservation-extra-card" aria-label="The omakase promise">
            <div className="reservation-eyebrow">The omakase promise</div>
            <h2 className="reservation-extra-title">One sitting. Zero rush.</h2>
            <p className="reservation-extra-text">
              A curated progression designed to peak at the right moment—warm, balanced,
              intentional.
            </p>

            <div className="reservation-extra-chips" aria-label="Highlights">
              {CHIPS.map((c) => (
                <span key={c} className="reservation-chip">
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* GUESTS + TIME */}
          <section className="reservation-extra-card split" aria-label="Guests and time">
            <div>
              <div className="reservation-eyebrow">Guests</div>

              <div className="guests-selector" aria-label="Guest counter">
                <button
                  type="button"
                  className="reservation-counter-btn"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
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
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  aria-label="Increase guests"
                >
                  +
                </button>
              </div>

              <div className="reservation-hint">Optimal experience for 2–4 guests</div>

              <div className="time-slots" aria-label="Time slots">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-chip ${time === t ? "is-active" : ""}`}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="reservation-mini-ticket" aria-label="Next available">
              <div className="reservation-mini-label">Next available</div>
              <div className="reservation-mini-value">{time}</div>
              <div className="reservation-mini-muted">Arrive 10 mins early</div>
            </div>
          </section>

          {/* PERKS (glass container) */}
          <section className="reservation-glass" aria-label="Tonight's perks">
            <div className="reservation-eyebrow">Tonight&apos;s perks</div>
            <div style={{ marginTop: 10 }}>
              {PERKS.map((p) => (
                <div key={p} className="reservation-perk-row">
                  <span className="reservation-perk-dot" aria-hidden="true" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </section>

          {/* HOUSE NOTES (spec sheet) */}
          <section className="reservation-extra-card" aria-label="House notes">
            <div className="reservation-eyebrow">House notes</div>

            <div className="reservation-notes" role="list">
              <div className="reservation-note" role="listitem">
                <div className="reservation-note-k">Dietary</div>
                <div className="reservation-note-v">We can adapt most dishes</div>
              </div>

              <div className="reservation-note" role="listitem">
                <div className="reservation-note-k">Seating</div>
                <div className="reservation-note-v">2–4 guests recommended</div>
              </div>

              <div className="reservation-note" role="listitem">
                <div className="reservation-note-k">Duration</div>
                <div className="reservation-note-v">~90 minutes experience</div>
              </div>
            </div>
          </section>

          {/* Social proof */}
          <div className="reservation-socialproof" aria-label="Social proof">
            <span className="reservation-social-dot" aria-hidden="true" />
            <span>42 reservations placed this week</span>
          </div>

          {/* Bottom padding so content doesn't hide behind sticky CTA */}
          <div className="reservation-bottom-spacer" aria-hidden="true" />
        </div>

        <StickyCTA />
      </div>
    </ReservationCtx.Provider>
  );
}
