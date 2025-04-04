interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  isPopular?: boolean;
  onDetailsClick: () => void;
}

export function ServiceCard({ image, title, description, isPopular, onDetailsClick }: ServiceCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10"></div>
      <img 
        src={image}
        alt={title}
        className="w-full h-64 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
        {isPopular && (
          <div className="bg-black text-white text-xs uppercase font-bold tracking-wider py-1 px-2 rounded inline-block mb-2">
            Popular
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-white/80 mb-4">{description}</p>
        <button 
          onClick={onDetailsClick}
          className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-colors"
        >
          Más Detalles
        </button>
      </div>
    </div>
  );
}
