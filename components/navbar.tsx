"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { areas } from "@/lib/areas";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/advogados", label: "Advogados" },
  { href: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  const areasActive = pathname.startsWith("/areas-de-atuacao");

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled
          ? "border-b bg-white/95 shadow-sm"
          : "border-b border-transparent bg-white/90"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Logo Ferri, Maines & Fernandes, advogados em Lages - SC"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Ferri, Maines &amp; Fernandes</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-7">
          {navLinks.slice(0, 2).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

          <div className="relative" ref={areasRef}>
            <button
              onClick={() => setAreasOpen((v) => !v)}
              aria-expanded={areasOpen}
              aria-haspopup="true"
              className={`relative flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                areasActive ? "text-primary" : "text-foreground/80"
              }`}
            >
              Áreas de Atuação
              <ChevronDown
                size={14}
                className={`transition-transform ${areasOpen ? "rotate-180" : ""}`}
              />
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all ${
                  areasActive ? "w-full" : "w-0"
                }`}
              />
            </button>
            {areasOpen ? (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-border/70 bg-white p-2 shadow-lg">
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-de-atuacao/${area.slug}`}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === `/areas-de-atuacao/${area.slug}`
                        ? "bg-primary/5 text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                    }`}
                    onClick={() => setAreasOpen(false)}
                  >
                    {area.nome}
                  </Link>
                ))}
                <div className="my-1 border-t border-border/70" />
                <Link
                  href="/areas-de-atuacao"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                  onClick={() => setAreasOpen(false)}
                >
                  Ver todas as áreas
                </Link>
              </div>
            ) : null}
          </div>

          {navLinks.slice(2).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          className="rounded-md p-1.5 transition-colors hover:bg-muted md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t bg-white md:hidden ${
          isMenuOpen ? "max-h-96 overflow-y-auto" : "max-h-0 border-t-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
          {navLinks.slice(0, 2).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/5 text-primary"
                    : "text-foreground/80 hover:bg-muted"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/areas-de-atuacao"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              areasActive
                ? "bg-primary/5 text-primary"
                : "text-foreground/80 hover:bg-muted"
            }`}
            onClick={closeMenu}
          >
            Áreas de Atuação
          </Link>
          {navLinks.slice(2).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/5 text-primary"
                    : "text-foreground/80 hover:bg-muted"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
