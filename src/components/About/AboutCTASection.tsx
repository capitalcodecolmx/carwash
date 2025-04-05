import { useNavigate } from "react-router-dom";

export function AboutCTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-8 sm:py-10 md:py-16 relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mx-2 sm:mx-4 my-6 sm:my-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="custom-container relative z-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experimenta el Mejor Servicio de Detallado Automotriz
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Nuestro equipo de profesionales está listo para transformar tu vehículo y superar tus expectativas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/servicios")}
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => navigate("/reservar")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
