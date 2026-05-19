import React from 'react';

export default function SeccionServicios() {
  const planes = [
    {
      titulo: "Principiantes",
      descripcion: "Clases diseñadas para personas que están empezando en el patinaje. Se enseñan técnicas básicas como equilibrio, frenado, postura y desplazamiento seguro.",
      items: ["Entrenador certificado", "Ejercicios de equilibrio y control", "Actividades dinámicas para aprender rápido"],
      precio: "90.000$ COP / Mes",
      frecuencia: "Dos clases semanales"
    },
    {
      titulo: "Intermedio",
      descripcion: "Para estudiantes que ya dominan lo básico y quieren mejorar velocidad, técnica y resistencia.",
      items: ["Técnicas avanzadas de patinaje", "Entrenamiento físico", "Ejercicios de coordinación y velocidad"],
      precio: "120.000$ COP / Mes",
      frecuencia: "Tres clases semanales"
    },
    {
      titulo: "Avanzado / Competitivo",
      descripcion: "Entrenamiento especializado para patinadores que desean competir o perfeccionar su rendimiento.",
      items: ["Preparación para competencias", "Plan de entrenamiento personalizado", "Técnica profesional y resistencia"],
      precio: "160.000$ COP / Mes",
      frecuencia: "" // Dejado vacío según tu diseño original
    }
  ];

  return (
    <section className="bg-[#FAF6F0] py-16 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* Título Principal */}
      <h2 className="text-5xl md:text-6xl font-Title1 text-[#25B4FF] text-center mb-12 tracking-wide">
        Servicios
      </h2>

      {/* Contenedor de Tarjetas */}
      {/* divide-y y divide-x crean las líneas grises divisorias exactamente entre las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:divide-x-2 md:divide-gray-300 max-w-6xl w-full">
        {planes.map((plan, index) => (
          <div key={index} className="px-4 md:px-8 flex">
            {/* Tarjeta Individual */}
            <div className="bg-[#E6F9F3] rounded-3xl p-8 flex flex-col justify-between items-center text-center w-full shadow-sm">
              
              {/* Contenido Superior (Títulos y textos) */}
              <div className="flex flex-col items-center w-full">
                <h3 className="text-2xl md:text-3xl font-Text1 font-medium text-gray-800 mb-6">
                  {plan.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base font-Text1 leading-relaxed mb-8 min-h-25 flex items-center">
                  {plan.descripcion}
                </p>

                <h4 className="font-Text1 font-bold text-gray-800 mb-4">Incluye</h4>
                
                <ul className="space-y-2 mb-8 text-gray-700 font-Text1 text-sm md:text-base">
                  {plan.items.map((item, i) => (
                    <li key={i} className="font-Text1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contenido Inferior (Precios y Botón) */}
              <div className="w-full flex flex-col items-center mt-auto">
                <p className="text-gray-800 font-Text1 text-sm md:text-base">
                  {plan.precio}
                </p>
                {plan.frecuencia && (
                  <p className="text-gray-800 font-Text1 font-medium text-sm md:text-base mb-4">
                    {plan.frecuencia}
                  </p>
                )}
                {/* Espaciador en caso de que no haya frecuencia para mantener alineados los botones */}
                {!plan.frecuencia && <div className="h-6 mb-4" />}

                <button className="bg-[#00B2FF] hover:bg-[#009ee0] text-white font-Enlaces px-8 py-2.5 rounded-full text-sm transition-colors duration-200 shadow-sm mt-2">
                  Inscríbete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}