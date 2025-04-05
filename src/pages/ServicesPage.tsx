import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importar componentes
import { ServicesHero } from "../components/Services/ServicesHero";
import { ServicesList } from "../components/Services/ServicesList";
import { ProcessSection } from "../components/Services/ProcessSection";
import { FAQSection } from "../components/Services/FAQSection";
import { CTASection } from "../components/Services/CTASection";

// Importar tipos y datos
import { ServiceCategory } from "../components/Services/types";
import { servicesData } from "../components/Services/servicesData";

export function ServicesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleBookService = (serviceId: string) => {
    navigate(`/reservar?service=${serviceId}`);
  };

  const toggleServiceExpansion = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };

  const handleReserveClick = () => {
    navigate("/reservar");
  };

  const handleContactClick = () => {
    navigate("/contacto");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ServicesHero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Services Section */}
      <ServicesList
        services={servicesData}
        activeCategory={activeCategory}
        expandedService={expandedService}
        onToggleExpand={toggleServiceExpansion}
        onBookService={handleBookService}
      />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection
        onReserveClick={handleReserveClick}
        onContactClick={handleContactClick}
      />
    </div>
  );
}
