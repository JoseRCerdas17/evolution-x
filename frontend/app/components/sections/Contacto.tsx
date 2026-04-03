export default function Contacto() {
  return (
    <section id="contacto" style={{ backgroundColor: "#1D4ED8" }} className="section-padding">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <p className="text-blue-200 text-xs tracking-[4px] uppercase mb-5">
          ¿Te Apuntas?
        </p>

        {/* Título */}
        <h2 className="text-white font-black uppercase leading-none text-4xl md:text-5xl lg:text-6xl mb-5">
          ¿Listo para Elevar<br />tu Imagen?
        </h2>

        {/* Subtítulo */}
        <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed mb-12">
          Reserva tu espacio en la agenda de nuestros maestros y descubre por
          qué somos la referencia del grooming masculino en la ciudad.
        </p>

        {/* Fila de acción */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">

          {/* Teléfono */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-bold tracking-wide">+506 8888-8888</span>
          </div>

          {/* Botón CTA */}
          <a
            href="/reservar"
            className="bg-white text-blue-700 font-black uppercase tracking-widest text-sm px-10 py-4 rounded hover:bg-blue-50 transition-colors duration-300"
          >
            Reservar Ahora
          </a>

          {/* Ubicación */}
          <div className="flex items-center gap-3 text-white">
            <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-bold tracking-wide">Liberia, Guanacaste</span>
          </div>

        </div>

        {/* Horarios */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-blue-200 text-xs tracking-wider">
          <span>Lunes – Viernes: 9:00am – 8:00pm</span>
          <span className="hidden sm:inline text-blue-400">|</span>
          <span>Sábado: 8:00am – 8:00pm</span>
          <span className="hidden sm:inline text-blue-400">|</span>
          <span>Domingo: 10:00am – 4:00pm</span>
        </div>

      </div>
    </section>
  );
}
