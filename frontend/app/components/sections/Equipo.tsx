const barberos = [
  {
    nombre: "Marco Ricci",
    especialidad: "Senior Master Barber",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    nombre: "Adrian Thorne",
    especialidad: "Especialista en Afeitado",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    nombre: "James Soler",
    especialidad: "Director Creativo",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    nombre: "Lucía Méndez",
    especialidad: "Hair Styling Expert",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const testimonios = [
  {
    texto: "Evolution X no es solo una barbería, es un club de caballeros. La atención al detalle de Kendall es sencillamente insuperable.",
    nombre: "Carlos Mora",
    rol: "Cliente fiel",
    iniciales: "CM",
    color: "bg-gold",
  },
  {
    texto: "El ritual de afeitado con toalla caliente es lo mejor. Salgo de aquí absolutamente renovado con una imagen impecable.",
    nombre: "Daniel Arce",
    rol: "Arquitecto",
    iniciales: "DA",
    color: "bg-dark-surface",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="bg-dark section-padding">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* — Columna Equipo — */}
          <div>
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
              Conoce a los artistas
            </p>
            <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-4">
              Nuestros Maestros
            </h2>
            <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
              Artesanos del cabello con décadas de experiencia acumulada,
              dedicados a esculpir la mejor versión.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {barberos.map((barbero) => (
                <div key={barbero.nombre} className="group text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-dark-border group-hover:border-gold transition-all duration-300 mx-auto mb-3">
                    <img
                      src={barbero.foto}
                      alt={barbero.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-0.5 group-hover:text-gold transition-colors duration-300">
                    {barbero.nombre}
                  </h3>
                  <p className="text-gold text-xs tracking-wider uppercase">
                    {barbero.especialidad}
                  </p>
                  <a
                    href="/reservar"
                    className="inline-block mt-3 text-gray-500 text-xs hover:text-gold transition-colors duration-300 border-b border-dark-border hover:border-gold pb-0.5"
                  >
                    Reservar →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* — Columna Testimonios — */}
          <div>
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
              Lo que dicen
            </p>
            <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-8">
              Voces de Distinción
            </h2>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 flex flex-col gap-6">

              <p className="text-gray-400 text-sm leading-relaxed">
                La satisfacción de nuestros clientes es el único estándar que aceptamos.
              </p>

              {testimonios.map((t, i) => (
                <div key={i}>
                  {/* Estrellas */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.texto}&rdquo;
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-black">{t.iniciales}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{t.nombre}</p>
                      <p className="text-gray-500 text-xs">{t.rol}</p>
                    </div>
                  </div>

                  {i < testimonios.length - 1 && (
                    <div className="w-full h-px bg-dark-border mt-6" />
                  )}
                </div>
              ))}

              {/* Rating global */}
              <div className="border-t border-dark-border pt-5 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">
                  Promedio de <span className="text-white font-bold">4.9</span> en más de{" "}
                  <span className="text-white font-bold">2.400 reseñas</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
