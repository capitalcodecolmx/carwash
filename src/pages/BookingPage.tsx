import { useState } from "react";

type ServicePackage = "basic" | "premium" | "ultimate";

export function BookingPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<ServicePackage>("basic");

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gray-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Reserva Tu Servicio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Programa tu servicio de detallado de auto hoy
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div>
                <label className="block text-lg font-medium mb-4">
                  Selecciona Tu Paquete
                </label>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPackage("basic")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "basic"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Lavado Básico</h3>
                    <p className="text-gray-600">
                      Lavado exterior, limpieza de ruedas, ventanas
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage("premium")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "premium"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Lavado Premium</h3>
                    <p className="text-gray-600">
                      Todas las características básicas + aspirado interior, protección de cera
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage("ultimate")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "ultimate"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Detallado Completo</h3>
                    <p className="text-gray-600">
                      Todas las características premium + corrección de pintura, recubrimiento cerámico
                    </p>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Ingresa tu número de teléfono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Reservar Ahora
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
