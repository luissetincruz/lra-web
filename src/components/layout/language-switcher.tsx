import Link from "next/link";

import type { Locale } from "@/i18n/types";

type LanguageSwitcherProps = Readonly<{
  locale: Locale;
  ariaLabel: string;
  className?: string;
}>;

const languages = [
  {
    locale: "pt-BR",
    label: "PT",
    ariaLabel: "Português",
    href: "/",
  },
  {
    locale: "en",
    label: "EN",
    ariaLabel: "English",
    href: "/en",
  },
] as const;

export function LanguageSwitcher({ locale, ariaLabel, className }: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`inline-flex items-center rounded-lg border border-light-border bg-surface p-1 ${
        className ?? ""
      }`}
    >
      {languages.map((language) => {
        const isActive = language.locale === locale;

        return (
          <Link
            key={language.locale}
            href={language.href}
            hrefLang={language.locale}
            lang={language.locale}
            aria-label={language.ariaLabel}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none ${
              isActive
                ? "bg-background text-brand shadow-sm"
                : "text-text-muted hover:bg-background hover:text-text"
            }`}
          >
            {language.label}
          </Link>
        );
      })}
    </div>
  );
}
