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
      className="border-y border-white/10 bg-white/2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              titleId="sobre-title"
              eyebrow="Sobre a LRA"
              title="Desenvolvimento, integração e visão de produto no mesmo projeto."
              description="A LRA Software desenvolve soluções digitais para empresas que precisam organizar processos, conectar sistemas e transformar necessidades operacionais em software funcional."
            />

            <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A atuação combina desenvolvimento front-end e back-end, bancos de dados, APIs,
              automações, infraestrutura cloud e inteligência artificial. Isso permite acompanhar o
              projeto desde a definição do problema até sua entrada em produção.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 font-mono text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/10 bg-panel/70 p-6 shadow-card sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-lilac/20 bg-lilac/10 font-mono text-xs font-black text-lilac">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-white">{capability.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
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
