

interface LocationMapProps {
  title: string;
  address: string;
}

export function LocationMap({ title, address }: LocationMapProps) {
  return (
    <div className="container mx-auto px-4 mt-8 xs:mt-10 sm:mt-16">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 text-gray-800">{title}</h2>
      <div className="bg-gray-200 rounded-xl overflow-hidden h-40 xs:h-48 sm:h-64 md:h-96 shadow-md">
        {/* Placeholder for Google Maps */}
        <div className="w-full h-full flex flex-col items-center justify-center p-3 xs:p-4 text-center">
          <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-gray-400 mb-1 xs:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-500 text-xs xs:text-sm sm:text-base">Mapa de ubicación</p>
          <p className="text-gray-400 text-xs mt-0.5 xs:mt-1">{address}</p>
        </div>
      </div>
    </div>
  );
}
