interface CTASectionProps {
  onReserveClick: () => void;
  onContactClick: () => void;
}

export function CTASection({ onReserveClick, onContactClick }: CTASectionProps) {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para transformar su vehículo?</h2>
          <p className="text-gray-300 mb-8">
            Programe su cita hoy y experimente la diferencia de un detallado profesional
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onReserveClick} 
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Reservar Ahora
            </button>
            <button 
              onClick={onContactClick} 
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
