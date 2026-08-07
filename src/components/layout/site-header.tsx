import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";

const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#sobre", label: "Sobre" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 isolate z-50 border-b border-black/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white/80 backdrop-blur-[24px] backdrop-saturate-150"
      />

      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="#inicio"
          className="flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label="LRA Software — página inicial"
        >
          <Image
            src="/lra-logo.svg"
            alt="LRA Software"
            width={160}
            height={71}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md text-sm font-medium text-text-muted transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contato"
            className="hidden min-h-11 items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold tracking-[-0.01em] text-text transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover hover:shadow-[0_8px_24px_rgb(255_87_51_/_18%)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none md:inline-flex"
          >
            Falar sobre um projeto
          </Link>

          <MobileNavigation items={navigation} />
        </div>
      </Container>
    </header>
  );
}
