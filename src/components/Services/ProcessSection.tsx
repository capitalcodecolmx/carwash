export function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Detallado</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seguimos un proceso meticuloso para garantizar resultados excepcionales en cada servicio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-3">Inspección</h3>
            <p className="text-gray-600">Evaluamos minuciosamente el estado actual de su vehículo para identificar áreas problemáticas.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-3">Preparación</h3>
            <p className="text-gray-600">Seleccionamos los productos y herramientas adecuados para el tratamiento específico de su vehículo.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-3">Ejecución</h3>
            <p className="text-gray-600">Aplicamos técnicas profesionales y productos de alta calidad para lograr resultados óptimos.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-bold mb-3">Revisión Final</h3>
            <p className="text-gray-600">Inspeccionamos meticulosamente el trabajo realizado para garantizar la máxima calidad y satisfacción.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
