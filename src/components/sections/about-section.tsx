import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeDictionary } from "@/i18n/types";

type AboutSectionProps = Readonly<{
  content: HomeDictionary["about"];
}>;

export function AboutSection({ content }: AboutSectionProps) {
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
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              tone="light"
            />

            <p className="mt-7 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              {content.descriptionSecondary}
            </p>

            <div className="mt-10 flex flex-wrap gap-2" aria-label={content.technologiesAriaLabel}>
              {content.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-light-border bg-surface px-3.5 py-2 font-mono text-xs font-medium text-text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-light-border bg-surface shadow-card-light">
            {content.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="border-b border-light-border p-6 last:border-b-0 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-brand/20 bg-brand-soft font-mono text-xs font-bold text-brand-text">
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
