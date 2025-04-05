import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServiceCard } from "@/components/Services/ServiceCard";
import { StatisticsSection } from "@/components/Statistics/StatisticsSection";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import { ServiceComparisonSection } from "@/components/ServiceComparisonSection";

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
      <section className="py-10 bg-white">
        <div className="custom-container">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Elige tu Paquete</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes opciones para satisfacer tus necesidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-center">Lavado Básico</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ <span className="ml-2">Lavado Exterior</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Limpieza de Llantas</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Limpieza de Vidrios</span></li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Seleccionar Paquete
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Lavado Premium</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ <span className="ml-2">Todas las Características Básicas</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Aspirado Interior</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Protección con Cera</span></li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Seleccionar Paquete
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-center">Detallado Completo</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ <span className="ml-2">Todas las Características Premium</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Corrección de Pintura</span></li>
                <li className="flex items-center">✓ <span className="ml-2">Recubrimiento Cerámico</span></li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Seleccionar Paquete
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <ServiceComparisonSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
