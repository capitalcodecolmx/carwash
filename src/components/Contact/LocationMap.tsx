import React from 'react';

interface LocationMapProps {
  title: string;
  address: string;
}

export function LocationMap({ title, address }: LocationMapProps) {
  return (
    <div className="container mx-auto px-4 mt-10 xs:mt-12 sm:mt-16">
      <h2 className="text-xl xs:text-2xl font-bold mb-4 xs:mb-5 text-gray-800">{title}</h2>
      <div className="bg-gray-200 rounded-xl overflow-hidden h-48 xs:h-64 md:h-96 shadow-md">
        {/* Placeholder for Google Maps */}
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
          <svg className="w-8 h-8 xs:w-10 xs:h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-500 text-sm xs:text-base">Mapa de ubicación</p>
          <p className="text-gray-400 text-xs mt-1">{address}</p>
        </div>
      </div>
    </div>
  );
}
