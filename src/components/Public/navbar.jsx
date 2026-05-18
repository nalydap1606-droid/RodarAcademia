import React from 'react';
import logo from '../../assets/logo-rodar.png';
// import logo from '../assets/logo-rodar.png'; 

export default function Navbar() {
    const navLinks = [
        { name: 'Inicio', active: true },
        { name: 'Servicios', active: false },
        { name: 'Eventos', active: false },
        { name: 'Galería', active: false },
        { name: 'Testimonios', active: false },
    ];

    return (
        <nav className="w-full py-4 px-8 flex items-center justify-between bg-[#FFFBF4] sticky top-0 z-50 shadow-sm">

            {/* 1. LOGO - Izquierda */}
            <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="Rodar Logo" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* 2. MENÚ - Centro */}
            <div className="hidden md:flex bg-white border border-gray-300 rounded-full px-1 py-1 shadow-sm items-center">
                <ul className="flex items-center h-full"> {/* h-full asegura que usen todo el alto disponible */}
                    {navLinks.map((link) => (
                        <li key={link.name} className="flex items-center font-Enlaces font-bold">
                            <a
                                href={`#${link.name.toLowerCase()}`}
                                className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all flex items-center justify-center ${link.active
                                        ? 'bg-gray-200 text-black shadow-sm' // Eliminamos padding extra que pueda moverlo
                                        : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. BOTONES - Derecha */}
            <div className="flex items-center space-x-6">
                <button className="text-sm font-semibold text-gray-800 hover:text-blue-500 transition">
                    Iniciar Sesión
                </button>
                <div className="h-8 w-px bg-gray-300"></div> {/* Línea divisoria */}
                <button className="text-sm font-semibold text-gray-800 hover:text-blue-500 transition">
                    Inscríbete
                </button>
            </div>
        </nav>
    );
}