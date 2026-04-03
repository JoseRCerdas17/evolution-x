export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Columna 1 — Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-white font-black text-2xl tracking-widest uppercase">
              Noble<span className="text-gold">Cut</span>
            </span>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xs">
              Redefiniendo el grooming masculino con elegancia y distinción
              desde 2024. Experiencias personalizadas para el caballero moderno en Liberia, Guanacaste.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" aria-label="X"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 — Explorar */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-5">
              Explorar
            </h4>
            <ul className="flex flex-col gap-3">
              {["Servicios", "Galería", "Nuestro Equipo", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "").replace("nuestro", "").trim() || "equipo"}`}
                    className="text-gray-500 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Horario */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-5">
              Horario
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between gap-4">
                <span className="text-gray-500 text-sm">Lunes – Viernes</span>
                <span className="text-white text-sm font-bold whitespace-nowrap">09:00 – 21:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-500 text-sm">Sábado</span>
                <span className="text-white text-sm font-bold">10:00 – 19:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-gray-500 text-sm">Domingo</span>
                <span className="text-gray-500 text-sm font-bold">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 text-sm">
                Liberia, Guanacaste<br />Costa Rica
              </li>
              <li>
                <a href="tel:+50688888888" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  +506 8888-8888
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-gold transition-colors text-sm">
                  @NobleCtPremium
                </a>
              </li>
            </ul>
            <a href="/reservar" className="btn-gold inline-block text-xs uppercase tracking-widest px-6 py-2.5 mt-6">
              Reservar Cita
            </a>
          </div>

        </div>

        {/* Línea separadora */}
        <div className="w-full h-px bg-dark-border mb-6" />

        <p className="text-center text-gray-600 text-xs">
          © 2026 NobleCut Barbershop. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
