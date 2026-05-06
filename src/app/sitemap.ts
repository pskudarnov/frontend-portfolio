import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://frontend-portfolio.vercel.app";

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
