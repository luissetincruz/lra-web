import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { en } from "@/dictionaries/en";

export default function EnglishHome() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <HomeStructuredData
        locale="en"
        path="/en"
        title="LRA Software — Custom software, automation and AI for businesses"
        description="LRA Software builds custom software, automations, integrations, and AI-powered solutions for businesses."
      />

      <a
        href="#conteudo"
        className="sr-only z-100 rounded-lg bg-brand px-4 py-3 font-semibold text-text focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {en.page.skipToContent}
      </a>

      <SiteHeader content={en.header} locale="en" />

      <main
        id="conteudo"
        className="relative z-10 bg-background shadow-[0_24px_60px_rgb(0_0_0/18%)]"
      >
        <HeroSection content={en.hero} />
        <ServicesSection content={en.services} />
        <ProcessSection content={en.process} />
        <AboutSection content={en.about} />
        <ContactSection content={en.contact} />
      </main>

      <div aria-hidden="true" className="h-(--footer-reveal-height)" />

      <SiteFooter content={en.footer} cookiePreferencesLabel={en.privacy.preferencesButton} />
    </div>
  );
}
