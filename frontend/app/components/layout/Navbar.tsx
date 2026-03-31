"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold font-bold text-xl md:text-2xl tracking-widest uppercase">
              Evolution <span className="text-white">X</span>
            </span>
          </Link>

          {/* Links escritorio */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
              Servicios
            </Link>
            <Link href="/galeria" className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
              Galería
            </Link>
            <Link href="/equipo" className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
              Equipo
            </Link>
            <Link href="/contacto" className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
              Contacto
            </Link>
            <Link href="/reservar" className="btn-gold text-sm uppercase tracking-wider">
              Reservar
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col px-4 pb-6 gap-4 bg-dark-card border-t border-dark-border">
          <Link href="/servicios" onClick={() => setIsOpen(false)}
            className="text-white hover:text-gold transition-colors py-2 uppercase tracking-wider text-sm">
            Servicios
          </Link>
          <Link href="/galeria" onClick={() => setIsOpen(false)}
            className="text-white hover:text-gold transition-colors py-2 uppercase tracking-wider text-sm">
            Galería
          </Link>
          <Link href="/equipo" onClick={() => setIsOpen(false)}
            className="text-white hover:text-gold transition-colors py-2 uppercase tracking-wider text-sm">
            Equipo
          </Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)}
            className="text-white hover:text-gold transition-colors py-2 uppercase tracking-wider text-sm">
            Contacto
          </Link>
          <Link href="/reservar" onClick={() => setIsOpen(false)}
            className="btn-gold text-center uppercase tracking-wider text-sm">
            Reservar
          </Link>
        </div>
      </div>
    </nav>
  );
}