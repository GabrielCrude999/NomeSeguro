"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ResultStatus } from "@/app/components/ResultStatus";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Info } from "lucide-react";
import { SuggestionCard } from "@/app/components/SuggestionCard";

interface ResultsPageProps {
  searchedName: string;
  onBack: () => void;
}

export function ResultsPage({ searchedName, onBack }: ResultsPageProps) {
  const [status, setStatus] = useState<"available" | "unavailable">("available");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSearch, setNewSearch] = useState("");
  const [error, setError] = useState("");

  const [chosenName, setChosenName] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(true);

useEffect(() => {
  if (searchedName.trim().length < 4) {
    setStatus("available");
    setSuggestions([]);
    setError("O nome deve ter pelo menos 4 letras.");
    setLoading(false);
    return;
  }

  setLoading(true);
  setError("");

fetch(`/apiGue/name?name=${encodeURIComponent(searchedName)}`)
    .then((res) => {
      if (!res.ok) throw new Error("Erro de servidor");
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setStatus(data.exists ? "unavailable" : "available");
        setSuggestions(data.suggestions || []);
      }
    })
    .catch(() => {
      setError("Não foi possível verificar o nome no momento.");
    })
    .finally(() => setLoading(false));
}, [searchedName]);


  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSearch.trim()) return;
    window.location.href = `/results?name=${encodeURIComponent(newSearch.trim())}`;
  };

  const handleSelect = (name: string) => {
    setChosenName(name);
    setShowResults(false);
  };

  const handleBack = () => setShowResults(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Barra de pesquisa */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-3">
            <form
              onSubmit={handleNewSearch}
              className="flex gap-3 flex-1 max-w-3xl"
            >
              <Input
                type="text"
                placeholder="Fazer nova busca..."
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
                className="h-12 bg-white"
              />
              <Button type="submit" className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700">
                Buscar
              </Button>
            </form>
          </div>
        </section>

        {/* Condicional: sugestões/resultados ou mensagem oficial */}
        {showResults ? (
          <>
            {/* Resultado da busca */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4">
                {loading ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-300 border-t-emerald-600 rounded-full animate-spin"></div>
                    <p className="text-gray-700 text-lg">Verificando o nome...</p>
                  </div>
                ) : error ? (
                  <p className="text-red-600 text-center">{error}</p>
                ) : (
                  <ResultStatus companyName={searchedName} status={status} />
                )}
              </div>
            </section>

            {/* Sugestões */}
            {suggestions.length > 0 && (
              <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl mb-4 text-gray-900">Sugestões de nomes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {suggestions.map((s, i) => (
                      <SuggestionCard
                        key={i}
                        name={s}
                        available={true}
                        selected={false}
                        category=""
                        premium={false}
                        onSelect={handleSelect}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          chosenName && (
            <section className="py-12 bg-amber-50 border-t border-amber-200 mt-6">
              <div className="container mx-auto px-4 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 mt-1 text-amber-700" />
                  <div>
                    <p className="font-medium text-lg">
                      Nome escolhido: <strong>{chosenName}</strong>
                    </p>
                    <p className="mt-2 text-sm text-amber-800">
                      Este resultado não garante a posse do nome ou da marca.
                      O registro oficial deve ser feito no <strong>Guiché Único da Empresa</strong>.
                    </p>
                  </div>
                </div>

                {/* Botões abaixo da mensagem */}
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={handleBack}>
                    Voltar
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setShowResults(false)}
                  >
                    Encerrar
                  </Button>
                </div>
              </div>
            </section>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}
