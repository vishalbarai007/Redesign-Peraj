"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import { ContactModal } from "@/components/reusable/ContactModal";

export const FinalCta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 lg:py-28 bg-white text-[#102A43] relative overflow-hidden border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          {/* Left-Aligned Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-slate-100 text-[#102A43] text-xs font-semibold uppercase tracking-wider mb-6">
            <Shield className="w-3.5 h-3.5 text-[#007F73]" />
            <span>Fiduciary Risk Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-forum text-[#102A43] leading-tight mb-6 max-w-3xl">
            Your protection starts with a conversation.
          </h2>

          <p className="text-base sm:text-lg text-[#5B7083] max-w-2xl leading-relaxed mb-10 font-sans">
            Tell us about your operations. We will review your existing exposures, benchmark policy wordings, and engineer an optimized insurance program.
          </p>

          {/* Action triggers (Left-Aligned) */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#007F73] hover:bg-[#00685E] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,127,115,0.35)] transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Request a Callback</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto h-12 px-8 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#102A43] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#B58B45]" />
              <span>Direct Line: {siteConfig.phone}</span>
            </a>
          </div>

          {/* Trust Seals (Left-Aligned) */}
          <div className="flex flex-wrap items-center justify-start gap-6 mt-12 text-xs text-[#5B7083]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#007F73]" />
              <span>2-Hour Callback Promise</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#B58B45]" />
              <span>Complimentary Policy Health Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact Modal */}
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};
