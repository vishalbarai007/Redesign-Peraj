"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Building2 } from "lucide-react";

export const EvidenceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="proof" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-slate-100 text-[#102A43] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007F73] mr-2" />
              Client Endorsements
            </div>
            <h2 className="text-3xl sm:text-5xl font-forum text-[#102A43] leading-tight">
              They speak for us.
            </h2>
          </div>

          {/* Interactive Company Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  idx === activeIndex
                    ? "bg-[#102A43] text-white shadow-sm"
                    : "bg-slate-100 text-[#5B7083] hover:bg-slate-200 hover:text-[#102A43]"
                }`}
              >
                0{idx + 1} • {item.industry.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Plum-Inspired Luxury Testimonial Card */}
        <div className="bg-[#F7F8FA] rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(16,42,69,0.04)] relative overflow-hidden transition-all duration-300">
          {/* Top Row: Settlement Badge & 5-Star Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[#B58B45] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#B58B45]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#102A43] ml-2">5.0 Fiduciary Rating</span>
            </div>

            {current.claimHighlight && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{current.claimHighlight}</span>
              </div>
            )}
          </div>

          {/* Large Editorial Quote */}
          <div className="relative mb-10">
            <div className="w-10 h-10 mb-5 text-[#007F73]/20">
              <Image
                src="/icons/quotation.svg"
                alt="Quote"
                width={40}
                height={40}
                className="opacity-30"
              />
            </div>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-forum text-[#102A43] leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Plum-Style Author Bar & Carousel Controls */}
          <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#102A43] text-white flex items-center justify-center shadow-sm shrink-0">
                <Building2 className="w-6 h-6 text-[#E6F4F1]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-[#102A43] font-sans">
                  {current.authorRole}
                </div>
                <div className="text-xs sm:text-sm text-[#5B7083]">
                  {current.organization} • <span className="text-[#007F73] font-medium">{current.industry}</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 self-end sm:self-center">
              <div className="text-xs font-mono text-[#5B7083] tracking-widest uppercase">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-slate-300 bg-white text-[#102A43] hover:bg-[#102A43] hover:text-white hover:border-[#102A43] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full bg-[#102A43] text-white hover:bg-[#007F73] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
