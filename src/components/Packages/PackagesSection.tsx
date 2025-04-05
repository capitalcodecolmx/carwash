import { useNavigate } from "react-router-dom";

interface PackageItem {
  title: string;
  isPopular?: boolean;
  features: string[];
}

const packages: PackageItem[] = [
  {
    title: "Lavado Básico",
    features: [
      "Lavado Exterior",
      "Limpieza de Llantas",
      "Limpieza de Vidrios"
    ]
  },
  {
    title: "Lavado Premium",
    isPopular: true,
    features: [
      "Todas las Características Básicas",
      "Aspirado Interior",
      "Protección con Cera"
    ]
  },
  {
    title: "Detallado Completo",
    features: [
      "Todas las Características Premium",
      "Corrección de Pintura",
      "Recubrimiento Cerámico"
    ]
  }
];

export function PackagesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-white">
      <div className="custom-container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Elige tu Paquete</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos diferentes opciones para satisfacer tus necesidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
              {pkg.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-center">{pkg.title}</h3>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    ✓ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Seleccionar Paquete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}