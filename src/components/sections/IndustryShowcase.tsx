"use client";

import React, { useState } from "react";
import Image from "next/image";
import { industriesData } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "@/components/reusable/ContactModal";

export const IndustryShowcase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleInquire = (industryName: string) => {
    setSelectedIndustry(industryName);
    setModalOpen(true);
  };

  return (
    <>
      <section id="industries" className="py-20 lg:py-28 bg-[#001D2D] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007F73] mr-2" />
                Industries We Serve
              </div>
              <h2 className="text-3xl sm:text-5xl font-forum text-white leading-tight">
                We help companies meet risk with the right protection.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-md font-sans">
              Dedicated sector practice groups structuring coverage around your industry&apos;s unique liabilities.
            </p>
          </div>

          {/* High-Visual 6-Card Photographic Grid - Tags Removed, Title and Arrow Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                onClick={() => handleInquire(ind.name)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10 cursor-pointer card-hover-effect"
              >
                {/* Full-bleed real image */}
                <Image
                  src={ind.imageUrl}
                  alt={ind.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Duotone Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D2D] via-[#001D2D]/60 to-transparent group-hover:via-[#001D2D]/40 transition-colors" />

                {/* Card Content: Title and Arrow Only as Requested */}
                <div className="absolute inset-0 p-7 flex items-end justify-between text-white">
                  <h3 className="text-xl sm:text-2xl font-forum leading-snug group-hover:text-[#E6F4F1] transition-colors pr-4">
                    {ind.name}
                  </h3>
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#007F73] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triggered Contact Modal */}
      <ContactModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        triggerRequirement={selectedIndustry}
      />
    </>
  );
};
