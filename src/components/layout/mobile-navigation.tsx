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
        className="grid h-11 w-11 place-items-center rounded-xl border border-light-border bg-surface text-text transition-colors hover:border-light-border-strong hover:bg-surface-strong focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none md:hidden"
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
        className={`absolute inset-x-0 top-full isolate z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/5 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.80)_0%,rgba(255,255,255,0.86)_55%,rgba(255,255,255,0.94)_100%)] px-5 py-6 shadow-card-light backdrop-blur-[24px] backdrop-saturate-150 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-2"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-white/60 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contato"
            onClick={closeMenu}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-text transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover hover:shadow-[0_8px_24px_rgb(255_87_51_/_18%)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none"
          >
            Falar sobre um projeto
          </Link>
        </nav>
      </div>
    </>
  );
}
