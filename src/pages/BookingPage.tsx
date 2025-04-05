import { useState } from "react";
import { BookingHero } from "@/components/Booking/BookingHero";
import { PackageSelector, ServicePackage } from "@/components/Booking/PackageSelector";
import { BookingForm } from "@/components/Booking/BookingForm";

export function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>("basic");

  return (
    <div className="flex flex-col min-h-screen">
      <BookingHero />

      <section className="py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="custom-container">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-16 right-0 w-32 h-32 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-40 -left-16 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8 relative z-10">
            {/* Header with icon */}
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="bg-red-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Completa tu Reserva</h2>
            </div>

            {/* Step indicator */}
            <div className="flex items-center justify-between mb-8 sm:mb-10 px-2">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="text-xs mt-1 text-gray-600">Paquete</div>
              </div>
              <div className="flex-1 h-1 bg-red-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-gray-600 font-bold text-sm">2</div>
                <div className="text-xs mt-1 text-gray-600">Contacto</div>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">3</div>
                <div className="text-xs mt-1 text-gray-600">Confirmación</div>
              </div>
            </div>

            <PackageSelector
              selectedPackage={selectedPackage}
              onPackageSelect={setSelectedPackage}
            />

            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-red-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Información de Contacto</h3>
              </div>
              <BookingForm selectedPackage={selectedPackage} />
            </div>
          </div>

          {/* Trust badges */}
          <div className="max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-xs sm:text-sm">100% Seguro</div>
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs sm:text-sm">Reserva Rápida</div>
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-xs sm:text-sm">Garantía de Calidad</div>
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <div className="text-xs sm:text-sm">Pago Seguro</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
