import React from "react";
import { Navbar } from "@/components/reusable/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HeritageTimeline } from "@/components/sections/HeritageTimeline";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OfferingsGrid } from "@/components/sections/OfferingsGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/reusable/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8FA]">
      {/* 1. Minimalist Floating Header with Contact Modal Trigger */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Full-Screen Visual Hero (Cinema Canvas • Image Only • Clean Forum Typography) */}
        <Hero />

        {/* 3. Kinetic Trust Strip (In the Numbers: 70+ Yrs, 99.8% Claims, 99.5% Retention) */}
        <TrustStrip />

        {/* 4. Interactive Heritage Timeline Carousel (1951 - 2002 Legacy Slider with legacy.jpg) */}
        <HeritageTimeline />

        {/* 5. Photographic Problem Matrix (3 Critical Enterprise Risk Gaps) */}
        <ProblemSection />

        {/* 6. 360° Structured Risk Solutions Carousel (6 Commercial Products) */}
        <OfferingsGrid />

        {/* 7. Transparent 3-Step Advisory Engagement Roadmap */}
        <ProcessSection />

        {/* 8. Specialized Industry Photographic Grid (6 Real Sector Cards) */}
        <IndustryShowcase />

        {/* 9. Plum-Style Executive Evidence & Testimonial Carousel */}
        <EvidenceSection />

        {/* 10. FAQs: Overcoming Practical Objections */}
        <FaqAccordion />

        {/* 11. Closing Lead Capture Section */}
        <FinalCta />
      </main>

      {/* 12. Corporate & IRDAI Compliance Footer */}
      <Footer />
    </div>
  );
}
