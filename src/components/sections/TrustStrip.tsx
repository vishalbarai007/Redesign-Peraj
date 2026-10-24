"use client";

import React, { useRef } from "react";
import { statsData } from "@/data/stats";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const TrustStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="why-peraj"
      ref={containerRef}
      className="w-full bg-white py-20 lg:py-28 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-slate-100 text-[#102A43] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007F73] mr-2" />
              Why Peraj
            </div>
            <h2 className="text-4xl sm:text-5xl font-forum text-[#102A43] leading-none">
              In the numbers
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5B7083] max-w-xl leading-relaxed font-sans">
            Our growth is built on trust, relationships, and reach. For over seven decades, Peraj has served clients across India and abroad with dedicated teams, strategic presence, and enduring partnerships rooted in integrity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#102A43]/[0.05] hover:bg-[#102A43]/[0.12] transition-all duration-300 rounded-xl p-8 border border-[#102A43]/10 hover:border-[#102A43]/25 shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl lg:text-6xl font-forum font-light text-[#102A43] tracking-tight mb-3">
                  {stat.value}
                </div>
                <h3 className="text-sm font-bold text-[#102A43] font-sans mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#5B7083] leading-relaxed pt-4 border-t border-[#102A43]/10">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
