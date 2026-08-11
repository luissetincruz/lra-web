import type { Locale } from "@/i18n/types";

const siteUrl = "https://www.lrasoftware.com";

type HomeStructuredDataProps = Readonly<{
  locale: Locale;
  title: string;
  description: string;
  path: "/" | "/en";
}>;

export function HomeStructuredData({ locale, title, description, path }: HomeStructuredDataProps) {
  const pageUrl = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "LRA Software",
        url: `${siteUrl}/`,
        logo: `${siteUrl}/lra-logo.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "LRA Software",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: ["pt-BR", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
