import { ServiceCategory } from "./types";

interface ServicesHeroProps {
  activeCategory: ServiceCategory;
  setActiveCategory: (category: ServiceCategory) => void;
}

export function ServicesHero({ setActiveCategory }: ServicesHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-500 text-white overflow-hidden">
      {/* Marca de agua de fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[2.5rem] md:text-[6rem] lg:text-[10rem] font-black text-red-200/30 select-none">AUTOLAVADO</h1>
      </div>

      {/* Contenido principal */}
      <div className="custom-container relative z-10 flex flex-col min-h-[400px] md:min-h-[500px]">
        {/* Imagen del coche */}
        <div className="flex justify-end items-center pt-10">
          <img
            src="/images/yellow-sports-car.png"
            alt="Coche Deportivo Amarillo"
            className="max-w-[350px] md:max-w-[500px] lg:max-w-[600px] w-full h-auto z-20 relative"
          />
        </div>

        {/* Horario comercial */}
        <div className="absolute bottom-24 left-8 text-sm font-medium p-4 border-l border-white pl-4">
          <p>Lun - Dom: 08:00 - 22:00</p>
        </div>

        {/* Indicador de desplazamiento */}
        <div className="absolute bottom-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Características del servicio */}
      <div className="bg-white text-black py-6 relative z-20 border-t border-gray-200">
        <div className="custom-container grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-start p-4 border-r md:border-r border-gray-200">
            <div className="mr-3">
              <span className="text-4xl md:text-5xl font-black text-gray-900">01</span>
            </div>
            <div>
              <p className="text-xs md:text-sm text-red-600 uppercase font-bold">CALIDAD</p>
              <p className="text-base md:text-lg font-semibold">GARANTIZADA</p>
            </div>
          </div>

          <div className="flex items-start p-4 md:border-r border-gray-200">
            <div className="mr-3">
              <span className="text-4xl md:text-5xl font-black text-gray-900">02</span>
            </div>
            <div>
              <p className="text-xs md:text-sm text-red-600 uppercase font-bold">ECOLÓGICO</p>
              <p className="text-base md:text-lg font-semibold">AMIGABLE</p>
            </div>
          </div>

          <div className="flex items-start p-4 border-r md:border-r border-gray-200">
            <div className="mr-3">
              <span className="text-4xl md:text-5xl font-black text-gray-900">03</span>
            </div>
            <div>
              <p className="text-xs md:text-sm text-red-600 uppercase font-bold">PROCESO</p>
              <p className="text-base md:text-lg font-semibold">RÁPIDO</p>
            </div>
          </div>

          <div className="flex items-start p-4">
            <div className="mr-3">
              <span className="text-4xl md:text-5xl font-black text-gray-900">04</span>
            </div>
            <div>
              <p className="text-xs md:text-sm text-red-600 uppercase font-bold">ALTAMENTE</p>
              <p className="text-base md:text-lg font-semibold">ECONÓMICO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de categoría ocultos para funcionalidad */}
      <div className="hidden">
        <button onClick={() => setActiveCategory("all")}>Todos los Servicios</button>
        <button onClick={() => setActiveCategory("exterior")}>Exterior</button>
        <button onClick={() => setActiveCategory("interior")}>Interior</button>
        <button onClick={() => setActiveCategory("protection")}>Protección</button>
      </div>
    </section>
  );
}
