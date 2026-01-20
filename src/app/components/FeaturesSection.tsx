import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { FileSearch, Users, BarChart3, Shield, Clock, Database } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Verificação Instantânea",
    description: "Descubra em segundos se o nome da sua empresa está disponível e livre de conflitos."
  },
  {
    icon: Database,
    title: "Busca Abrangente",
    description: "Consultamos múltiplas bases de dados para garantir que seu nome esteja realmente disponível."
  },
  {
    icon: Shield,
    title: "Análise de Conflitos",
    description: "Identificamos possíveis conflitos com marcas e empresas existentes para proteger sua escolha."
  },
  {
    icon: BarChart3,
    title: "Sugestões Criativas",
    description: "Receba alternativas personalizadas baseadas no seu setor e preferências de negócio."
  },
  {
    icon: Clock,
    title: "Resultados Imediatos",
    description: "Não perca tempo. Obtenha respostas claras e sugestões instantaneamente."
  },
  {
    icon: Users,
    title: "Filtros por Setor",
    description: "Encontre nomes que se alinham perfeitamente com o seu nicho de mercado."
  }
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">
            Encontre o Nome Perfeito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todas as ferramentas que você precisa para escolher um nome único e disponível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}