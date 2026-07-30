import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 bg-ink" />

      <div aria-hidden="true" className="hero-grid pointer-events-none fixed inset-0 -z-10" />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-64 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-lilac/10 blur-3xl"
      />

      <section id="inicio" className="py-32 sm:py-40">
        <Container>
          <p className="text-sm font-bold tracking-[0.24em] text-mint uppercase">LRA Software</p>

          <h1 className="mt-6 max-w-4xl text-5xl leading-none font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Sistemas, automações e IA para empresas.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Transformamos processos manuais, integrações frágeis e ideias de produto em soluções
            digitais prontas para operar.
          </p>
        </Container>
      </section>
    </main>
  );
}
