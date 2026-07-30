import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-ink">
      <a
        href="#conteudo"
        className="sr-only z-[100] rounded-lg bg-white px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-ink" />

      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-lilac/10 blur-3xl"
      />

      <SiteHeader />

      <main id="conteudo">
        <HeroSection />
      </main>
    </div>
  );
}
