"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(event) => handleLinkClick(event, "#hero")}
          className="text-sm font-semibold uppercase tracking-widest"
        >
          Studio Núcleo
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="text-sm uppercase tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 border-t border-foreground/10 bg-background px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="text-base uppercase tracking-wide text-foreground/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
