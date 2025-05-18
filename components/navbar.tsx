"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Ferri, Maines & Fernandes"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Ferri, Maines & Fernandes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            href="/advogados"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Advogados
          </Link>
          <Link
            href="/contato"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="/advogados"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Advogados
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
