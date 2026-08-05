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
    <section id="como-trabalhamos" aria-labelledby="processo-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHeading
              titleId="processo-title"
              eyebrow="Como trabalhamos"
              title="Do entendimento do problema à solução em produção."
              description="O processo é organizado para reduzir incertezas, validar decisões cedo e manter o projeto conectado às necessidades reais da operação."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/2.5 p-5"
                >
                  <h3 className="font-bold text-white">{principle.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <ol className="relative space-y-5">
            <div
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-6 hidden w-px bg-linear-to-b from-cyan/60 via-lilac/50 to-mint/40 sm:block"
            />

            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-panel/70 p-6 shadow-card sm:grid sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-cyan/30 bg-ink font-mono text-xs font-black text-cyan">
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
