import Link from "next/link";

import { Container } from "@/components/ui/container";

const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#sobre", label: "Sobre" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          aria-label="LRA Software — página inicial"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-xs font-black tracking-tight text-cyan"
          >
            LRA
          </span>

          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            LRA Software
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contato"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 px-4 text-sm font-bold text-cyan transition-colors hover:border-cyan/60 hover:bg-cyan/15 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink focus-visible:outline-none sm:px-5"
        >
          <span className="hidden sm:inline">Falar sobre um projeto</span>
          <span className="sm:hidden">Contato</span>
        </Link>
      </Container>
    </header>
  );
}
