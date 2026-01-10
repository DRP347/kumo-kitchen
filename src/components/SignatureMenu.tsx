'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const signatureMenu = [
  {
    title: 'Tonkotsu',
    price: '₹620',
    description:
      '24-hour pork broth, hand-pulled noodles, chashu, ajitama.',
    image: '/images/menu/tonkotsu.jpg',
  },
  {
    title: 'Red Miso',
    price: '₹680',
    description:
      'Fermented miso, chili oil, minced pork, spring onion.',
    image: '/images/menu/red-miso.jpg',
  },
  {
    title: 'Shoyu Reserve',
    price: '₹980',
    description:
      'Clear soy broth, A5 Wagyu, black truffle, onsen egg.',
    image: '/images/menu/shoyu.jpg',
  },
];

export default function SignatureMenu() {
  return (
    <section className="signature-section">
      {/* Header */}
      <div className="signature-header">
        <span className="signature-eyebrow">SIGNATURES</span>
        <h2 className="signature-title">Curated Bowls</h2>
        <p className="signature-subtitle">
          Each bowl is composed with restraint — an expression of depth,
          balance, and intention.
        </p>
      </div>

      {/* Gallery */}
      <div className="signature-gallery">
        {signatureMenu.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.12,
            }}
            className="signature-item"
          >
            {/* Image */}
            <div className="signature-image-wrap">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="signature-image"
                priority={index === 0}
              />
            </div>

            {/* Text */}
            <div className="signature-text">
              <h3 className="signature-name">
                {item.title}
                <span className="signature-price">
                  {item.price}
                </span>
              </h3>

              <p className="signature-desc">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
