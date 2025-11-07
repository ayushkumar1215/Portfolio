"use client";

import { useState } from "react";
import type { NavbarProps, Section } from "../types";
import Image from "next/image";
import { logo } from "../assets";

export default function Navbar({
  activeSection,
  onSectionChange,
  language,
  onLanguageChange,
  logoText = "Elias",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navigationItems: Array<{ id: Section; label: string; href: string }> = [
    { id: "home", label: "home", href: "#home" },
    { id: "works", label: "works", href: "#works" },
    { id: "about-me", label: "about-me", href: "#about-me" },
    { id: "contacts", label: "contacts", href: "#contacts" },
  ];

  const handleNavClick = (section: Section): void => {
    onSectionChange(section);
    setMobileMenuOpen(false);
  };

  const handleLanguageToggle = (): void => {
    onLanguageChange(language === "EN" ? "ES" : "EN");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={50} height={20} />
<span className="text-white font-medium text-lg">{logoText}</span>  
</div>
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`text-white text-sm font-medium hover:text-[#C778DD] transition-colors relative ${
                activeSection === item.id ? "text-[#C778DD]" : ""
              }`}
            >
              <span className="text-[#C778DD] text-sm font-medium">#</span>{item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C778DD]" />
              )}
            </a>
          ))}
        </div>

        {/* Right Side - Language Selector & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Selector - Desktop */}
          <div
            className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#C778DD] transition-colors"
            onClick={handleLanguageToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleLanguageToggle();
              }
            }}
            aria-label={`Change language. Current language: ${language}`}
          >
            <span className="text-white text-sm font-medium">{language}</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#a78bfa] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1e1e2e] border-b border-white/10 md:hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-white text-sm font-medium hover:text-[#C778DD] transition-colors ${
                    activeSection === item.id ? "text-[#C778DD]" : ""
                  }`}
                >
                  #{item.label}
                </a>
              ))}
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-[#C778DD] transition-colors pt-2 border-t border-white/10"
                onClick={handleLanguageToggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleLanguageToggle();
                  }
                }}
                aria-label={`Change language. Current language: ${language}`}
              >
                <span className="text-white text-sm font-medium">{language}</span>
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

