"use client";

import Link from "next/link";
import Image from "next/image";
import MenuCard from "./MenuCard";

const SIGNATURES = [
  {
    id: "tonkotsu",
    title: "Tonkotsu No.01",
    subtitle: "Rich Tonkotsu",
    desc: "24-hour pork broth, chashu, ajitama, scallion, nori.",
    price: "₹620",
    image: "/images/menu-1.jpg",
    badge: "Classic",
  },
  {
    id: "miso",
    title: "Red Miso Heat",
    subtitle: "Spicy Red Miso",
    desc: "Red miso broth, chili oil, minced meat, sesame, negi.",
    price: "₹680",
    image: "/images/menu-2.jpg",
    badge: "Spicy",
  },
  {
    id: "shoyu",
    title: "Shoyu Reserve",
    subtitle: "Premium Shoyu",
    desc: "Clear shoyu broth, truffle oil, wagyu optional, bamboo shoots.",
    price: "₹890",
    image: "/images/menu-3.jpg",
    badge: "Premium",
  },
];

const SMALL_PLATES = [
  { name: "Goma Cucumber", desc: "Sesame dressing, crisp pickles.", price: "₹260" },
  { name: "Karaage", desc: "Double-fried chicken, citrus salt.", price: "₹420" },
  { name: "Matcha Custard", desc: "Soft set, caramelized top.", price: "₹310" },
];

export default function MenuPage() {
  return (
    <main className="menu-page">
      {/* HERO STRIP */}
      <section className="menu-hero">
        <div className="menu-hero-inner">
          <div className="menu-hero-copy">
            <span className="menu-eyebrow">MENU</span>
            <h1 className="menu-title">Curated Bowls</h1>
            <p className="menu-subtitle">
              Not a list. A collection. Each bowl is composed like a still-life —
              warmth, depth, and restraint.
            </p>

            <div className="menu-hero-actions">
              <Link href="/reservations" className="menu-cta">
                Reserve a Table
              </Link>
              <a href="#signatures" className="menu-link">
                View Signatures →
              </a>
            </div>
          </div>

          <div className="menu-hero-visual" aria-hidden="true">
            {/* Replace with your own image later */}
            <div className="menu-hero-frame">
              <Image
                src="/images/menu-hero.jpg"
                alt=""
                fill
                priority
                className="menu-hero-img"
              />
              <div className="menu-hero-vignette" />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section className="menu-section" id="signatures">
        <div className="menu-section-head">
          <span className="menu-eyebrow">SIGNATURES</span>
          <h2 className="menu-h2">The Gallery</h2>
          <p className="menu-muted">
            Three bowls. Three moods. Crafted for slow evenings.
          </p>
        </div>

        <div className="menu-grid">
          {SIGNATURES.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* SMALL PLATES */}
      <section className="menu-section">
        <div className="menu-section-head">
          <span className="menu-eyebrow">SMALL PLATES</span>
          <h2 className="menu-h2">Quiet Additions</h2>
          <p className="menu-muted">
            Minimal, sharp, and designed to pair with broth.
          </p>
        </div>

        <div className="menu-list">
          {SMALL_PLATES.map((i) => (
            <div className="menu-row" key={i.name}>
              <div className="menu-row-left">
                <div className="menu-row-title">{i.name}</div>
                <div className="menu-row-desc">{i.desc}</div>
              </div>
              <div className="menu-row-price">{i.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className="menu-closer">
        <div className="menu-closer-inner">
          <div className="menu-closer-card">
            <span className="menu-eyebrow">DESTINATION</span>
            <h3 className="menu-h3">Dinner only. Limited seats.</h3>
            <p className="menu-muted">
              The room is quiet by design. Reserve to enter.
            </p>
            <Link href="/reservations" className="menu-cta menu-cta-wide">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
