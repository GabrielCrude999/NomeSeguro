import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span className="text-xl text-white">NomeSeguro</span>
            </div>
            <p className="text-sm text-gray-400">
              Encontre o nome perfeito para sua empresa sem conflitos.
            </p>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Verificação de Nomes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sugestões Criativas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relatórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4" id="contato">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@nomeseguro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+ (244) 999-999-999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Global</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 NomeSeguro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}