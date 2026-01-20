export function StatsSection() {
  const stats = [
    { value: "50M+", label: "Nomes verificados" },
    { value: "300K+", label: "Empresas criadas" },
    { value: "95%", label: "Taxa de sucesso" },
    { value: "5 seg", label: "Tempo médio de busca" }
  ];

  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2 text-white">{stat.value}</div>
              <div className="text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}