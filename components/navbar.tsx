"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/advogados", label: "Advogados" },
  { href: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

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
            alt="Logo Ferri, Maines & Fernandes"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Ferri, Maines &amp; Fernandes</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-7">
          {navLinks.map((link) => {
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
          isMenuOpen ? "max-h-64" : "max-h-0 border-t-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => {
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
