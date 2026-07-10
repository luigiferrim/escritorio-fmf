import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/areas-de-atuacao", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/advogados", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${SITE_URL}/areas-de-atuacao/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...areaRoutes];
}
