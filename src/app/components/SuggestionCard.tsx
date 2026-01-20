"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";

interface SuggestionCardProps {
  name: string;
  available: boolean;
  selected: boolean;
  category?: string;
  premium?: boolean;
  onSelect: (name: string) => void;
}

export function SuggestionCard({ name, available, selected, category, premium, onSelect }: SuggestionCardProps) {
  return (
    <Card className={`transition-all hover:shadow-md ${selected ? "border-emerald-600 border-2" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          {premium && (
            <Badge className="bg-amber-100 text-amber-700 border-amber-300">Premium</Badge>
          )}
        </div>
        {category && <Badge variant="outline" className="w-fit mt-2">{category}</Badge>}
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {available ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-600 font-medium">Disponível</span>
              </>
            ) : (
              <span className="text-sm text-gray-500">Verificando...</span>
            )}
          </div>

          <Button
            size="sm"
            className={`bg-emerald-600 hover:bg-emerald-700 ${selected ? "cursor-not-allowed" : ""}`}
            onClick={() => onSelect(name)}
            disabled={selected}
          >
            {selected ? "Escolhido" : "Escolher"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
