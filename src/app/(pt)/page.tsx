import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ptBR } from "@/dictionaries/pt-BR";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <HomeStructuredData />

      <a
        href="#conteudo"
        className="sr-only z-100 rounded-lg bg-brand px-4 py-3 font-semibold text-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {ptBR.page.skipToContent}
      </a>

      <SiteHeader content={ptBR.header} />

      <main
        id="conteudo"
        className="relative z-10 bg-background shadow-[0_24px_60px_rgb(0_0_0/18%)]"
      >
        <HeroSection content={ptBR.hero} />
        <ServicesSection content={ptBR.services} />
        <ProcessSection content={ptBR.process} />
        <AboutSection content={ptBR.about} />
        <ContactSection content={ptBR.contact} />
      </main>

      <div aria-hidden="true" className="h-(--footer-reveal-height)" />

      <SiteFooter content={ptBR.footer} />
    </div>
  );
}
