"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import BackgroundDecorations from "./components/BackgroundDecorations";
import { portfolioConfig } from "./config/portfolio";
import type { Section, Language } from "./types";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [language, setLanguage] = useState<Language>("EN");

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Blue vertical line on the left edge of screen */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-[#55DDFF] hidden lg:block z-30" />
      
      <BackgroundDecorations />
      
      <Navbar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        logoText={portfolioConfig.logoText}
      />

      <Hero
        name={portfolioConfig.name}
        description={portfolioConfig.description}
        contactButtonText={portfolioConfig.contactButtonText}
        statusText={portfolioConfig.statusText}
        socialLinks={portfolioConfig.socialLinks}
      />

      <QuoteSection
        quote={portfolioConfig.quote}
        author={portfolioConfig.quoteAuthor}
      />
    </div>
  );
}
