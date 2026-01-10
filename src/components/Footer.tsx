export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/60">
          <div className="space-y-1">
            <p className="font-semibold text-white/80">Hours</p>
            <p>Mon–Fri: 6:00 PM – 11:30 PM</p>
            <p>Sat–Sun: 5:00 PM – 12:30 AM</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-white/80">Address</p>
            <p>Kumo Kitchen</p>
            <p>Daman, India</p>
          </div>

          <div className="space-y-1 sm:text-right">
            <p className="font-semibold text-white/80">Connect</p>
            <p>Email: hello@kumokitchen.in</p>
            <p>Instagram: @kumokitchen</p>
          </div>
        </div>
      </div>

      {/* Wood grain footer bar */}
      <div
        className="h-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://i.ibb.co/5K6hY1F/dark-wood-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </footer>
  );
}
