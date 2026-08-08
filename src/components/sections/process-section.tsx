import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico e definição",
    description:
      "Começamos entendendo o processo atual, os usuários envolvidos, as regras de negócio e os sistemas que precisam conversar entre si.",
    deliverables: [
      "Levantamento do problema",
      "Definição do escopo inicial",
      "Priorização das entregas",
    ],
  },
  {
    number: "02",
    title: "Desenvolvimento e validação",
    description:
      "A solução é construída em etapas, permitindo validar decisões técnicas e funcionais antes de avançar para partes mais complexas.",
    deliverables: [
      "Implementação incremental",
      "Validação técnica e funcional",
      "Integrações e testes",
    ],
  },
  {
    number: "03",
    title: "Implantação e evolução",
    description:
      "Depois da entrada em produção, acompanhamos o comportamento real da solução e identificamos ajustes e oportunidades de evolução.",
    deliverables: ["Deploy e configuração", "Acompanhamento inicial", "Manutenção e evolução"],
  },
];

const principles = [
  {
    title: "Comunicação direta",
    description: "Decisões, limitações e riscos são apresentados de forma clara durante o projeto.",
  },
  {
    title: "Entrega incremental",
    description: "Projetos são divididos em etapas úteis, evitando longos períodos sem validação.",
  },
  {
    title: "Visão de operação",
    description:
      "A tecnologia é pensada considerando pessoas, processos, infraestrutura e manutenção.",
  },
  {
    title: "Simplicidade técnica",
    description:
      "A solução deve ser tão simples quanto possível, sem comprometer segurança e evolução.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="como-trabalhamos"
      aria-labelledby="processo-title"
      className="relative isolate overflow-hidden border-b border-white/10 bg-ink py-20 sm:py-28"
    >
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover saturate-75 motion-reduce:hidden"
      >
        <source
          src="https://video-previews.elements.envatousercontent.com/8be1a6bd-4ad7-4823-8367-ef799610cf12/watermarked_preview/watermarked_preview.mp4"
          type="video/mp4"
        />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(9,9,9,0.88)_0%,rgba(9,9,9,0.85)_40%,rgba(9,9,9,0.80)_100%)]"
      />

      <Container className="relative z-20">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHeading
              titleId="processo-title"
              eyebrow="Como trabalhamos"
              title="Do entendimento do problema à solução em produção."
              description="O processo é organizado para reduzir incertezas, validar decisões cedo e manter o projeto conectado às necessidades reais da operação."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />

                    <div>
                      <h3 className="font-semibold text-white">{principle.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ol className="relative space-y-5">
            <div
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-6 hidden w-px bg-linear-to-b from-brand/60 via-brand/30 to-transparent sm:block"
            />

            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-panel/70 p-6 shadow-card transition-[border-color,background-color] duration-200 hover:border-brand/25 hover:bg-panel sm:grid sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 font-mono text-xs font-bold text-brand">
                  {step.number}
                </span>

                <div className="mt-5 sm:mt-0">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {step.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
