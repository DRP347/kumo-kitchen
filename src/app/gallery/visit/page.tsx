import Image from "next/image";
import Section from "@/components/Section";
import CinematicReveal from "@/components/CinematicReveal";

export default function VisitPage() {
  return (
    <main className="pt-28">
      <Section className="py-10 md:py-14">
        <CinematicReveal>
          <p className="text-xs text-[rgb(var(--muted))]" style={{ letterSpacing: "0.18em" }}>VISIT</p>
          <h1 className="mt-4 text-4xl md:text-5xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>
            Arrive. Settle. Reserve.
          </h1>
        </CinematicReveal>
      </Section>

      <Section className="pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <CinematicReveal>
            <div className="overflow-hidden rounded-2xl border hairline">
              <Image src="/images/exterior.jpg" alt="Kumo exterior" width={1400} height={1200} className="h-auto w-full object-cover" />
            </div>
          </CinematicReveal>

          <CinematicReveal delay={0.08}>
            <div className="rounded-2xl border hairline bg-white/5 p-7 md:p-9">
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>Visit Us</h3>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">Daman, India</p>
                  <div className="mt-4 rounded-xl border hairline overflow-hidden bg-black/30">
                    <div className="h-44 w-full flex items-center justify-center text-sm text-[rgb(var(--muted))]">
                      Map Embed Placeholder
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>Reservations</h3>
                  <form className="mt-4 grid gap-3">
                    <input className="h-11 rounded-xl border hairline bg-black/30 px-4 text-sm outline-none" placeholder="Name" />
                    <input className="h-11 rounded-xl border hairline bg-black/30 px-4 text-sm outline-none" placeholder="Email" />
                    <input className="h-11 rounded-xl border hairline bg-black/30 px-4 text-sm outline-none" placeholder="Phone" />
                    <textarea className="min-h-[96px] rounded-xl border hairline bg-black/30 p-4 text-sm outline-none" placeholder="Message" />
                    <button
                      type="button"
                      className="mt-2 h-11 rounded-xl border hairline text-sm"
                      style={{ background: "rgba(var(--red), 0.85)", borderColor: "rgba(255,255,255,0.10)" }}
                    >
                      Book Now
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>Opening Hours</h3>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">Lunch: 11:00 AM – 2:00 PM</p>
                  <p className="text-sm text-[rgb(var(--muted))]">Dinner: 6:00 PM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </CinematicReveal>
        </div>
      </Section>
    </main>
  );
}
