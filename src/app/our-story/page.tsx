import Image from "next/image";
import Section from "@/components/Section";
import CinematicReveal from "@/components/CinematicReveal";

export default function OurStoryPage() {
  return (
    <main className="pt-28">
      <Section className="py-10 md:py-14">
        <CinematicReveal>
          <p className="text-xs text-[rgb(var(--muted))]" style={{ letterSpacing: "0.18em" }}>OUR STORY</p>
          <h1 className="mt-4 text-4xl md:text-5xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>
            The Journey from Tokyo.
          </h1>
        </CinematicReveal>
      </Section>

      <Section className="pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <CinematicReveal>
            <div className="overflow-hidden rounded-2xl border hairline">
              <Image
                src="/images/tokyo-alley.jpg"
                alt="Tokyo alley"
                width={1400}
                height={1400}
                className="h-auto w-full object-cover"
              />
            </div>
          </CinematicReveal>

          <CinematicReveal delay={0.08}>
            <div className="rounded-2xl border hairline bg-white/5 p-7 md:p-9">
              <div className="mb-6 h-20 w-1" style={{ background: "rgba(var(--red), 0.75)" }} />
              <p className="text-sm md:text-base text-[rgb(var(--muted))] leading-relaxed">
                Inspired by Tokyo’s quiet streets and late-night counters, Kumo Kitchen brings a calm, crafted dining ritual
                to Daman. We focus on depth—broth, aroma, light, and the pace of the evening.
              </p>
              <p className="mt-4 text-sm md:text-base text-[rgb(var(--muted))] leading-relaxed">
                This is not fast food. It’s an invitation: sit, breathe, and let the bowl speak.
              </p>
            </div>
          </CinematicReveal>
        </div>
      </Section>
    </main>
  );
}
