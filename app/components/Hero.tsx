"use client";

import Image from "next/image";
import type { HeroProps } from "../types";
import Geometry from "../assets/svgs/Geometry";
import { Me } from "../assets";
// import GeometricShapes from "./GeometricShapes";

export default function Hero({
  name,
  description,
  contactButtonText,
  statusText,
  socialLinks,
  imageSrc,
  imageAlt = "Profile image",
}: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 px-6 lg:px-12 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-10">
            {/* Social Icons - Vertical Stack on Left Sidebar - Aligned with blue line */}
            <div className="absolute -left-12 top-0 hidden lg:flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C778DD] transition-colors"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              <span className="text-white">{name}</span>{" "}
              <span className="text-white">is a</span>{" "}
              <span className="text-[#C778DD]">web designer</span>{" "}
              <span className="text-white">and</span>{" "}
              <span className="text-[#C778DD] font-bold">front-end developer</span>
            </h1>

            {/* Sub-text */}
            <p className="text-[#ABB2BF] text-base md:text-lg mb-8 max-w-lg">
              {description}
            </p>

            {/* Contact Button */}
            <button className="border border-[#C778DD] text-white px-4 py-2 font-medium hover:bg-[#C778DD]/10 transition-colors text-base">
              {contactButtonText}
            </button>

            {/* Social Icons - Horizontal Stack on Mobile */}
            <div className="flex lg:hidden gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C778DD] transition-colors"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Visual Content */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Geometric Shapes - Behind the image */}
              <div className="absolute -left-8 -top-8 z-0 opacity-80">
                <Geometry className="w-48 h-44 md:w-64 md:h-60" />
              </div>

              {/* Image Container */}
              <div className="relative z-10">
                  <div className="relative w-full aspect-square rounded overflow-hidden">
                    <Image
                      src={Me}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                {/* Status Indicator */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#282C33] border border-[#C778DD] px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C778DD] rounded-full" />
                  <span className="text-white text-sm font-normal">{statusText}</span>
                </div>
              </div>

              {/* Dot pattern decoration on the right */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-24 h-24 dot-pattern opacity-30 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

