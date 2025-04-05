interface StatisticCardProps {
  value: string;
  label: string;
}

function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <p className="text-3xl font-bold text-red-600 mb-2">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatisticCard value="12,029" label="Clientes Satisfechos" />
          <StatisticCard value="1,560" label="Vehículos Detallados" />
          <StatisticCard value="10,000+" label="Horas de Servicio" />
        </div>
      </div>
    </section>
  );
}
