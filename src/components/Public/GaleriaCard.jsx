import React from 'react';
// Si usas Next.js cambia por: import Link from 'next/link';

export default function GaleriaCard() {
  return (
    <a to="/galeria" className="group relative block max-w-xl mx-auto overflow-hidden rounded-2xl bg-black aspect-16/10 shadow-md cursor-pointer">
      <div className="group relative block max-w-xl overflow-hidden rounded-2xl bg-black aspect-16/10 shadow-md cursor-pointer">
        {/* Imagen de fondo */}
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" // Reemplaza por tu imagen de patinaje
          alt="Galería de patinaje"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Capa de color (Overlay) */}
        {/* Usamos un color azul/cyan con opacidad. Al pasar el cursor, se aclara un poco */}
        <div className="absolute inset-0 bg-[#07B2FF] mix-blend-multiply transition-opacity duration-300 group-hover:bg-[#07B2FF]/50" />

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow-sm md:text-5xl">
            Galería
          </h2>
        </div>
      </div>
    </a     >
  );
}
   