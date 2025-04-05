interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function AboutValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios fundamentales que guían cada servicio que ofrecemos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            } 
            title="Calidad Primero" 
            description="Utilizamos solo productos de la más alta calidad y técnicas avanzadas para garantizar resultados excepcionales."
          />
          
          <ValueCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            } 
            title="Satisfacción del Cliente" 
            description="Nos esforzamos por superar las expectativas de cada cliente, asegurando una experiencia excepcional."
          />
          
          <ValueCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            } 
            title="Atención al Detalle" 
            description="Cada vehículo recibe una atención meticulosa, cuidando hasta el más mínimo detalle para un resultado perfecto."
          />
          
          <ValueCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            } 
            title="Excelencia Profesional" 
            description="Nuestro equipo de profesionales certificados está constantemente actualizándose con las últimas técnicas y tecnologías."
          />
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 md:mb-0 md:mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Nuestra Misión</h3>
              <p className="text-gray-700">
                Proporcionar servicios de detallado automotriz sin igual que superen las expectativas de nuestros 
                clientes, manteniendo los más altos estándares de calidad y profesionalismo. Nos esforzamos por 
                ser reconocidos como el referente de excelencia en la industria del detallado automotriz en España.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
