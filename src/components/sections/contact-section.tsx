import Link from "next/link";

import { Container } from "@/components/ui/container";

const contactTopics = [
  "Sistemas internos",
  "Automações",
  "Integrações",
  "Aplicações com IA",
  "Modernização",
];

export function ContactSection() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-cyan/20 bg-panel p-7 shadow-glow sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-cyan/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-lilac/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-mint uppercase">
                Vamos conversar
              </p>

              <h2
                id="contato-title"
                className="mt-4 max-w-3xl text-3xl leading-tight font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
              >
                Tem um processo que poderia funcionar melhor com software?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Conte brevemente o cenário atual, o problema que deseja resolver e quais sistemas ou
                pessoas participam do processo.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tipos de projeto">
                {contactTopics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-64">
              <Link
                href="mailto:luiscruzdesign@gmail.com?subject=Projeto%20para%20a%20LRA%20Software"
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-cyan px-6 text-center text-sm font-black text-ink transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-panel focus-visible:outline-none"
              >
                Enviar uma mensagem
              </Link>

              <p className="text-center text-xs leading-5 text-slate-500">
                O contato será aberto no seu aplicativo de e-mail.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
