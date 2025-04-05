import { ServiceDetail, ServiceCategory } from "./types";
import { DetailedServiceCard } from "./DetailedServiceCard";

interface ServicesListProps {
  services: ServiceDetail[];
  activeCategory: ServiceCategory;
  expandedService: string | null;
  onToggleExpand: (serviceId: string) => void;
  onBookService: (serviceId: string) => void;
}

export function ServicesList({ 
  services, 
  activeCategory, 
  expandedService, 
  onToggleExpand, 
  onBookService 
}: ServicesListProps) {
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <DetailedServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedService === service.id}
              onToggleExpand={onToggleExpand}
              onBookService={onBookService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
