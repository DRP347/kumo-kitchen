import Image from "next/image";
import Section from "@/components/Section";
import CinematicReveal from "@/components/CinematicReveal";

const imgs = ["/images/interior-1.jpg", "/images/interior-1.jpg", "/images/interior-1.jpg", "/images/interior-1.jpg"];

export default function GalleryPage() {
  return (
    <main className="pt-28">
      <Section className="py-10 md:py-14">
        <CinematicReveal>
          <p className="text-xs text-[rgb(var(--muted))]" style={{ letterSpacing: "0.18em" }}>GALLERY</p>
          <h1 className="mt-4 text-4xl md:text-5xl" style={{ fontFamily: "ui-serif, Georgia, serif" }}>
            Moments in Warm Light.
          </h1>
        </CinematicReveal>
      </Section>

      <Section className="pb-16 md:pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {imgs.map((src, i) => (
            <CinematicReveal key={i} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border hairline">
                <Image src={src} alt="Kumo gallery" width={1600} height={1100} className="h-auto w-full object-cover" />
              </div>
            </CinematicReveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
