"use client";

import { Card, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface ResultStatusProps {
  companyName: string;
  status: "available" | "unavailable" | "similar";
}

export function ResultStatus({ companyName, status }: ResultStatusProps) {
  const [animateIcon, setAnimateIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIcon(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const statusConfig = {
    available: {
      icon: CheckCircle,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      title: "Nome Disponível!",
      description: `Parabéns! O nome "${companyName}" está disponível e você pode utilizá-lo para sua empresa.`,
    },
    unavailable: {
      icon: XCircle,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      title: "Nome Indisponível",
      description: `Infelizmente o nome "${companyName}" já está registrado.`,
    },
    similar: {
      icon: AlertCircle,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      title: "Nome com Conflitos",
      description: `Encontramos nomes similares a "${companyName}".`,
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card
      className={`
        w-full
        max-w-xl
        ${config.bgColor}
        border
        ${config.borderColor}
        shadow-sm
      `}
    >
      <CardHeader className="flex flex-col gap-3 py-4 px-4 text-left">
        {/* Linha superior: Ícone + Título */}
        <div className="flex items-center gap-3">
          <div
            className={`
              w-10 h-10 rounded-full bg-white flex items-center justify-center
              transform transition-all duration-500 ease-out
              ${animateIcon ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}
            `}
          >
            <Icon className={`w-5 h-5 ${config.iconColor}`} />
          </div>

          <CardTitle className="text-base font-semibold">
            {config.title}
          </CardTitle>
        </div>

        {/* Descrição abaixo */}
        <p className="text-gray-700 text-sm leading-relaxed pl-13">
          {config.description}
        </p>
      </CardHeader>
    </Card>
  );
}
