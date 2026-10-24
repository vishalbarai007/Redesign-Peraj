"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineMilestone {
  year: string;
  headline: string;
  description: string;
}

const MILESTONES: TimelineMilestone[] = [
  {
    year: "1951",
    headline: "The Foundation of Fiduciary Advisory",
    description:
      "Founded by Shri Mulji Peraj; quickly earned its agency license from the Controller of Insurance, establishing a new standard of integrity in pre-nationalization India.",
  },
  {
    year: "1952",
    headline: "Principal Agent to British Insurers",
    description:
      "Appointed as Principal Agent to three leading British Insurers, expanding industrial underwriting capacity and pioneering risk transfer structures across commercial corridors.",
  },
  {
    year: "1970",
    headline: "Pioneering Corporate Consultancy",
    description:
      "Shri Jogendra Mulji Thakker joins the firm, pioneering the concept of independent consultancy services in a newly nationalized insurance sector.",
  },
  {
    year: "1978",
    headline: "International Inbound Expansion",
    description:
      "Embarks on cross-border business, becoming the primary channel for incoming multinational corporations requiring localized policy compliance in India.",
  },
  {
    year: "2002",
    headline: "Modern Direct Broking Transition",
    description:
      "Smoothly transitions to the direct insurance broking system post-reform under IRDAI regulations, retaining over 95% of its long-term enterprise client base.",
  },
];

export const HeritageTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? MILESTONES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === MILESTONES.length - 1 ? 0 : prev + 1));
  };

  const current = MILESTONES[activeIndex];

  return (
    <section id="heritage" className="w-full bg-[#001D2D] relative overflow-hidden py-20 lg:py-28">
      {/* Background Visual Layer using authentic legacy.jpg */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/legacy.jpg"
          alt="Peraj Insurance Heritage Archive"
          fill
          className="object-cover object-center filter grayscale contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D2D] via-[#001D2D]/80 to-[#001D2D]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B58B45] mr-2" />
            Advisory Legacy
          </div>
          <h2 className="text-3xl sm:text-5xl font-forum text-white leading-tight max-w-3xl">
            A Legacy Since 1951, Shaping Commercial Insurance Advisory Today
          </h2>
        </div>

        {/* Milestone Display Box */}
        <div className="min-h-[380px] lg:min-h-[420px] flex flex-col justify-between py-6">
          <div
            key={current.year}
            className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Year numeral */}
            <div className="text-6xl sm:text-8xl lg:text-9xl font-forum font-light text-white tracking-tight leading-none">
              {current.year}
            </div>

            <h3 className="text-xl sm:text-2xl font-forum text-[#E6F4F1]">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-lg text-slate-300 font-sans leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 pt-8">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous milestone"
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#001D2D] transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next milestone"
              className="w-12 h-12 rounded-full bg-white text-[#001D2D] flex items-center justify-center hover:bg-[#007F73] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono ml-2">
              0{activeIndex + 1} / 0{MILESTONES.length}
            </div>
          </div>
        </div>

        {/* Bottom Year Tabs Bar */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex justify-between items-center overflow-x-auto gap-4 py-2">
            {MILESTONES.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`text-lg sm:text-xl font-forum font-medium px-4 py-2 rounded transition-all cursor-pointer relative ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.year}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B58B45] animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
