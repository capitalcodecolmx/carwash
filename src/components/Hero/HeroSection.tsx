import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white pt-4 my-4">
      {/* Book a car wash button */}
      <div className="custom-container">
        <button
          onClick={() => navigate("/reservar")}
          className="flex items-center bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full w-fit mb-4 hover:bg-red-700 transition-colors"
        >
          <div className="bg-white p-1 rounded-full mr-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h5.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-medium leading-tight">Reserva un lavado de auto con el especialista más grande de España</span>
        </button>

        {/* Main Hero Section */}
        <div className="relative">
          {/* DETALLADO AUTO Text with Service Tags */}
          <div className="relative z-10">
            <div className="relative overflow-hidden">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[150px] font-black leading-none tracking-tighter relative overflow-hidden">
                <span className="bg-gradient-to-r from-black via-black to-black/80 bg-clip-text text-transparent inline-block">DETALLADO AUTO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-red-400/10 pointer-events-none"></div>
              </h1>

              {/* Service Tags - Responsive positioning */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Mobile tags (fewer tags, different positions) */}
                <div className="sm:hidden">
                  <div className="absolute top-[5%] left-[5%] bg-white text-[10px] px-1.5 py-0.5 rounded-md shadow-sm">Lavado</div>
                  <div className="absolute top-[5%] right-[5%] bg-white text-[10px] px-1.5 py-0.5 rounded-md shadow-sm">Detallado</div>
                  <div className="absolute bottom-[10%] left-[10%] bg-white text-[10px] px-1.5 py-0.5 rounded-md shadow-sm">Pulido</div>
                  <div className="absolute bottom-[10%] right-[10%] bg-white text-[10px] px-1.5 py-0.5 rounded-md shadow-sm">Brillo</div>
                </div>

                {/* Desktop tags (all tags, original positions) */}
                <div className="hidden sm:block">
                  <div className="absolute top-[10%] left-[5%] bg-white text-xs px-2 py-1 rounded-md shadow-sm">Lavado</div>
                  <div className="absolute top-[10%] left-[30%] bg-white text-xs px-2 py-1 rounded-md shadow-sm">Cerámica</div>
                  <div className="absolute top-[10%] right-[30%] bg-white text-xs px-2 py-1 rounded-md shadow-sm">Brillo</div>
                  <div className="absolute top-[10%] right-[5%] bg-white text-xs px-2 py-1 rounded-md shadow-sm">Detallado</div>
                  <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white text-xs px-2 py-1 rounded-md shadow-sm">Pulido</div>
                  <div className="absolute top-[60%] right-[40%] bg-white text-xs px-2 py-1 rounded-md shadow-sm">Reparación</div>
                </div>
              </div>
            </div>
          </div>

          {/* Car Image with Overlay */}
          <div className="relative mt-2 sm:mt-4 rounded-xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-transparent to-red-400/30 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80"
              alt="Detallado de Autos"
              className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-3xl"
            />

            {/* Info Boxes - Responsive layout */}
            <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 left-2 xs:left-3 sm:left-4 md:left-6 right-2 xs:right-3 sm:right-4 md:right-6 z-20 flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4">
              {/* Left Box */}
              <div className="bg-white p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl shadow-lg sm:w-1/3 order-2 sm:order-1">
                <h3 className="font-bold text-xs xs:text-sm sm:text-base leading-tight">Nuestros Clientes son la parte más importante de nuestro negocio</h3>
                <div className="flex items-center mt-1 xs:mt-2 sm:mt-3">
                  <button
                    onClick={() => navigate("/sobre-nosotros")}
                    className="text-xs xs:text-sm font-medium flex items-center hover:text-red-600 transition-colors"
                  >
                    <span>Leer Más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Middle Box - Hidden on small screens, visible on medium and up */}
              <div className="hidden sm:flex bg-white p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl shadow-lg w-1/3 items-center justify-center order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Logo Mercedes"
                  className="w-full h-auto max-h-12 sm:max-h-16 md:max-h-20 object-contain"
                />
              </div>

              {/* Right Box */}
              <div className="bg-white p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl shadow-lg sm:w-1/3 order-3">
                <p className="text-[10px] xs:text-xs leading-tight mb-1 xs:mb-2">Nuestros profesionales proporcionan un detallado completo, interior y limpieza profunda</p>
                <div className="mt-1 xs:mt-2">
                  <div className="text-[10px] xs:text-xs text-gray-500 mb-0.5 xs:mb-1">100% clientes satisfechos</div>
                  <div className="flex items-center">
                    <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">4.6</span>
                    <div className="ml-1 xs:ml-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 xs:h-3 xs:w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-[10px] xs:text-xs text-gray-500">8,520 reseñas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Buttons */}
          <div className="mt-4 xs:mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
            <button
              onClick={() => navigate("/reservar")}
              className="bg-red-600 text-white px-6 py-2.5 text-sm rounded-full font-medium hover:bg-red-700 transition-colors w-full sm:w-[180px] md:w-[200px]"
            >
              Reservar Cita
            </button>
            <button
              onClick={() => navigate("/servicios")}
              className="border border-red-600 text-red-600 px-6 py-2.5 text-sm rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors w-full sm:w-[180px] md:w-[200px]"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
