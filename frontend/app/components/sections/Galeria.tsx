export default function Galeria() {
  return (
    <section id="galeria" className="bg-dark-card section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
            El Templo
          </p>
          <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-4">
            Un Ambiente de Distinción
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Sumérgete en un espacio diseñado para tu confort, donde el tiempo
            se detiene y la elegancia es la norma.
          </p>
        </div>

        {/* Grid asimétrico - desktop */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3 h-[520px]">

          {/* Foto grande izquierda */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80"
              alt="Interior de Evolution X"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-300" />
          </div>

          {/* Foto superior derecha */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
              alt="Herramientas profesionales"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-300" />
          </div>

          {/* Foto inferior derecha */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80"
              alt="Resultado de corte"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-300" />
          </div>

        </div>

        {/* Grid móvil */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          <div className="col-span-2 h-64 relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80"
              alt="Interior de Evolution X"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-44 relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
              alt="Herramientas profesionales"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-44 relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80"
              alt="Resultado de corte"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA Instagram */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-5">
            Síguenos en Instagram para ver más de nuestro trabajo
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            className="btn-outline uppercase tracking-widest text-xs px-8 py-3"
          >
            Ver Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
