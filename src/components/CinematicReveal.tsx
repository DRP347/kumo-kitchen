"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CinematicReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={rm ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={rm ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
