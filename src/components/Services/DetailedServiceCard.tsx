import { ServiceDetail } from "./types";

interface DetailedServiceCardProps {
  service: ServiceDetail;
  isExpanded: boolean;
  onToggleExpand: (serviceId: string) => void;
  onBookService: (serviceId: string) => void;
}

export function DetailedServiceCard({ service, isExpanded, onToggleExpand, onBookService }: DetailedServiceCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 ${isExpanded ? 'ring-2 ring-red-500' : 'hover:shadow-xl'}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {service.popular && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs uppercase font-bold tracking-wider py-1 px-2 rounded">
            Popular
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-24"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium text-sm">{service.duration}</span>
            <span className="text-white font-bold">{service.price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pt-4 pb-2">
            <h4 className="text-lg font-semibold mb-3">Características:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => onToggleExpand(service.id)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {isExpanded ? 'Menos Detalles' : 'Más Detalles'}
          </button>
          <button
            onClick={() => onBookService(service.id)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
