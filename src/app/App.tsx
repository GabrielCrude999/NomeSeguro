import { useState } from "react";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { StatsSection } from "@/app/components/StatsSection";
import { HowItWorksSection } from "@/app/components/HowItWorksSection";
import { CTASection } from "@/app/components/CTASection";
import { Footer } from "@/app/components/Footer";
import { ResultsPage } from "@/app/components/ResultsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "results">("home");
  const [searchedName, setSearchedName] = useState("");

  const handleSearch = (name: string) => {
    setSearchedName(name);
    setCurrentPage("results");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  if (currentPage === "results") {
    return <ResultsPage searchedName={searchedName} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onSearch={handleSearch} />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}