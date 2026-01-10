"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function DestinationSection() {
  return (
    <section className="destination-section">
      <div className="destination-inner">
        {/* LEFT — INFORMATION */}
        <motion.div
          className="destination-info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="destination-eyebrow">THE DESTINATION</span>

          <h2 className="destination-title">Find Us in the Quiet</h2>

          <div className="destination-block">
            <p className="destination-label">Address</p>
            <p className="destination-text">
              Kumo Kitchen<br />
              House No. 7, Rua de Fort<br />
              Moti Daman, Daman 396220<br />
              Entrance via the North Gate
            </p>
          </div>

          <div className="destination-block">
            <p className="destination-label">Hours</p>
            <p className="destination-text">
              Tuesday — Sunday<br />
              Dinner Only · 19:00 — 23:30<br />
              Closed on Mondays
            </p>
          </div>

          <div className="destination-block">
            <p className="destination-label">Reservations</p>
            <p className="destination-text">
              reservations@kumokitchen.in<br />
              +91 9XXXXXXXXX
            </p>
          </div>
        </motion.div>

        {/* RIGHT — MAP */}
        <div className="destination-map">
          <iframe
            title="Kumo Kitchen Location"
            src="https://www.google.com/maps?q=Moti+Daman+Fort&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-vignette" />
        </div>
      </div>

      {/* CTA */}
    <center> <a href="/reservations" className="btn-primary"> 
  Reserve a table
</a> </center>

    </section>
  );
}


