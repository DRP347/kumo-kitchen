"use client";

import { motion } from "framer-motion";

export default function AmbienceSection() {
  return (
    <section className="ambience-section">
      {/* Image Wrapper */}
      <div className="ambience-image-wrapper">
        <img
          src="/images/ambience.webp" // <-- replace with your actual path
          alt="Kumo Kitchen private dining ambience"
          className="ambience-image"
        />

        {/* Vignette Overlay */}
        <div className="ambience-vignette" />
      </div>

      {/* Text Content */}
      <motion.div
        className="ambience-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="ambience-eyebrow">THE AMBIENCE</span>
        <h2 className="ambience-title">An Evening in Shadow</h2>
        <p className="ambience-description">
          Low light. Warm wood. Quiet corners.
          <br />
          A space designed for unhurried moments —
          where the outside world dissolves, and the bowl
          becomes the center of attention.
        </p>
      </motion.div>
    </section>
  );
}
