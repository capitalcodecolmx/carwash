
export function HeroSection() {
  return (
    <section className="relative bg-white pt-16 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 z-0"></div>
          
          {/* Hero Title */}
          <div className="relative z-10 text-center py-12 sm:py-20">
            <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-black text-red-600 leading-none tracking-tighter mb-6">
              LUJO
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experiencia premium en el cuidado de tu vehículo
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                Reservar Cita
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors">
                Ver Servicios
              </button>
            </div>
          </div>
          
          {/* Car Image */}
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
            <img 
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3"
              alt="Vista Superior de Auto de Lujo" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Features Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Productos y servicios de la más alta calidad</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">Servicio adaptado a tus necesidades</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Tecnología Avanzada</h3>
              <p className="text-gray-600">Equipamiento de última generación</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Garantía Total</h3>
              <p className="text-gray-600">Satisfacción garantizada en cada servicio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



