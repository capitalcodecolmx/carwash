import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/Hero/HeroSection';
import { ServiceCard } from '@/components/Services/ServiceCard';
import { TestimonialCard } from '@/components/Testimonials/TestimonialCard';
import { ServiceComparisonSection } from '@/components/ServiceComparisonSection';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios de lavado y detallado
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard 
              image="https://images.unsplash.com/photo-1600320844644-0e144d76f5ae"
              title="Lavado Manual DIY"
              description="Estaciones de autoservicio equipadas con herramientas profesionales."
              onDetailsClick={() => navigate("/services")}
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f"
              title="Lavado Premium"
              description="Servicio completo con atención al detalle y productos premium."
              isPopular={true}
              onDetailsClick={() => navigate("/services")}
            />
            <ServiceCard 
              image="https://images.unsplash.com/photo-1516974486242-3fdb2c5c7003"
              title="Detallado Profesional"
              description="Tratamiento completo interior y exterior para su vehículo."
              onDetailsClick={() => navigate("/services")}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experiencias reales de clientes satisfechos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <TestimonialCard 
              content="El mejor servicio de lavado que he encontrado. El personal es muy profesional y cuidadoso."
              author="Carlos Méndez"
              role="Cliente frecuente"
            />
            <TestimonialCard 
              content="Increíble atención al detalle. Mi auto quedó como nuevo."
              author="Ana García"
              role="Cliente verificado"
            />
            <TestimonialCard 
              content="Excelente relación calidad-precio. Definitivamente volveré."
              author="Roberto Sánchez"
              role="Cliente nuevo"
            />
          </div>
        </div>
      </section>

      <ServiceComparisonSection />
    </>
  );
}
