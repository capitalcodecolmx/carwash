import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceCard } from "@/components/Services/ServiceCard";
import { StatisticsSection } from "@/components/Statistics/StatisticsSection";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import { ServiceComparisonSection } from "@/components/ServiceComparisonSection";
import { PackagesSection } from "@/components/Packages/PackagesSection";

export function HomePage() {
  const navigate = useNavigate();

  const handleServiceDetails = () => {
    navigate("/services");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="custom-container">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Servicios que Ofrecemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brindamos servicios de detallado automotriz de la más alta calidad para todo tipo de vehículos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              image="https://images.unsplash.com/photo-1600320844644-0e144d76f5ae"
              title="Recubrimiento Cerámico"
              description="Protección duradera y brillo excepcional para tu vehículo"
              isPopular={true}
              onDetailsClick={handleServiceDetails}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f"
              title="Protección de Llantas"
              description="Cuidado completo y protección para tus llantas"
              onDetailsClick={handleServiceDetails}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1605152276897-4f618f831968"
              title="Corrección de Pintura"
              description="Eliminación de imperfecciones y restauración del brillo original"
              onDetailsClick={handleServiceDetails}
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1542362567-b07e54358753"
              title="Detallado Interior"
              description="Limpieza profunda y restauración completa del interior"
              onDetailsClick={handleServiceDetails}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* Service Comparison */}
      <ServiceComparisonSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
