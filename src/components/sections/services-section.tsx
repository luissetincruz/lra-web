import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    code: "SYS",
    title: "Sistemas sob medida",
    description:
      "Aplicações internas, plataformas web e produtos digitais construídos de acordo com a operação e as regras de negócio da empresa.",
    capabilities: ["Aplicações web", "Painéis administrativos", "Portais e plataformas"],
  },
  {
    code: "AUT",
    title: "Automações e integrações",
    description:
      "Conexão entre sistemas, eliminação de tarefas repetitivas e criação de fluxos automáticos para reduzir retrabalho operacional.",
    capabilities: ["n8n e webhooks", "Integrações de APIs", "Fluxos automatizados"],
  },
  {
    code: "IA",
    title: "Inteligência artificial aplicada",
    description:
      "Uso de modelos de linguagem e agentes para apoiar atendimento, análise de dados, revisão de conteúdo e processos internos.",
    capabilities: ["OpenAI API", "Chatbots", "Agentes e assistentes"],
  },
  {
    code: "API",
    title: "APIs e back-end",
    description:
      "Desenvolvimento de serviços, integrações e estruturas de back-end para aplicações que precisam operar com segurança e consistência.",
    capabilities: ["REST e webhooks", "Node.js e Laravel", "Bancos de dados"],
  },
  {
    code: "MOD",
    title: "Modernização e manutenção",
    description:
      "Evolução de sistemas existentes, correção de problemas, melhoria de arquitetura e atualização gradual de aplicações em produção.",
    capabilities: ["Sistemas legados", "Performance", "Infraestrutura e deploy"],
  },
  {
    code: "CON",
    title: "Consultoria técnica",
    description:
      "Apoio na análise de requisitos, arquitetura, decisões técnicas e organização do desenvolvimento de novos projetos.",
    capabilities: ["Diagnóstico técnico", "Arquitetura", "Planejamento de produto"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="border-y border-light-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="servicos-title"
          eyebrow="Serviços"
          title="Soluções técnicas conectadas ao problema real da empresa."
          description="A LRA atua desde o entendimento da operação até o desenvolvimento, integração, implantação e evolução da solução."
          tone="light"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.code}
              className="flex min-h-full flex-col rounded-3xl border border-light-border bg-background p-6 shadow-card-light transition-[border-color,box-shadow] duration-200 hover:border-brand/30 hover:shadow-[0_20px_60px_rgb(15_23_42/10%)] sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/20 bg-brand-soft font-mono text-xs font-bold text-brand">
                {service.code}
              </span>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-text">{service.title}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">{service.description}</p>

              <ul className="mt-6 space-y-2 border-t border-light-border pt-5">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2.5 text-sm font-medium text-text-muted"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />

                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
