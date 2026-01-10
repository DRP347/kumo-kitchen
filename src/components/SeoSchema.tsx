export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Kumo Kitchen",
          image: "https://kumokitchen.com/og-image.jpg",
          description:
            "Japanese fine dining restaurant offering curated omakase dinners with seasonal menus.",
          servesCuisine: "Japanese",
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Daman",
            addressCountry: "IN",
          },
          acceptsReservations: true,
          url: "https://kumokitchen.com",
        }),
      }}
    />
  );
}
