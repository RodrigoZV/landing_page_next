'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative">
      <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Abrir menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`
          flex flex-col md:flex-row gap-3 mt-2 md:mt-0
          absolute md:static
          bg-gray-800 md:bg-transparent
          p-4 md:p-0
          rounded-md shadow-md md:shadow-none
          z-10 transition-all duration-300 ease-in-out
          ${menuOpen ? 'block' : 'hidden'} md:flex
          w-[90vw] md:w-auto
          left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0
          top-full md:top-auto
        `}
      >
        <Link href="/" className="p-2 hover:bg-gray-200 hover:text-gray-800 hover:rounded-lg hover:animate-pulse duration-300">Home</Link>
        <Link href="/about" className="p-2 hover:bg-gray-200 hover:text-gray-800 hover:rounded-lg hover:animate-pulse duration-300">About</Link>
        <Link href="/contact" className="p-2 hover:bg-gray-200 hover:text-gray-800 hover:rounded-lg hover:animate-pulse duration-300">Contact</Link>
      </div>
    </nav>
  );
}
=======
    return (
        <nav className="flex flex-row mt-4 gap-5">
            <Link href="/" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Início</Link>
            <Link href="/about" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Sobre nós</Link>
            <Link href="/contact" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Contatos</Link>
            <Link href="/users" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Usuários</Link>                          
        </nav>
    );
}
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
