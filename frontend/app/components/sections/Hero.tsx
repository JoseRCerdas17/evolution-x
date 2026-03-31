import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-4 pt-20">

      {/* Badge superior */}
      <p className="text-gold text-xs tracking-[4px] mb-6 uppercase">
        ✦ Excelencia desde el primer corte ✦
      </p>

      {/* Título principal */}
      <h1 className="text-white font-black uppercase leading-none text-5xl md:text-7xl lg:text-8xl">
        Tu estilo,
      </h1>
      <h1 className="text-gold font-black uppercase italic leading-none text-5xl md:text-7xl lg:text-8xl mb-6">
        Evolucionado
      </h1>

      {/* Descripción */}
      <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
        Grooming premium para el caballero moderno. Experimenta cortes de precisión
        y tratamientos de lujo en un ambiente de distinción total.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
        <Link href="/booking" className="btn-gold text-center uppercase tracking-widest text-sm px-8 py-4">
          Reservar Cita
        </Link>
        <Link href="/services" className="btn-outline text-center uppercase tracking-widest text-sm px-8 py-4">
          Ver Servicios
        </Link>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-8 md:gap-16 mt-20 flex-wrap justify-center">
        <div className="text-center">
          <p className="text-gold text-3xl md:text-4xl font-black">5.0</p>
          <p className="text-gray-600 text-xs tracking-[3px] uppercase mt-1">Calificación Google</p>
        </div>

        <div className="hidden sm:block w-px h-12 bg-dark-border" />

        <div className="text-center">
          <p className="text-gold text-3xl md:text-4xl font-black">15+</p>
          <p className="text-gray-600 text-xs tracking-[3px] uppercase mt-1">Barberos Expertos</p>
        </div>

        <div className="hidden sm:block w-px h-12 bg-dark-border" />

        <div className="text-center">
          <p className="text-gold text-3xl md:text-4xl font-black">10k+</p>
          <p className="text-gray-600 text-xs tracking-[3px] uppercase mt-1">Clientes Felices</p>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="w-24 h-px bg-gold mt-20 opacity-50" />

    </section>
  );
}