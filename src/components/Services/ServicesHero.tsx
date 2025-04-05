import { ServiceCategory } from "./types";

interface ServicesHeroProps {
  activeCategory: ServiceCategory;
  setActiveCategory: (category: ServiceCategory) => void;
}

export function ServicesHero({ activeCategory, setActiveCategory }: ServicesHeroProps) {
  return (
    <section className="relative pt-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Servicios de <span className="text-red-500">Detallado</span> Profesional
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Ofrecemos una amplia gama de servicios de detallado automotriz de alta calidad, diseñados para mantener su vehículo en condiciones óptimas y con una apariencia excepcional.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-red-600 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              Todos los Servicios
            </button>
            <button 
              onClick={() => setActiveCategory("exterior")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "exterior" ? "bg-red-600 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              Exterior
            </button>
            <button 
              onClick={() => setActiveCategory("interior")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "interior" ? "bg-red-600 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              Interior
            </button>
            <button 
              onClick={() => setActiveCategory("protection")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "protection" ? "bg-red-600 text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              Protección
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
