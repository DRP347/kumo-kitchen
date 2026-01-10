export const metadata = {
  title: "Contact • Kumo Kitchen",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">
          Contact
        </p>
        <h1 className="text-3xl font-semibold">Find us & place orders</h1>
        <p className="text-sm text-white/70 max-w-xl">
          Reach out for orders, bulk catering, collaborations, or feedback.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Order & enquiries</h2>
          <p className="text-white/70">
            WhatsApp us anytime for quick orders and queries.
          </p>

          <a
            href="https://wa.me/919999999999?text=Hi%20Kumo%20Kitchen%2C%20I%20want%20to%20order."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            WhatsApp Kumo Kitchen
          </a>

          <div className="space-y-1 text-white/70 text-xs mt-3">
            <p>Email: hello@kumokitchen.in</p>
            <p>Instagram: @kumokitchen</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Location & hours</h2>
          <p className="text-white/70">
            Kumo Kitchen (Cloud Kitchen)
            <br />
            {/* Replace with your real city/area */}
            Daman, India
          </p>

          <div className="text-white/70 text-xs">
            <p className="font-semibold mb-1">Timings</p>
            <p>Monday–Friday: 6:00 PM – 11:30 PM</p>
            <p>Saturday–Sunday: 5:00 PM – 12:30 AM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
