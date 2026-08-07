import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  {
    title: "Visão de ponta a ponta",
    description:
      "Análise do problema, experiência do usuário, desenvolvimento, integrações, infraestrutura e publicação.",
  },
  {
    title: "Experiência com sistemas reais",
    description:
      "Projetos construídos e evoluídos considerando operação, usuários, regras de negócio e manutenção.",
  },
  {
    title: "Tecnologia com propósito",
    description:
      "As decisões técnicas partem do problema que precisa ser resolvido, não apenas das ferramentas disponíveis.",
  },
];

const technologies = [
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "n8n",
  "OpenAI",
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="border-b border-light-border bg-background py-20 sm:py-28"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              titleId="sobre-title"
              eyebrow="Sobre a LRA"
              title="Desenvolvimento, integração e visão de produto no mesmo projeto."
              description="A LRA Software desenvolve soluções digitais para empresas que precisam organizar processos, conectar sistemas e transformar necessidades operacionais em software funcional."
              tone="light"
            />

            <p className="mt-7 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              A atuação combina desenvolvimento front-end e back-end, bancos de dados, APIs,
              automações, infraestrutura cloud e inteligência artificial. Isso permite acompanhar o
              projeto desde a definição do problema até sua entrada em produção.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-2"
              aria-label="Tecnologias utilizadas pela LRA"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-light-border bg-surface px-3.5 py-2 font-mono text-xs font-medium text-text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-light-border bg-surface shadow-card-light">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="group border-b border-light-border p-6 last:border-b-0 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-brand/20 bg-brand-soft font-mono text-xs font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-text">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
