import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="custom-container py-1 xs:py-1.5 sm:py-2 flex justify-between items-center">
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-lg xs:text-xl sm:text-2xl font-bold">DETALLADO AUTO</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          <button
            onClick={() => navigate("/")}
            className="text-sm lg:text-base font-medium text-black hover:text-red-600 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => navigate("/servicios")}
            className="text-sm lg:text-base font-medium text-black hover:text-red-600 transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => navigate("/sobre-nosotros")}
            className="text-sm lg:text-base font-medium text-black hover:text-red-600 transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => navigate("/contacto")}
            className="text-sm lg:text-base font-medium text-black hover:text-red-600 transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => navigate("/reservar")}
          className="hidden md:block bg-red-600 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-medium hover:bg-red-700 transition-colors"
        >
          Reservar Cita
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5 xs:p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-5 h-5 xs:w-6 xs:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-3 xs:p-4 space-y-3 xs:space-y-4">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className="text-sm xs:text-base font-medium text-black hover:text-red-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  navigate("/servicios");
                  setIsMenuOpen(false);
                }}
                className="text-sm xs:text-base font-medium text-black hover:text-red-600 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => {
                  navigate("/sobre-nosotros");
                  setIsMenuOpen(false);
                }}
                className="text-sm xs:text-base font-medium text-black hover:text-red-600 transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => {
                  navigate("/contacto");
                  setIsMenuOpen(false);
                }}
                className="text-sm xs:text-base font-medium text-black hover:text-red-600 transition-colors"
              >
                Contacto
              </button>
              <button
                onClick={() => {
                  navigate("/reservar");
                  setIsMenuOpen(false);
                }}
                className="bg-red-600 text-white px-4 xs:px-6 py-1.5 xs:py-2 rounded-full text-sm xs:text-base font-medium hover:bg-red-700 transition-colors"
              >
                Reservar Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
