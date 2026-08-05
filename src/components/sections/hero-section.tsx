import Link from "next/link";

import { Container } from "@/components/ui/container";

const capabilities = ["Sistemas sob medida", "Automações e integrações", "IA aplicada à operação"];

const solutionFlow = [
  {
    number: "01",
    title: "Entender a operação",
    description:
      "Mapear o processo, as regras de negócio, os sistemas envolvidos e os pontos de retrabalho.",
  },
  {
    number: "02",
    title: "Construir e integrar",
    description:
      "Desenvolver a aplicação, API, automação ou integração necessária para resolver o problema.",
  },
  {
    number: "03",
    title: "Colocar em produção",
    description:
      "Implantar, acompanhar o uso real e evoluir a solução conforme a operação amadurece.",
  },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-4 py-2 text-xs font-bold tracking-[0.16em] text-mint uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" />
              Software aplicado a operações reais
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl leading-[0.96] font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Tecnologia para reduzir trabalho manual e colocar soluções em produção.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A LRA desenvolve sistemas, automações, integrações e soluções com inteligência
              artificial para empresas que precisam organizar processos e operar com mais
              eficiência.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-cyan px-6 text-sm font-black text-ink transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink focus-visible:outline-none"
              >
                Conversar sobre um projeto
              </Link>

              <Link
                href="#servicos"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink focus-visible:outline-none"
              >
                Conhecer os serviços
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Principais serviços">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-2 text-sm text-slate-400">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lilac" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-cyan/10 blur-3xl"
            />

            <div className="rounded-[2rem] border border-white/10 bg-panel/90 p-5 shadow-card backdrop-blur sm:p-7">
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan uppercase">
                    Fluxo de desenvolvimento
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">Da necessidade à operação</h2>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-3 py-1.5 text-xs font-semibold text-mint">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" />
                  Em produção
                </span>
              </div>

              <ol className="mt-6 space-y-3">
                {solutionFlow.map((step) => (
                  <li
                    key={step.number}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 font-mono text-xs font-bold text-cyan">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-bold text-white">{step.title}</h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {["APIs", "Webhooks", "Cloud", "Automação", "IA"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
