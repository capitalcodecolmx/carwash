

interface ContactHeroProps {
  title: string;
  description: string;
}

export function ContactHero({ title, description }: ContactHeroProps) {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-6 sm:py-8 md:py-12 mb-6 sm:mb-8 md:mb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-2 xs:mb-3 sm:mb-4 tracking-tight">{title}</h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl leading-tight xs:leading-snug sm:leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
