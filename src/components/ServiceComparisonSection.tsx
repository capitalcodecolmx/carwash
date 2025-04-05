

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
    <section className="py-10 bg-white">
      <div className="custom-container">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4">COMPARACIÓN DE SERVICIOS</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra el servicio perfecto para tu vehículo
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-left">Características</th>
                <th className="p-4 text-center">Básico</th>
                <th className="p-4 text-center">Premium</th>
                <th className="p-4 text-center">Deluxe</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.basic ? "✓" : "-"}
                  </td>
                  <td className="p-4 text-center">
                    {feature.premium ? "✓" : "-"}
                  </td>
                  <td className="p-4 text-center">
                    {feature.deluxe ? "✓" : "-"}
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
