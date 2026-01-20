import { Card, CardContent } from "@/app/components/ui/card";
import { Search, Database, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Digite o Nome Desejado",
    description: "Insira o nome que você tem em mente para sua empresa"
  },
  {
    icon: Database,
    number: "2",
    title: "Verificamos a Disponibilidade",
    description: "Analisamos bases de dados para verificar conflitos e disponibilidade"
  },
  {
    icon: FileCheck,
    number: "3",
    title: "Receba Sugestões",
    description: "Veja o resultado e alternativas criativas caso o nome não esteja disponível"
  }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre o nome ideal para sua empresa em 3 passos simples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}