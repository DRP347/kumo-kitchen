"use client";

import { motion } from "framer-motion";

export default function CraftSection() {
  return (
    <section className="craft">
      <div className="craft-inner">
        {/* Image */}
        <motion.div
          className="craft-image"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/craft.jpg"
            alt="Hand-pulled noodles and steam"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="craft-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="craft-eyebrow">OUR PHILOSOPHY</span>
          <h2>Crafted, Not Cooked</h2>
          <p>
            Our noodles are hand-pulled daily using imported wheat.
            The broth simmers for 24 hours to achieve depth, clarity,
            and balance — a ritual of patience, not speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
