import { Button } from "@/app/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl mb-6 text-white">
          Pronto para Encontrar o Nome Perfeito?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Comece agora e descubra se o nome da sua empresa está disponível. Simples, rápido e sem complicações.
        </p>
      </div>
    </section>
  );
}