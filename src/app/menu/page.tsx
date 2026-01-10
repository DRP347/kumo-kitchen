import type { Metadata } from "next";
import MenuPage from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Kumo Kitchen’s curated bowls, small plates, and seasonal Japanese offerings crafted with balance and intention.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu | Kumo Kitchen",
    description:
      "Curated bowls, small plates, and seasonal Japanese offerings crafted with balance and intention.",
    url: "/menu",
  },
};

export default function MenuRoute() {
  return <MenuPage />;
}
