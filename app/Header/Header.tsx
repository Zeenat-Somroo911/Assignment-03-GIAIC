"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-fuchsia-950 to-purple-800 text-white py-4 shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold">Zeenat Portfolio</div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#about" className="hover:text-yellow-300 transition duration-300">About Me</a>
          <a href="#skills" className="hover:text-yellow-300 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white text-fuchsia-950 p-4">
          <a href="#about" className="block py-2 hover:text-yellow-300">About Me</a>
          <a href="#skills" className="block py-2 hover:text-yellow-300">Skills</a>
          <a href="#projects" className="block py-2 hover:text-yellow-300">Projects</a>
          <a href="#contact" className="block py-2 hover:text-yellow-300">Contact</a>
        </div>
      )}
    </header>
  );
}
