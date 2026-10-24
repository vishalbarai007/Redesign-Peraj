"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ContactModal } from "@/components/reusable/ContactModal";

interface MinimalOffering {
  id: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
}

const OFFERINGS: MinimalOffering[] = [
  {
    id: "property",
    title: "Property & Physical Assets",
    category: "Asset Protection",
    summary: "Industrial All Risks (IAR) with business interruption coverage.",
    imageUrl: "/products/propertyAndPhysicalAsset.png",
  },
  {
    id: "engineering",
    title: "Capital Projects & EPC Risk",
    category: "Infrastructure",
    summary: "Erection and Contractor All Risk with delay-in-startup defense.",
    imageUrl: "/products/capitalProjectAndEngineer.png",
  },
  {
    id: "casualty",
    title: "Casualty & Third-Party Liability",
    category: "Enterprise Shield",
    summary: "Commercial general, product recall, and pollution liability.",
    imageUrl: "/products/casualtyAndThirdParty.png",
  },
  {
    id: "management",
    title: "Management Liability (D&O)",
    category: "Board Governance",
    summary: "Dedicated Side-A protection against shareholder and regulatory actions.",
    imageUrl: "/products/managementLiability.png",
  },
  {
    id: "cyber",
    title: "Cyber, Data & Extortion",
    category: "Digital Risk",
    summary: "Ransomware defense, data breach liability, and DPDP compliance.",
    imageUrl: "/products/cyberData.png",
  },
  {
    id: "employee",
    title: "Human Capital & Employee Health",
    category: "Corporate Wellness",
    summary: "Cashless group medical cover (GMC) and executive term life.",
    imageUrl: "/products/fidelityAndCrime.png",
  },
];

export const OfferingsGrid: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector<HTMLElement>(".snap-start");
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleInquire = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setModalOpen(true);
  };

  return (
    <>
      <section id="solutions" className="py-20 lg:py-28 bg-[#001D2D] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007F73]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Very Less Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007F73] mr-2" />
                Risk Solutions
              </div>
              <h2 className="text-3xl sm:text-5xl font-forum text-white leading-tight">
                Giving your business goals 360° protection.
              </h2>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#001D2D] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full bg-white text-[#001D2D] hover:bg-[#007F73] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Minimalist High-Visual Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {OFFERINGS.map((offering) => (
              <div
                key={offering.id}
                className="min-w-[280px] sm:min-w-[340px] lg:min-w-[360px] flex-1 group bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#007F73]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg snap-start"
              >
                <div>
                  {/* Real Photographic Card Visual */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={offering.imageUrl}
                      alt={offering.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D2D] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#001D2D]/90 backdrop-blur-md text-[#E6F4F1] border border-white/10">
                        {offering.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content - Very Less Text */}
                  <div className="p-6">
                    <h3 className="text-xl font-forum text-white mb-2 leading-snug group-hover:text-[#E6F4F1] transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-2">
                      {offering.summary}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleInquire(offering.title)}
                    className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-[#007F73] text-white text-xs font-semibold flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span>Inquire Coverage</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
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
        triggerRequirement={selectedProduct}
      />
    </>
  );
};
