import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Kumo Kitchen";
const SITE_URL = "https://kumokitchen.com"; // ✅ replace with your real domain (Vercel domain also OK)
const OG_IMAGE = "/og-image.jpg"; // ✅ create: public/og-image.jpg (1200x630)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kumo Kitchen — Japanese Fine Dining & Omakase Experience",
    template: "%s | Kumo Kitchen",
  },
  description:
    "Kumo Kitchen offers a refined Japanese fine dining experience with curated omakase dinners, seasonal menus, and intimate seating. Reserve your table for a cinematic dining journey.",
  keywords: [
    "Kumo Kitchen",
    "Japanese fine dining",
    "Omakase",
    "Japanese restaurant",
    "Luxury dining",
    "Fine dining reservations",
    "Seasonal menu",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Kumo Kitchen — Japanese Fine Dining & Omakase",
    description:
      "An intimate Japanese fine dining experience. One seating. Seasonal omakase. Reserve your table at Kumo Kitchen.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kumo Kitchen — Japanese Fine Dining",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kumo Kitchen — Japanese Fine Dining",
    description:
      "Seasonal omakase dining in an intimate setting. Reserve your table at Kumo Kitchen.",
    images: [OG_IMAGE],
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Kumo Kitchen",
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    description:
      "Japanese fine dining restaurant offering curated omakase dinners with seasonal menus and intimate seating.",
    servesCuisine: "Japanese",
    priceRange: "₹₹₹",
    acceptsReservations: true,
    // Update these if you want stronger local SEO:
    address: {
      "@type": "PostalAddress",
      addressLocality: "Daman",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body>
        {/* Structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />

        {/* GLOBAL NAVBAR */}
      <header className="navbar">
  <a href="/" className="navbar-logo">Kumo Kitchen</a>

  <a href="/reservations" className="nav-cta">
    Reserve
  </a>
</header>


        {children}
      </body>
    </html>
  );
}
