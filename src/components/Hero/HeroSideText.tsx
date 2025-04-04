export function HeroSideText() {
  return (
    <div className="absolute inset-y-0 flex justify-between w-full z-20">
      {/* Left side text */}
      <div className="self-center pl-10">
        <p className="text-2xl font-medium text-gray-800">
          Detallado
          <br />
          Profesional
        </p>
      </div>

      {/* Right side text */}
      <div className="self-center pr-10">
        <p className="text-2xl font-medium text-gray-800">
          Servicio
          <br />
          Premium
        </p>
      </div>
    </div>
  );
}