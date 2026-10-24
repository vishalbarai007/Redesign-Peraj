import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001D2D] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Identity & Legacy with Big Peraj Logo */}
          <div className="md:col-span-2 space-y-5">
            <div className="relative h-14 w-52 sm:h-16 sm:w-64">
              <Image
                src="/footerLogo.png"
                alt="Peraj Insurance Logo"
                fill
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed font-sans">
              Founded in 1951 by Shri Mulji Peraj. Over seven decades of fiduciary commercial risk advisory, direct corporate insurance broking, and resolute claims advocacy.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p>{siteConfig.irdaiLicense}</p>
              <p>Corporate Headquarters: Mumbai • National Presence Across India</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B58B45] font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-[#007F73] font-semibold hover:underline">
                  Request a Callback &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact with Authentic OG Social Icons */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B58B45] font-bold mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="block text-xs text-slate-400">Phone Support</span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="font-semibold text-white hover:text-[#007F73] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <span className="block text-xs text-slate-400">Corporate Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-white hover:text-[#007F73] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Official Brand Colored Social Icons */}
              <div className="pt-3 flex items-center gap-3">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md flex items-center justify-center bg-transparent"
                  aria-label="Peraj LinkedIn"
                >
                  <Image
                    src="/icons/linkedin-og.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md flex items-center justify-center bg-transparent"
                  aria-label="Peraj Instagram"
                >
                  <Image
                    src="/icons/instagram-og.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & Data Notice</span>
            <span className="hover:text-slate-300 cursor-pointer">IRDAI Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
