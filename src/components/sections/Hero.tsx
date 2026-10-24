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
  const chevronRef = useRef<HTMLAnchorElement>(null);

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
        { opacity: 0, y: 50, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, delay: 0.2 }
      )
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          chevronRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[90vh] lg:h-screen min-h-[640px] flex flex-col justify-end overflow-hidden bg-[#001D2D]"
    >
      {/* Background Visual Layer with GSAP Parallax */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        {/* Desktop Banner Image */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/DesktopBanner.png"
            alt="Peraj Insurance Visual Banner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Mobile Banner Image */}
        <div className="lg:hidden relative w-full h-full">
          <Image
            src="/Hero.png"
            alt="Peraj Insurance Visual Banner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Atmospheric Cinema Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#001D2D] via-[#001D2D]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001D2D]/70 via-transparent to-transparent pointer-events-none" />

      {/* Clean Cinematic Headline & Subtitle Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 lg:pb-24">
        <div className="max-w-4xl space-y-6">
          {/* Subtle Heritage Tagline */}
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#007F73] animate-pulse" />
            <span>Fiduciary Commercial Advisory • Est. 1951</span>
          </div> */}

          {/* Majestic Heading in Forum Serif Font */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-forum text-white leading-[1.08] tracking-normal drop-shadow-md"
          >
            Insurance solutions that{" "}
            <span className="italic font-light text-[#E6F4F1] underline decoration-[#007F73] decoration-wavy underline-offset-8">
              understand
            </span>{" "}
            businesses and the people behind them.
          </h1>

          {/* Elegant Divider Line */}
          <div className="w-full h-[1px] bg-white/30 my-6" />

          {/* Subtitle Narrative */}
          <div
            ref={sublineRef}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-sans max-w-2xl leading-relaxed">
              A trusted partner for companies seeking well-structured, carefully negotiated insurance programs.
            </p>

            <a
              href="#why-peraj"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              <span>Explore Our Legacy</span>
              <span className="text-[#007F73]">&darr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bouncing Scroll Down Chevron */}
      <a
        ref={chevronRef}
        href="#why-peraj"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
};
