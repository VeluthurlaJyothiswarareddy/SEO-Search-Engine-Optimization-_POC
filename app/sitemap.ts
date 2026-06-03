import type { MetadataRoute } from "next";

const siteUrl = "https://seosearchengineoptimizationpoc.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog/java-streams`,
      lastModified: new Date(),
    },
  ];
}
