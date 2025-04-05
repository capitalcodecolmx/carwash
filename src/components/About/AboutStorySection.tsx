export function AboutStorySection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="custom-container">
        {/* Mobile title - visible only on small screens */}
        <div className="block lg:hidden mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative inline-block">
            Nuestra Historia
            <div className="absolute -bottom-2 left-0 h-1 w-12 bg-red-600"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image side */}
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f"
                alt="Historia de Detallado Auto"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating card - hidden on very small screens */}
            <div className="hidden xs:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-[200px] sm:max-w-xs">
              <p className="text-xs sm:text-sm text-gray-700 italic">
                "Nuestra pasión es transformar cada vehículo en una obra maestra reluciente."
              </p>
              <div className="mt-2 flex items-center">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  DA
                </div>
                <div className="ml-2">
                  <p className="text-xs sm:text-sm font-medium">Carlos Martínez</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Fundador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-2 lg:order-2">
            {/* Desktop title - hidden on small screens */}
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Nuestra Historia
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-red-600"></div>
              </h2>
            </div>

            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Fundada en 2010, <span className="font-semibold">Detallado Auto</span> comenzó como un pequeño negocio
              familiar con una misión clara: proporcionar servicios de detallado automotriz excepcionales
              que superaran las expectativas de nuestros clientes.
            </p>

            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Con años de experiencia en la industria automotriz, hemos construido nuestra reputación
              ofreciendo servicios de detallado excepcionales tanto a entusiastas de automóviles exigentes
              como a conductores cotidianos en toda España.
            </p>

            <p className="text-gray-700 text-sm sm:text-base">
              Hoy, nos enorgullecemos de ser reconocidos como líderes en la industria del detallado automotriz,
              manteniendo los mismos valores fundamentales que nos impulsaron desde el principio: calidad,
              atención al detalle y satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
