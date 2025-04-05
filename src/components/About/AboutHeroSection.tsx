import { useNavigate } from "react-router-dom";

export function AboutHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-red-700 to-red-800 text-white py-12 sm:py-16 overflow-hidden">
      {/* Background pattern with bubbles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/bubbles-pattern.svg')] bg-repeat opacity-30"></div>
      </div>

      {/* Content */}
      <div className="custom-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              ¡Hagamos Que Brille Y Resplandezca!
            </h1>
            <p className="text-sm sm:text-base text-gray-200 mb-6 max-w-xl">
              Es un hecho establecido desde hace tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño.
            </p>

            <button
              onClick={() => navigate("/reservar")}
              className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              Reserva Un Servicio
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold">123+</span>
                <span className="text-sm text-gray-300">Empleados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold">500K+</span>
                <span className="text-sm text-gray-300">Miembros</span>
              </div>
            </div>
          </div>

          {/* Right content - Car image */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <img
              src="/TXL.png"
              alt="Vehículo de lujo"
              className="w-full h-auto object-contain max-w-lg mx-auto"
            />
            {/* You can add bubbles effect with absolute positioned divs if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
