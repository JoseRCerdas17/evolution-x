const servicios = [
  {
    nombre: "Corte Imperial",
    precio: "₡4,000",
    duracion: "30 min",
    descripcion: "Corte de imagen completa, técnico a tijera o máquina con acabado premium y asesoría personalizada de imagen.",
    imagen: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    tag: "01",
  },
  {
    nombre: "Ritual de Barba",
    precio: "₡5,000",
    duracion: "45 min",
    descripcion: "Ritual tradicional con toallas calientes, espuma de barba y aceites esenciales para un perfilado perfecto y piel revitalizada.",
    imagen: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    tag: "02",
  },
  {
    nombre: "Experiencia Noble",
    precio: "₡8,000",
    duracion: "70 min",
    descripcion: "Diseño y cuidado de barba según la fisonomía facial, renovado con corte perfecto y aplicación de bálsamo nutritivo.",
    imagen: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80",
    tag: "03",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-dark section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
              Nuestros Servicios
            </p>
            <h2 className="text-white font-black uppercase text-4xl md:text-5xl leading-none">
              Nuestra Maestría
            </h2>
            <p className="text-gray-500 text-sm max-w-md mt-4 leading-relaxed">
              Ofrecemos una selección de servicios diseñados para el hombre que
              no compromete su imagen. Cada técnica es un ritual de perfección.
            </p>
          </div>
          <a href="/reservar" className="text-gold text-sm tracking-wider hover:text-gold-light transition-colors flex items-center gap-2 flex-shrink-0">
            Explorar carta completa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.nombre}
              className="bg-dark-card border border-dark-border rounded-lg overflow-hidden group hover:border-gold transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-gold text-white text-xs font-black tracking-widest px-3 py-1 rounded-sm">
                  {servicio.tag}
                </div>
                {/* Duración */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-gray-300 text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {servicio.duracion}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-gold font-black text-2xl mb-1">{servicio.precio}</p>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {servicio.descripcion}
                </p>
                <a
                  href="/reservar"
                  className="text-gold text-xs tracking-widest uppercase font-bold hover:text-gold-light transition-colors flex items-center gap-2"
                >
                  Reservar Ahora
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de precios */}
        <p className="text-center text-gray-600 text-xs mt-10 tracking-wider">
          * Precios en colones costarricenses. Pago al asistir.
          <span className="mx-3 text-dark-border">|</span>
          Cejas: ₡1,000 · Marcado: ₡2,000
        </p>

      </div>
    </section>
  );
}
