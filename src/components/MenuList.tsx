import CinematicReveal from "./CinematicReveal";

const items = [
  { name: "Tonkotsu Ramen", desc: "Rich broth, soft egg, chashu.", price: "450" },
  { name: "Shoyu Ramen", desc: "Clean soy depth, balanced aroma.", price: "450" },
  { name: "Miso Ramen", desc: "Warm umami, roasted notes.", price: "450" },
];

export default function MenuList() {
  return (
    <div className="grid gap-6">
      {items.map((item, i) => (
        <CinematicReveal key={item.name} delay={i * 0.05}>
          <div className="rounded-2xl border hairline bg-white/5 p-6">
            <div className="flex justify-between gap-6">
              <div>
                <h3 className="text-xl font-serif">{item.name}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  {item.desc}
                </p>
              </div>
              <span className="text-sm text-[rgb(var(--muted))]">
                {item.price}
              </span>
            </div>
          </div>
        </CinematicReveal>
      ))}
    </div>
  );
}
