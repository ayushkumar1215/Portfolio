import React from "react";

interface QuoteSectionProps {
  quote: string;
  author: string;
}

export default function QuoteSection({ quote, author }: QuoteSectionProps) {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative border border-white px-8 py-12 md:px-16 md:py-20">
          {/* Top-left quotation mark */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <svg
              width="62"
              height="50"
              viewBox="0 0 62 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M0 50V37.5C0 16.8 16.8 0 37.5 0V12.5C25.1 12.5 15 22.6 15 35H30V50H0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Quote text */}
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed max-w-4xl mx-auto relative z-10 pt-8 md:pt-12">
            {quote}
          </p>

          {/* Attribution */}
          <div className="text-right mt-8">
            <p className="text-white text-lg md:text-xl">— {author}</p>
          </div>

          {/* Bottom-right quotation mark */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <svg
              width="62"
              height="50"
              viewBox="0 0 62 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white rotate-180"
            >
              <path
                d="M0 50V37.5C0 16.8 16.8 0 37.5 0V12.5C25.1 12.5 15 22.6 15 35H30V50H0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

