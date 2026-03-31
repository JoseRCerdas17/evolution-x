export default function Footer() {
    const navLinks = ["Servicios", "Galeria", "Equipo", "Contacto"];
  
    return (
      <footer className="bg-dark-card border-t border-dark-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
  
            <div className="md:col-span-2">
              <span className="text-gold font-bold text-2xl tracking-widest uppercase">
                Evolution <span className="text-white">X</span>
              </span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xs">
                Barbería premium en Liberia, Guanacaste. Donde la precisión
                y el estilo se encuentran.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-gold transition-colors text-sm uppercase tracking-wider">
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-gold transition-colors text-sm uppercase tracking-wider">
                  Facebook
                </a>
              </div>
            </div>
  
            <div>
              <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-4">
                Navegacion
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-gold transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-bold text-xs tracking-[3px] uppercase mb-4">
                Contacto
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="text-gray-500 text-sm">
                  Liberia, Guanacaste
                </li>
                <li>
                  <a href="https://wa.me/50600000000" className="text-gray-500 hover:text-gold transition-colors text-sm">
                    WhatsApp
                  </a>
                </li>
                <li className="text-gray-500 text-sm">
                  Lun - Sab: 9am - 8pm
                </li>
              </ul>
            </div>
  
          </div>
  
          <div className="w-full h-px bg-dark-border mb-6" />
  
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              2026 Evolution X Barbershop. Todos los derechos reservados.
            </p>
            <a href="/reservar" className="btn-gold text-xs uppercase tracking-widest px-6 py-2">
              Reservar Cita
            </a>
          </div>
  
        </div>
      </footer>
    );
  }