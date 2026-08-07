import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const navigation = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[var(--footer-reveal-height)] border-t border-light-border bg-background py-8">
      <Container className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              href="#inicio"
              className="inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              aria-label="LRA Software — página inicial"
            >
              <Image
                src="/lra-logo.svg"
                alt="LRA Software"
                width={160}
                height={71}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-text-muted">
              Sistemas, automações, integrações e inteligência artificial aplicados a operações
              reais.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md text-sm font-medium text-text transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-light-border pt-6 text-xs text-text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} LRA Software. Todos os direitos reservados.</p>

          <p>Desenvolvido com Next.js, TypeScript e Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
