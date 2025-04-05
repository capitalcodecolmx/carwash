

interface LocationMapProps {
  title: string;
  address: string;
}

export function LocationMap({ title, address }: LocationMapProps) {
  return (
    <div className="container mx-auto px-4 mt-8 xs:mt-10 sm:mt-16">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 text-gray-800">{title}</h2>
      <div className="rounded-xl overflow-hidden h-40 xs:h-48 sm:h-64 md:h-96 shadow-md relative">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1854901587584!2d-3.7031596235302367!3d40.41695905518952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880364a07d7%3A0x1e57da8ca6eaf378!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1689871234567!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del negocio"
          aria-label="Mapa mostrando la ubicación de nuestro negocio"
        />

        {/* Overlay with address on small screens */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 xs:p-3 text-center sm:hidden">
          <p className="text-xs xs:text-sm truncate">{address}</p>
        </div>
      </div>

      {/* Address display for larger screens */}
      <div className="hidden sm:block mt-3 text-center text-gray-600 text-sm">
        <p>{address}</p>
      </div>
    </div>
  );
}
