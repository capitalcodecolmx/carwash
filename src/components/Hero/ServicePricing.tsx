export function ServicePricing() {
  return (
    <div className="relative z-20 bg-white/90 backdrop-blur-sm py-8 px-6 mx-auto max-w-4xl rounded-xl shadow-lg -mb-16">
      <div className="grid grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Básico</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">$999</p>
          <p className="mt-1 text-sm text-gray-500">Lavado exterior e interior</p>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">$1,999</p>
          <p className="mt-1 text-sm text-gray-500">Detallado completo</p>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Lujo</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">$2,999</p>
          <p className="mt-1 text-sm text-gray-500">Detallado + Cerámico</p>
        </div>
      </div>
    </div>
  );
}