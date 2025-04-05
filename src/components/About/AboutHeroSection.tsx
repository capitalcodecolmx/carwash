import { useNavigate } from "react-router-dom";

export function AboutHeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-gray-900 text-white py-16 sm:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="custom-container relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Sobre Nosotros
              </span>
              <div className="absolute -bottom-3 left-0 h-1 w-24 bg-red-600"></div>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
              El servicio de detallado automotriz premium de España, dedicado a la perfección
            </p>
          </div>
          
          <button 
            onClick={() => navigate("/contacto")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center text-sm font-medium"
          >
            <span>Contáctanos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
