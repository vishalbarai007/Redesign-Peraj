"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-32 sm:w-40">
              <Image
                src="/logo.svg"
                alt="Peraj Insurance Brokers Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#243746]">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#007F73] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button (Per user request: opens Contact Modal) */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#102A43] text-sm font-semibold rounded-md transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span className="w-2 h-2 bg-[#007F73] rounded-full mr-2.5 animate-pulse" />
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#102A43] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#102A43] hover:text-[#007F73] py-2 border-b border-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#007F73] text-white text-sm font-semibold shadow-md cursor-pointer"
              >
                <span className="w-2 h-2 bg-white rounded-full mr-1.5" />
                Contact Our Team
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Contact Modal */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
};
