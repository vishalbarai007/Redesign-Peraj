"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#001D2D] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#007F73]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#007F73]" />
            <span>Advisory Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-forum text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-300 mt-3 max-w-xl mx-auto font-sans">
            Direct answers on switching brokers, independent policy audits, and our claims defense process.
          </p>
        </div>

        {/* Dark Enterprise Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id;
            const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.08] border-[#007F73]/60 shadow-lg"
                    : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="font-forum text-base sm:text-lg text-[#B58B45] font-light shrink-0">
                      {indexStr}
                    </span>
                    <span className="font-forum text-lg sm:text-xl text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#007F73] border-[#007F73]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-white/10 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-8 sm:pl-12">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
