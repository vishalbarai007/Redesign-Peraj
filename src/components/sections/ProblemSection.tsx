import React from "react";
import { AlertCircle, ArrowUpRight } from "lucide-react";

interface PitfallItem {
  index: string;
  title: string;
  risk: string;
  perajFix: string;
}

const PITFALLS: PitfallItem[] = [
  {
    index: "01",
    title: "Hidden Exclusions",
    risk: "Unaddressed clause gaps that emerge only after catastrophic loss.",
    perajFix: "Customized manuscript wordings",
  },
  {
    index: "02",
    title: "Adversarial Claims",
    risk: "Insurers challenging settlements without independent defense.",
    perajFix: "Dedicated in-house claim cell",
  },
  {
    index: "03",
    title: "Arbitrary Deductions",
    risk: "Under-insurance penalties reducing legitimate enterprise payouts.",
    perajFix: "Pre-loss technical valuation audits",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Crisp Header with Very Minimal Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Commercial Risk Pitfalls</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-forum text-[#102A43] leading-tight">
              Where standard policies fall short.
            </h2>
          </div>

          <p className="text-sm text-[#5B7083] max-w-md font-sans">
            Three critical vulnerabilities that lead to delayed or disputed commercial claim settlements.
          </p>
        </div>

        {/* 3 Punchy Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PITFALLS.map((item) => (
            <div
              key={item.index}
              className="bg-[#F7F8FA] rounded-2xl p-8 border border-slate-200/90 shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-forum font-light text-[#B58B45] mb-4">
                  {item.index}
                </div>
                <h3 className="text-xl font-forum text-[#102A43] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B7083] leading-relaxed mb-6 font-sans">
                  {item.risk}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#007F73]">
                <span>{item.perajFix}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#007F73]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
