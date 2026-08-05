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
      className="border-y border-white/10 bg-white/2 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="servicos-title"
          eyebrow="Serviços"
          title="Soluções técnicas conectadas ao problema real da empresa."
          description="A LRA atua desde o entendimento da operação até o desenvolvimento, integração, implantação e evolução da solução."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.code}
              className="group flex min-h-full flex-col rounded-3xl border border-white/10 bg-panel/60 p-6 shadow-card transition-colors hover:border-cyan/30 hover:bg-panel sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 font-mono text-xs font-black text-cyan">
                  {service.code}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-slate-600 transition-colors group-hover:text-cyan"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-white">{service.title}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{service.description}</p>

              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint" />

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
