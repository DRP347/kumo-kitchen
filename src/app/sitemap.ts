import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kumokitchen.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://kumokitchen.com/menu",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://kumokitchen.com/reservations",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
