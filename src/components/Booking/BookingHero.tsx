import { useNavigate } from "react-router-dom";

export function BookingHero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-500 text-white overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[2.5rem] md:text-[6rem] lg:text-[10rem] font-black text-red-200/20 select-none">RESERVA</h1>
      </div>

      {/* Main content */}
      <div className="custom-container relative z-10 py-10 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight">
              Reserva Tu Servicio
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-white/90 max-w-xl mb-6 sm:mb-8">
              Programa tu servicio de detallado de auto hoy y disfruta de una experiencia premium
            </p>

            {/* Service highlights */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
                ✓ Reserva Inmediata
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
                ✓ Servicio Garantizado
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
                ✓ Atención Personalizada
              </div>
            </div>
          </div>

          {/* Right content - Car image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Car wash illustration - using inline SVG as fallback */}
              <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-full h-full text-white">
                  <path fill="currentColor" d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v32h-80V96zm112 32v32h-80V96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v32zM336 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v32h-80V96zm112 32v32h-80V96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v32zM48 160h544c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48zm544 64c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM160 304c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm320 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zM160 256c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zm320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM48 352h544c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Business hours */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-xs sm:text-sm font-medium p-2 sm:p-3 border-l-2 border-white/50 pl-2 sm:pl-3">
          <p>Lun - Dom: 08:00 - 22:00</p>
        </div>
      </div>
    </section>
  );
}
