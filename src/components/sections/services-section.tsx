import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeDictionary } from "@/i18n/types";

type ServicesSectionProps = Readonly<{
  content: HomeDictionary["services"];
}>;

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="border-y border-light-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="servicos-title"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          tone="light"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {content.items.map((service) => (
            <article
              key={service.code}
              className="flex min-h-full flex-col rounded-3xl border border-light-border bg-background p-6 shadow-card-light transition-[border-color,box-shadow] duration-200 hover:border-brand/30 hover:shadow-[0_20px_60px_rgb(15_23_42/10%)] sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/20 bg-brand-soft font-mono text-xs font-bold text-brand-text">
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
