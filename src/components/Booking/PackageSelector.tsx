export type ServicePackage = "basic" | "premium" | "ultimate";

interface PackageSelectorProps {
  selectedPackage: ServicePackage;
  onPackageSelect: (pkg: ServicePackage) => void;
}

export function PackageSelector({ selectedPackage, onPackageSelect }: PackageSelectorProps) {
  return (
    <div className="mb-8">
      <label className="block text-base xs:text-lg font-medium mb-4 text-gray-700">
        Selecciona Tu Paquete
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Basic Package */}
        <button
          type="button"
          onClick={() => onPackageSelect("basic")}
          className={`group p-4 sm:p-5 border-2 rounded-xl text-left transition-all duration-200 hover:shadow-lg relative overflow-hidden ${
            selectedPackage === "basic"
              ? "border-red-600 bg-red-50/70 shadow-sm"
              : "border-gray-200 hover:border-red-300"
          }`}
        >
          {selectedPackage === "basic" && (
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1 shadow-sm">
                Seleccionado
              </div>
            </div>
          )}

          <div className="flex items-start">
            <div className={`p-2 rounded-full mr-3 transition-colors ${
              selectedPackage === "basic" ? "bg-red-600" : "bg-gray-100 group-hover:bg-red-100"
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${
                selectedPackage === "basic" ? "text-white" : "text-gray-500 group-hover:text-red-500"
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg xs:text-xl font-bold mb-1 group-hover:text-red-600 transition-colors">Lavado Básico</h3>
              <p className="text-sm xs:text-base text-gray-600">
                Lavado exterior, limpieza de ruedas, ventanas
              </p>
              <div className="mt-3 flex items-baseline">
                <div className="text-lg font-bold text-red-600">19,99€</div>
                <div className="ml-1 text-xs text-gray-500">/ servicio</div>
              </div>
            </div>
          </div>
        </button>

        {/* Premium Package */}
        <button
          type="button"
          onClick={() => onPackageSelect("premium")}
          className={`group p-4 sm:p-5 border-2 rounded-xl text-left transition-all duration-200 hover:shadow-lg relative overflow-hidden ${
            selectedPackage === "premium"
              ? "border-red-600 bg-red-50/70 shadow-sm"
              : "border-gray-200 hover:border-red-300"
          }`}
        >
          {selectedPackage === "premium" && (
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1 shadow-sm">
                Seleccionado
              </div>
            </div>
          )}

          <div className="flex items-start">
            <div className={`p-2 rounded-full mr-3 transition-colors ${
              selectedPackage === "premium" ? "bg-red-600" : "bg-gray-100 group-hover:bg-red-100"
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${
                selectedPackage === "premium" ? "text-white" : "text-gray-500 group-hover:text-red-500"
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg xs:text-xl font-bold mb-1 group-hover:text-red-600 transition-colors">Lavado Premium</h3>
              <p className="text-sm xs:text-base text-gray-600">
                Todas las características básicas + aspirado interior, protección de cera
              </p>
              <div className="mt-3 flex items-baseline">
                <div className="text-lg font-bold text-red-600">39,99€</div>
                <div className="ml-1 text-xs text-gray-500">/ servicio</div>
              </div>
            </div>
          </div>
        </button>

        {/* Ultimate Package */}
        <button
          type="button"
          onClick={() => onPackageSelect("ultimate")}
          className={`group p-4 sm:p-5 border-2 rounded-xl text-left transition-all duration-200 hover:shadow-lg relative overflow-hidden ${
            selectedPackage === "ultimate"
              ? "border-red-600 bg-red-50/70 shadow-sm"
              : "border-gray-200 hover:border-red-300"
          }`}
        >
          {selectedPackage === "ultimate" && (
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-2 -translate-y-1 shadow-sm">
                Seleccionado
              </div>
            </div>
          )}

          <div className="flex items-start">
            <div className={`p-2 rounded-full mr-3 transition-colors ${
              selectedPackage === "ultimate" ? "bg-red-600" : "bg-gray-100 group-hover:bg-red-100"
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${
                selectedPackage === "ultimate" ? "text-white" : "text-gray-500 group-hover:text-red-500"
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg xs:text-xl font-bold mb-1 group-hover:text-red-600 transition-colors">Detallado Completo</h3>
              <p className="text-sm xs:text-base text-gray-600">
                Todas las características premium + corrección de pintura, recubrimiento cerámico
              </p>
              <div className="mt-3 flex items-baseline">
                <div className="text-lg font-bold text-red-600">89,99€</div>
                <div className="ml-1 text-xs text-gray-500">/ servicio</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
