"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavigationItem = Readonly<{
  href: string;
  label: string;
}>;

type MobileNavigationProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((currentValue) => !currentValue);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !isOpen) {
        return;
      }

      closeMenu();
      buttonRef.current?.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

    function handleDesktopViewport(event: MediaQueryListEvent) {
      if (event.matches) {
        closeMenu();
      }
    }

    desktopMediaQuery.addEventListener("change", handleDesktopViewport);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopViewport);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink focus-visible:outline-none md:hidden"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
      >
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M6 6l12 12M18 6 6 18"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M4 7h16M4 12h16M4 17h16"
            />
          )}
        </svg>
      </button>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full border-t border-white/10 bg-ink/95 px-5 py-5 shadow-card backdrop-blur-xl md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav aria-label="Navegação mobile" className="mx-auto flex w-full max-w-7xl flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contato"
            onClick={closeMenu}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan px-5 text-sm font-black text-ink transition-colors hover:bg-mint focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-ink focus-visible:outline-none"
          >
            Falar sobre um projeto
          </Link>
        </nav>
      </div>
    </>
  );
}
