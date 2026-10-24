"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Parallax scroll on the background hero visual
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 18,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Initial majestic text entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          exploreRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[90vh] lg:h-screen min-h-[640px] flex flex-col justify-end overflow-hidden bg-[#001D2D]"
    >
      {/* Background Visual Layer: Professional Financial Architecture */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        <Image
          src="/hero-professional.jpg"
          alt="Peraj Insurance Institutional Advisory"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Atmospheric Cinema Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#001D2D] via-[#001D2D]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001D2D]/80 via-[#001D2D]/30 to-transparent pointer-events-none" />

      {/* Clean Cinematic Headline & Subtitle Container (Left-Aligned) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 lg:pb-32 text-left">
        <div className="max-w-3xl space-y-5">
          {/* Subtle Heritage Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#007F73] animate-pulse" />
            <span>Commercial Insurance & Advisory • Est. 1951</span>
          </div>

          {/* Short, Punchy Heading in Forum Serif Font */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-forum text-white leading-[1.08] tracking-normal drop-shadow-md"
          >
            Insurance engineered for{" "}
            <span className="italic font-light text-[#E6F4F1] underline decoration-[#007F73] decoration-wavy underline-offset-8">
              enterprise
            </span>
            .
          </h1>

          {/* Subtitle Narrative */}
          <div ref={sublineRef} className="pt-2">
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-sans max-w-2xl leading-relaxed">
              A trusted fiduciary partner structuring and defending commercial insurance programs for over 70 years.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Center: Explore Our Legacy */}
      <a
        ref={exploreRef}
        href="#why-peraj"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-all cursor-pointer group p-2"
        aria-label="Explore our legacy"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
          Explore Our Legacy
        </span>
        <ChevronDown className="w-5 h-5 text-[#007F73] animate-bounce" />
      </a>
    </section>
  );
};
