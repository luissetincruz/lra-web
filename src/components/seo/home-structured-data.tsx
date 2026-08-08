const siteUrl = "https://www.lrasoftware.com";

const description =
  "A LRA Software desenvolve sistemas sob medida, automações, integrações e soluções com inteligência artificial para empresas.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "LRA Software",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/lra-logo.svg`,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "LRA Software",
      description,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
  ],
};

export function HomeStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
