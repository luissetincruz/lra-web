import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeDictionary } from "@/i18n/types";

type ProcessSectionProps = Readonly<{
  content: HomeDictionary["process"];
}>;

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section
      id="como-trabalhamos"
      aria-labelledby="processo-title"
      className="border-b border-white/10 bg-ink py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHeading
              titleId="processo-title"
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {content.principles.map((principle) => (
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

            {content.steps.map((step) => (
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
