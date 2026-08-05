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
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
              aria-label="LRA Software — página inicial"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-xs font-black text-cyan"
              >
                LRA
              </span>

              <span className="font-semibold text-white">LRA Software</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
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
                    className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} LRA Software. Todos os direitos reservados.</p>

          <p>Desenvolvido com Next.js, TypeScript e Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
