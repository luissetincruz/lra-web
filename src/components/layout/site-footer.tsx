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
    <footer className="fixed inset-x-0 bottom-0 z-0 h-(--footer-reveal-height) border-t border-light-border bg-background py-8">
      <Container className="flex h-full flex-col justify-between">
        <div className="grid gap-y-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-4">
          <Link
            href="#inicio"
            className="inline-flex w-fit rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:col-start-1 lg:row-start-1"
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

          <p className="max-w-md text-sm leading-6 text-text-muted lg:col-start-1 lg:row-start-2">
            Sistemas, automações, integrações e inteligência artificial aplicados a operações reais.
          </p>

          <nav
            aria-label="Navegação do rodapé"
            className="lg:col-start-2 lg:row-start-2 lg:self-start"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative rounded-md text-sm leading-6 font-medium text-text transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-[width] after:duration-200 after:content-[''] hover:text-brand hover:after:w-full focus-visible:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none focus-visible:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-light-border pt-6 text-xs text-text-subtle">
          <p>© {currentYear} LRA Software. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
