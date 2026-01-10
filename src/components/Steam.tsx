"use client";

import { motion } from "framer-motion";

export default function Steam({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-[32%] h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(255,255,255,0.12)" }}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [-20, -140],
            scale: [0.9, 1.2, 1.4],
          }}
          transition={{
            duration: 10 + i * 1.5,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.5 + i * 2,
          }}
        />
      ))}
    </div>
  );
}
