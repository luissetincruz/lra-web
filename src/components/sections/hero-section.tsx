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

const technologies = ["APIs", "Webhooks", "Cloud", "Automação", "IA"];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-light-border bg-background py-20 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="hero-grid-light pointer-events-none absolute inset-0" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -left-36 h-96 w-96 rounded-full bg-brand/4.5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-48 -right-40 h-120 w-120 rounded-full bg-brand/2.5 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              Software aplicado a operações reais
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl leading-[0.96] font-black tracking-[-0.055em] text-text sm:text-6xl lg:text-7xl">
              Tecnologia para reduzir trabalho manual e colocar soluções em produção.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
              A LRA desenvolve sistemas, automações, integrações e soluções com inteligência
              artificial para empresas que precisam organizar processos e operar com mais
              eficiência.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold tracking-[-0.01em] text-text transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover hover:shadow-[0_8px_24px_rgb(255_87_51/18%)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                Conversar sobre um projeto
              </Link>

              <Link
                href="#servicos"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-light-border-strong bg-background px-6 text-sm font-medium text-text transition-[background-color,border-color] duration-200 hover:border-text-muted hover:bg-surface focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                Conhecer os serviços
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Principais serviços">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-2 text-sm font-medium text-text-muted"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />

                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-brand/[0.035] blur-3xl"
            />

            <div className="rounded-4xl border border-light-border bg-surface p-5 shadow-card-light sm:p-7">
              <div className="flex items-start justify-between gap-5 border-b border-light-border pb-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-brand uppercase">
                    Fluxo de desenvolvimento
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-text">Da necessidade à operação</h2>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-medium text-brand">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
                  Em produção
                </span>
              </div>

              <ol className="mt-6 space-y-3">
                {solutionFlow.map((step) => (
                  <li
                    key={step.number}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-light-border bg-background p-4 sm:p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/20 bg-brand-soft font-mono text-xs font-bold text-brand">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-semibold text-text">{step.title}</h3>

                      <p className="mt-1.5 text-sm leading-6 text-text-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-light-border pt-6">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-light-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-text-muted"
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
