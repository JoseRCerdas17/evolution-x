export default function Contacto() {
  const horarios = [
    { dia: "Lunes - Viernes", hora: "9:00am - 8:00pm" },
    { dia: "Sabado", hora: "8:00am - 8:00pm" },
    { dia: "Domingo", hora: "10:00am - 4:00pm" },
  ];

  return (
    <section className="bg-dark-card section-padding">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
            ✦ Estamos para servirte ✦
          </p>
          <h2 className="text-white font-black uppercase text-4xl md:text-5xl mb-4">
            Donde <span className="text-gold italic">Encontrarnos</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Visitanos en Liberia, Guanacaste. También puedes escribirnos por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="flex flex-col gap-6">

            <div className="bg-dark border border-dark-border rounded-lg p-6 hover:border-gold transition-all duration-300">
              <h3 className="text-gold font-bold text-xs tracking-[3px] uppercase mb-3">Ubicacion</h3>
              <p className="text-white font-bold text-lg mb-1">Liberia, Guanacaste</p>
              <p className="text-gray-500 text-sm">Costa Rica</p>
            </div>

            <div className="bg-dark border border-dark-border rounded-lg p-6 hover:border-gold transition-all duration-300">
              <h3 className="text-gold font-bold text-xs tracking-[3px] uppercase mb-4">Horarios</h3>
              <div className="flex flex-col gap-2">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between items-center py-2 border-b border-dark-border">
                    <span className="text-gray-400 text-sm">{h.dia}</span>
                    <span className="text-white text-sm font-bold">{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>

            
            <a href="https://wa.me/50600000000" target="_blank" className="bg-dark border border-dark-border rounded-lg p-6 hover:border-gold transition-all duration-300 flex items-center justify-between group">
              <div>
                <h3 className="text-gold font-bold text-xs tracking-[3px] uppercase mb-1">WhatsApp</h3>
                <p className="text-white font-bold">Escribenos ahora</p>
                <p className="text-gray-500 text-sm">Respuesta rapida garantizada</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                <span className="text-gold group-hover:text-black font-bold text-lg">W</span>
              </div>
            </a>

          </div>

          <div className="bg-dark border border-dark-border rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-6">Envianos un mensaje</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-dark-surface border border-dark-border rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Telefono o WhatsApp</label>
                <input
                  type="tel"
                  placeholder="8888-8888"
                  className="w-full bg-dark-surface border border-dark-border rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider mb-2 block">Mensaje</label>
                <textarea
                  placeholder="Escribe tu consulta aqui..."
                  rows={4}
                  className="w-full bg-dark-surface border border-dark-border rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button className="btn-gold w-full uppercase tracking-widest text-sm py-4">
                Enviar Mensaje
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}