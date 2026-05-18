import React, { useState } from "react";

const EVENTOS_MOCK = [
  {
    id: 1,
    titulo: "Competencia nivel intermedio",
    descripcion:
      "Este 30 de febrero tendremos la primer competencia semestral de niveles intermedios de este año, acompaña a los jóvenes que están iniciando su vida en el patinaje en su primer competencia.",
    infoExtra: "Entrada libre",
    imagen: "url-de-tu-imagen-1.jpg", // Reemplaza con tus rutas reales
  },
  {
    id: 2,
    titulo: "Competencia anual con la Academia de patinaje paisa",
    descripcion:
      "Acompaña a nuestra academia en la competencia anual de patinaje con las escuelas más destacadas de la región de Antioquia.",
    infoExtra: "Inscripción previa",
    imagen: "url-de-tu-imagen-2.jpg",
  },
  {
    id: 3,
    titulo: "Taller de patinaje artístico",
    descripcion:
      "Aprende las técnicas básicas del patinaje artístico en nuestro taller intensivo de un día, dirigido por nuestros entrenadores expertos.",
    infoExtra: "Cupos limitados",
    imagen: "url-de-tu-imagen-3.jpg",
  },
  {
    id: 4,
    titulo: "Exhibición de patinaje freestyle",
    descripcion:
      "Disfruta de una exhibición de patinaje freestyle con algunos de nuestros patinadores más talentosos, mostrando trucos y habilidades impresionantes.",
    infoExtra: "Evento gratuito",
    imagen: "url-de-tu-imagen-4.jpg",
  },
];

export default function SeccionEventos() {
  // Inicializamos el estado con el primer evento de la lista
  const [eventoSeleccionado, setEventoSeleccionado] = useState(EVENTOS_MOCK[0]);

  return (
    <section className="w-full max-w-6xl md:my-8 mx-auto px-4 py-12 bg-[#FFFBF4] rounded-md shadow-md">
      {/* Título de la sección */}
      <h2 className="text-4xl font-Title1 text-center text-[#25C2F6] mb-12 uppercase tracking-wide">
        Eventos
      </h2>

      {/* Contenedor Principal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* PANEL IZQUIERDO: Detalle del evento seleccionado (Ocupa 7 de 12 columnas) */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl aspect-16/10 bg-gray-200">
            <img
              src={eventoSeleccionado.imagen}
              alt={eventoSeleccionado.titulo}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-2">
            {eventoSeleccionado.titulo}
          </h3>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            {eventoSeleccionado.descripcion}
          </p>

          {eventoSeleccionado.infoExtra && (
            <span className="text-sm font-medium text-gray-500 mt-2">
              {eventoSeleccionado.infoExtra}
            </span>
          )}
        </div>

        {/* PANEL DERECHO: Lista de eventos (Ocupa 5 de 12 columnas) */}
        <div className="md:col-span-5 border-l border-gray-300 pl-6 flex flex-col gap-1">
          {EVENTOS_MOCK.map((evento) => {
            const isSelected = evento.id === eventoSeleccionado.id;

            return (
              <button
                key={evento.id}
                onClick={() => setEventoSeleccionado(evento)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer border border-transparent
                  ${
                    isSelected
                      ? "bg-[#B2F5EA] border-[#81E6D9]"
                      : "hover:bg-gray-100/80"
                  }`}
              >
                <h4 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2">
                  {evento.titulo}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-2">
                  {evento.descripcion}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
