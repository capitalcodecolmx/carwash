export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios de detallado
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">¿Con qué frecuencia debo detallar mi vehículo?</h3>
            <p className="text-gray-600">Recomendamos un detallado completo cada 3-4 meses para mantener su vehículo en óptimas condiciones. Sin embargo, esto puede variar según el uso, las condiciones climáticas y dónde estaciona su vehículo habitualmente.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo toma un detallado completo?</h3>
            <p className="text-gray-600">Un detallado completo puede tomar entre 4-8 horas dependiendo del tamaño del vehículo y su condición. Servicios premium como la corrección de pintura o la aplicación de recubrimientos cerámicos pueden requerir más tiempo.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">¿Cuál es la diferencia entre encerado y recubrimiento cerámico?</h3>
            <p className="text-gray-600">El encerado proporciona un brillo y protección temporal (1-2 meses), mientras que el recubrimiento cerámico ofrece una protección superior y duradera (2-5 años) con mayor resistencia a rayones, UV y contaminantes.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">¿Puedo estar presente durante el servicio?</h3>
            <p className="text-gray-600">Sí, puede permanecer en nuestra sala de espera o incluso observar el proceso. Sin embargo, para servicios extensos, recomendamos dejar el vehículo y recogerlo más tarde para mayor comodidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
