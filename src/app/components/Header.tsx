import { Button } from "@/app/components/ui/button";
import { ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-emerald-600" />
          <span className="text-xl font-bold text-gray-900">NomeSeguro</span>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#recursos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Recursos
          </a>
          <a href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
            Como Funciona
          </a>
          <a href="#contato" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}