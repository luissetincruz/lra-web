import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { HomeDictionary } from "@/i18n/types";

type ContactSectionProps = Readonly<{
  content: HomeDictionary["contact"];
}>;

export function ContactSection({ content }: ContactSectionProps) {
  const emailHref = `mailto:luiscruzdesign@gmail.com?subject=${encodeURIComponent(
    content.emailSubject,
  )}`;

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-white/10 bg-ink py-20 sm:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-panel/80 p-7 shadow-card sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-brand/8 blur-3xl"
          />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-brand uppercase">
                {content.eyebrow}
              </p>

              <h2
                id="contato-title"
                className="mt-4 max-w-3xl text-3xl leading-tight font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
              >
                {content.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {content.description}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label={content.topicsAriaLabel}>
                {content.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-stretch gap-3 lg:min-w-64">
              <Link
                href={emailHref}
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-brand px-6 text-center text-sm font-semibold text-text transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover hover:shadow-[0_8px_24px_rgb(255_87_51/18%)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-panel focus-visible:outline-none"
              >
                {content.projectCta}
              </Link>

              <p className="text-center text-xs leading-5 text-slate-500">{content.emailHint}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
