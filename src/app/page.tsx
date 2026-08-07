import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <a
        href="#conteudo"
        className="sr-only z-100 rounded-lg bg-brand px-4 py-3 font-semibold text-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      <main
        id="conteudo"
        className="relative z-10 bg-background shadow-[0_24px_60px_rgb(0_0_0/18%)]"
      >
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>

      <div aria-hidden="true" className="h-(--footer-reveal-height)" />

      <SiteFooter />
    </div>
  );
}
