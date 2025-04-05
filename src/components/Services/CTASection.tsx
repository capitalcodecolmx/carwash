interface CTASectionProps {
  onReserveClick: () => void;
  onContactClick: () => void;
}

export function CTASection({ onReserveClick, onContactClick }: CTASectionProps) {
  return (
    <section className="py-8 sm:py-10 md:py-16 relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mx-2 sm:mx-4 my-6 sm:my-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ctabg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-10"></div>
      </div>

      <div className="custom-container relative z-20 px-3 sm:px-4 md:px-6">
        <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">¿Listo para transformar su vehículo?</h2>

          <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Programe su cita hoy y experimente la <span className="font-semibold">diferencia de un detallado profesional</span>
          </p>

          {/* Buttons side by side on all screen sizes, with mobile optimizations */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-2 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={onReserveClick}
              className="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-1 sm:gap-2 w-full text-xs sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Reservar Ahora</span>
            </button>
            <button
              onClick={onContactClick}
              className="px-3 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-1 sm:gap-2 w-full text-xs sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contactar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
