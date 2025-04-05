import React from 'react';

interface ContactHeroProps {
  title: string;
  description: string;
}

export function ContactHero({ title, description }: ContactHeroProps) {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-8 sm:py-12 mb-8 sm:mb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-black mb-3 sm:mb-4">{title}</h1>
        <p className="text-base xs:text-lg text-gray-600 max-w-2xl leading-snug sm:leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
