import React from "react";
import { processSteps } from "@/data/process";
import { ArrowRight, Clock, FileCheck } from "lucide-react";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#007F73] block mb-2">
            Transparent Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-forum text-[#102A43] leading-tight">
            What happens after you request a callback
          </h2>
          <p className="text-sm text-[#5B7083] mt-3">
            A structured, zero-pressure 3-step advisory process designed to uncover risk gaps and give you total clarity.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-[#F7F8FA] rounded-2xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#102A43] text-white flex items-center justify-center font-forum text-xl font-bold shadow-sm">
                    0{step.step}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B58B45] px-2.5 py-1 rounded bg-[#B58B45]/10">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#102A43] font-forum mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B7083] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Metadata */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#102A43]">
                  <FileCheck className="w-3.5 h-3.5 text-[#007F73] shrink-0" />
                  <span className="font-semibold">{step.deliverable}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#5B7083]">
                  <Clock className="w-3.5 h-3.5 text-[#B58B45] shrink-0" />
                  <span>Timeline: {step.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page Action Callout */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-[#007F73] hover:bg-[#00685E] text-white text-xs font-semibold uppercase tracking-wider shadow-[0_4px_14px_rgba(0,127,115,0.35)] transition-all active:scale-[0.98]"
          >
            <span>Start Step 1: Request a Callback</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
