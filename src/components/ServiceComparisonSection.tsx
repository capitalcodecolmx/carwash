interface ServiceFeature {
  name: string;
  basic: boolean;
  premium: boolean;
  deluxe: boolean;
}

export function ServiceComparisonSection() {
  const features: ServiceFeature[] = [
    {
      name: "Lavado Exterior",
      basic: true,
      premium: true,
      deluxe: true
    },
    {
      name: "Limpieza de Llantas",
      basic: true,
      premium: true,
      deluxe: true
    },
    {
      name: "Aspirado Interior",
      basic: false,
      premium: true,
      deluxe: true
    },
    {
      name: "Limpieza de Vidrios",
      basic: false,
      premium: true,
      deluxe: true
    },
    {
      name: "Encerado",
      basic: false,
      premium: false,
      deluxe: true
    },
    {
      name: "Detallado Interior",
      basic: false,
      premium: false,
      deluxe: true
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-16 bg-white">
      <div className="custom-container">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            COMPARACIÓN DE SERVICIOS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Encuentra el servicio perfecto para tu vehículo
          </p>
        </div>

        {/* Mobile view - Card layout */}
        <div className="md:hidden space-y-6 px-4">
          {['Básico', 'Premium', 'Deluxe'].map((plan, planIndex) => (
            <div key={plan} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{plan}</h3>
              <div className="space-y-3">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{feature.name}</span>
                    <span className="text-red-600 font-medium">
                      {feature[planIndex === 0 ? 'basic' : planIndex === 1 ? 'premium' : 'deluxe'] ? "✓" : "-"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - Table layout */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-md">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="p-4 text-left text-gray-900">Características</th>
                <th className="p-4 text-center text-gray-900 w-1/5">Básico</th>
                <th className="p-4 text-center text-gray-900 w-1/5">Premium</th>
                <th className="p-4 text-center text-gray-900 w-1/5">Deluxe</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-medium text-gray-900">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.basic ? (
                      <span className="text-red-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.premium ? (
                      <span className="text-red-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.deluxe ? (
                      <span className="text-red-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
