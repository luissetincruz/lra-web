import type { MetadataRoute } from "next";

const siteUrl = "https://www.lrasoftware.com";

const languages = {
  "pt-BR": `${siteUrl}/`,
  en: `${siteUrl}/en`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      alternates: {
        languages,
      },
    },
    {
      url: `${siteUrl}/en`,
      alternates: {
        languages,
      },
    },
  ];
}
