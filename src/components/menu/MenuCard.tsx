"use client";

import Image from "next/image";

type Item = {
  title: string;
  subtitle: string;
  desc: string;
  price: string;
  image: string;
  badge: string;
};

export default function MenuCard({ item }: { item: Item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-media">
        <div className="menu-card-badge">{item.badge}</div>

        <div className="menu-card-imgWrap">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="menu-card-img"
            sizes="(max-width: 900px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </div>

      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3 className="menu-card-title">{item.title}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>

        <div className="menu-card-sub">{item.subtitle}</div>
        <p className="menu-card-desc">{item.desc}</p>
      </div>
    </article>
  );
}
