const servicios = [
    {
      nombre: "Corte de Cabello",
      precio: "₡4,000",
      duracion: "30 min",
      descripcion: "Corte personalizado según tu estilo y tipo de rostro.",
      icono: "✂️",
    },
    {
      nombre: "Corte y Barba",
      precio: "₡5,000",
      duracion: "30 min",
      descripcion: "Corte completo más arreglo y perfilado de barba.",
      icono: "🪒",
    },
    {
      nombre: "Marcado y/o Barba",
      precio: "₡2,000",
      duracion: "15 min",
      descripcion: "Marcado de contorno y arreglo de barba con precisión.",
      icono: "⚡",
    },
    {
      nombre: "Cejas",
      precio: "₡1,000",
      duracion: "5 min",
      descripcion: "Perfilado y definición de cejas para un look limpio.",
      icono: "👁️",
    },
  ];
  
  export default function Servicios() {
    return (
      <section className="bg-dark-card section-padding">
        <div className="max-w-6xl mx-auto">
  
          {/* Encabezado */}
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
              ✦ Lo que ofrecemos ✦
            </p>
            <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-4">
              Nuestros <span className="text-gold italic">Servicios</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Servicios de precisión para el caballero moderno.
              Calidad garantizada en cada visita.
            </p>
          </div>
  
          {/* Grid de servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio) => (
              <div
                key={servicio.nombre}
                className="bg-dark border border-dark-border rounded-lg p-6 hover:border-gold transition-all duration-300 group"
              >
                {/* Icono */}
                <div className="text-3xl mb-4">{servicio.icono}</div>
  
                {/* Precio */}
                <p className="text-gold font-black text-2xl mb-1">
                  {servicio.precio}
                </p>
  
                {/* Duración */}
                <p className="text-gray-600 text-xs tracking-widest uppercase mb-3">
                  {servicio.duracion}
                </p>
  
                {/* Nombre */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                  {servicio.nombre}
                </h3>
  
                {/* Descripción */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
  
                {/* Línea dorada inferior */}
                <div className="w-0 group-hover:w-full h-px bg-gold mt-4 transition-all duration-500" />
              </div>
            ))}
          </div>
  
          {/* Nota de precios */}
          <p className="text-center text-gray-600 text-xs mt-10 tracking-wider">
            * Precios en colones costarricenses. Pago al asistir.
          </p>
  
        </div>
      </section>
    );
  }