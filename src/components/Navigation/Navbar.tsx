import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img 
            src="/logobg.png" 
            alt="Pristine Edge Logo" 
            className="h-8 sm:h-12 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button className="font-medium text-black hover:text-red-600 transition-colors">
            Inicio
          </button>
          <button
            onClick={() => navigate("/Services")}
            className="font-medium text-black hover:text-red-600 transition-colors"
          >
            Servicios
          </button>
          <button className="font-medium text-black hover:text-red-600 transition-colors">
            Nosotros
          </button>
          <button className="font-medium text-black hover:text-red-600 transition-colors">
            Blog
          </button>
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={() => navigate("/Contact")}
          className="hidden md:block text-red-600 border border-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors"
        >
          Cita
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <button className="font-medium text-black hover:text-red-600 transition-colors">
                Inicio
              </button>
              <button
                onClick={() => navigate("/Services")}
                className="font-medium text-black hover:text-red-600 transition-colors"
              >
                Servicios
              </button>
              <button className="font-medium text-black hover:text-red-600 transition-colors">
                Nosotros
              </button>
              <button className="font-medium text-black hover:text-red-600 transition-colors">
                Blog
              </button>
              <button
                onClick={() => navigate("/Contact")}
                className="text-red-600 border border-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors"
              >
                Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


