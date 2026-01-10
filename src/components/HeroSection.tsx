"use client";

import Link from "next/link";
import Hero3D from "@/components/Hero3D";

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Kumo Kitchen hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">JAPANESE FINE DINING</span>

          <h1 className="hero-title">
            The Art of <br /> the Bowl
          </h1>

          <p className="hero-description">
            A quiet celebration of Japanese fine dining in Daman — crafted through
            ritual, warmth, and precision. Every bowl is built with patience,
            intention, and respect for time.
          </p>

          <div className="hero-actions">
            {/* Use Link instead of button so it behaves like navigation everywhere */}
            <Link href="/reservations" className="btn-primary" style={{ textDecoration: "none" }}>
              Reserve a Table
            </Link>

            <Link href="/menu" className="btn-link" style={{ textDecoration: "none" }}>
              Explore Menu →
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
