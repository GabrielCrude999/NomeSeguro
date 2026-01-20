import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Search, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onSearch: (name: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();

    // Validação mínima de 4 caracteres
    if (trimmedQuery.length < 4) {
      setError("O nome deve ter no mínimo 4 caracteres.");
      return;
    }

    // Validação para não começar com número
    if (/^\d/.test(trimmedQuery)) {
      setError("O nome não pode começar com número.");
      return;
    }

    setError("");
    onSearch(trimmedQuery);
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            Seu nome. Sua ideia.{" "}
            <span className="text-emerald-600">Sem conflitos.</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Confira se o nome da sua empresa está livre e encontre alternativas criativas para o seu setor.
          </p>
          
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Digite o nome da empresa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-4 pr-4 text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700">
                <Search className="w-5 h-5 mr-2" />
                Verificar
              </Button>
            </div>
          </form>

          {error && (
            <p className="mt-2 text-sm text-red-600 text-center">
              {error}
            </p>
          )}
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mt-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Dados atualizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Resultados instantâneos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
