const fotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", categoria: "Corte", alt: "Corte de cabello profesional" },
    { id: 2, url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", categoria: "Barba", alt: "Arreglo de barba" },
    { id: 3, url: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80", categoria: "Fade", alt: "Corte fade moderno" },
    { id: 4, url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", categoria: "Corte", alt: "Estilo clasico" },
    { id: 5, url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", categoria: "Interior", alt: "Interior de la barberia" },
    { id: 6, url: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80", categoria: "Barba", alt: "Barba estilizada" },
  ];
  
  export default function Galeria() {
    return (
      <section className="bg-dark section-padding">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
              ✦ Nuestro trabajo ✦
            </p>
            <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-4">
              La <span className="text-gold italic">Galeria</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Cada corte es una obra de arte. Conoce el nivel de precisión
              y detalle que ofrecemos en cada servicio.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fotos.map((foto) => (
              <div key={foto.id} className="relative overflow-hidden rounded-lg group aspect-square">
                <img src={foto.url} alt={foto.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-gold font-bold text-xs tracking-[3px] uppercase border border-gold px-4 py-2 rounded">
                    {foto.categoria}
                  </span>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-6">
              Siguenos en Instagram para ver mas de nuestro trabajo
            </p>
            <a href="https://instagram.com" target="_blank" className="btn-outline uppercase tracking-widest text-sm px-8 py-4">
              Ver Instagram
            </a>
          </div>
  
        </div>
      </section>
    );
  }