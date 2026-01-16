// src/components/reservations/ReservationLayout.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Minus, Plus, X, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const DATES = ["14 Oct", "15 Oct", "16 Oct", "17 Oct"] as const;
const TIMES = ["19:00", "19:30", "20:00"] as const;

export default function ReservationLayout() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] =
    useState<(typeof DATES)[number]>("14 Oct");
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] =
    useState<(typeof TIMES)[number]>("19:30");

  const [isOpen, setIsOpen] = useState(false);
  const [refCode, setRefCode] = useState<string>("");

  const helperText = useMemo(() => {
    if (guests <= 1) return "Ideal for solo dining";
    if (guests <= 4) return "Optimal experience for 2–4 guests";
    return "Large party — we may contact you";
  }, [guests]);

  const ctaLabel = useMemo(() => {
    return `Confirm Reservation — ${selectedTime}`;
  }, [selectedTime]);

  function decGuests() {
    setGuests((g) => Math.max(1, g - 1));
  }

  function incGuests() {
    setGuests((g) => Math.min(10, g + 1));
  }

  function makeRef() {
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `KM-${selectedDate.replace(" ", "")}-${selectedTime.replace(
      ":",
      ""
    )}-${rand}`;
  }

  function onConfirm() {
    const code = makeRef();
    setRefCode(code);
    setIsOpen(true);

    // Later: replace with API call
    console.log("Reservation request:", {
      selectedDate,
      guests,
      selectedTime,
      code,
    });
  }

  function closeModal() {
    setIsOpen(false);
  }

  function newReservation() {
    setIsOpen(false);
    setSelectedDate("14 Oct");
    setGuests(2);
    setSelectedTime("19:30");
  }

  // Auto-close modal after 2.5s, then redirect home
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
      router.push("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [isOpen, router]);

  return (
    <>
      <div className="min-h-[100svh] bg-[#050505] text-stone-200 flex font-sans">
        {/* LEFT PANEL (Image) */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/images/reservations-mood.webp"
            alt="Kumo Kitchen interior"
            fill
            priority
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/80" />
          <div className="absolute left-10 bottom-8 text-xs text-white/70 tracking-wide">
            Dinner is served only once each evening.
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-16 flex items-center">
          <div className="w-full max-w-2xl mx-auto">
            {/* HEADER */}
            <div className="mb-14">
              <div className="text-amber-600 text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                Reservations
              </div>

              <h1 className="text-white font-['Playfair_Display'] leading-[0.98] tracking-[-0.02em] text-5xl sm:text-6xl">
                Secure Your <br />
                Moment.
              </h1>
            </div>

            {/* DATE SELECTOR */}
            <div className="mb-12">
              <span className="text-xs text-stone-500 tracking-[0.22em] uppercase block mb-6">
                Select Date
              </span>

              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
                {DATES.map((date) => {
                  const active = date === selectedDate;
                  return (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={[
                        "whitespace-nowrap px-8 py-3 rounded-full text-sm border transition-all duration-300",
                        active
                          ? "bg-white text-black border-white font-medium"
                          : "bg-transparent text-stone-400 border-stone-800 hover:border-amber-500/60 hover:text-white",
                      ].join(" ")}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GUESTS + TIME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 border-t border-stone-900 pt-10">
              {/* Guests */}
              <div>
                <span className="text-xs text-stone-500 tracking-[0.22em] uppercase block mb-4">
                  Guests
                </span>

                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={decGuests}
                    className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500/50 hover:text-white transition-colors"
                    aria-label="Decrease guests"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-4xl text-white font-['Playfair_Display'] tabular-nums">
                    {guests}
                  </span>

                  <button
                    type="button"
                    onClick={incGuests}
                    className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500/50 hover:text-white transition-colors"
                    aria-label="Increase guests"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="mt-4 text-sm text-stone-400">{helperText}</div>
              </div>

              {/* Time */}
              <div>
                <span className="text-xs text-stone-500 tracking-[0.22em] uppercase block mb-4">
                  Time
                </span>

                <div className="flex flex-wrap gap-3">
                  {TIMES.map((time) => {
                    const active = time === selectedTime;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={[
                          "px-5 py-2 rounded-full text-sm border transition-all",
                          active
                            ? "border-amber-500/70 text-amber-400 bg-amber-500/10"
                            : "border-stone-800/60 text-stone-500 hover:text-stone-300 hover:border-stone-700",
                        ].join(" ")}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 text-sm text-stone-400">
                  Next available:{" "}
                  <span className="text-white/85">{selectedTime}</span>
                  <span className="text-stone-500"> · arrive 10 mins early</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onConfirm}
              className="group w-full py-5 rounded-full text-sm tracking-[0.22em] uppercase transition-all flex items-center justify-center gap-4
                         bg-stone-950/40 border border-amber-500/30 text-white
                         hover:border-amber-400/60 hover:bg-stone-950/60"
            >
              {ctaLabel}
              <ArrowRight
                size={16}
                className="text-amber-500 group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Footer note */}
            <p className="text-center text-stone-600 text-xs mt-6">
              {selectedDate} · {guests} guest{guests > 1 ? "s" : ""} ·{" "}
              {selectedTime}
            </p>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation confirmed"
        >
          {/* Backdrop */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              router.push("/");
            }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
          />

          {/* Card */}
          <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_40px_140px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(60%_60%_at_30%_10%,rgba(199,164,90,0.18),transparent_60%)]" />

            <div className="relative p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-amber-500/35 bg-amber-500/10 grid place-items-center">
                    <Check className="text-amber-400" size={18} />
                  </div>
                  <div>
                    <div className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
                      Thank you
                    </div>
                    <h2 className="mt-1 text-white font-['Playfair_Display'] text-3xl leading-[1.05]">
                      Reservation Request Received
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/");
                  }}
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 grid place-items-center transition"
                  aria-label="Close dialog"
                >
                  <X size={16} className="text-white/80" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-stone-300/90">
                We’ve received your request for{" "}
                <span className="text-white/90">{selectedDate}</span>,{" "}
                <span className="text-white/90">
                  {guests} guest{guests > 1 ? "s" : ""}
                </span>{" "}
                at <span className="text-white/90">{selectedTime}</span>. A
                confirmation message will be sent shortly.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-stone-400 tracking-[0.22em] uppercase">
                  Reference
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="font-mono text-sm text-white/90">{refCode}</div>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(refCode);
                      } catch {}
                    }}
                    className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs tracking-[0.18em] uppercase text-amber-300 hover:border-amber-400/60 transition"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/");
                  }}
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs tracking-[0.22em] uppercase text-white/90 hover:bg-white/10 transition"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={newReservation}
                  className="w-full rounded-full border border-amber-500/30 bg-transparent px-5 py-3 text-xs tracking-[0.22em] uppercase text-amber-300 hover:border-amber-400/60 hover:bg-amber-500/10 transition"
                >
                  Make another booking
                </button>
              </div>

              <div className="mt-4 text-center text-xs text-stone-500">
                Arrive 10 minutes early · One seating per evening
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
