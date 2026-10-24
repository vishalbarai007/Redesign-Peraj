"use client";

import React, { useTransition, useState } from "react";
import { submitLeadForm } from "@/app/actions/submitLeadForm";
import { toast } from "sonner";
import { ArrowRight, Loader2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FormSubmissionState } from "@/types/formSchemas";

interface LeadCaptureFormProps {
  idPrefix?: string;
  className?: string;
  submitButtonText?: string;
  defaultRequirement?: string;
}

const REQUIREMENT_OPTIONS = [
  "Corporate Property & Industrial Assets",
  "Capital Projects & Engineering All Risk",
  "Commercial General & Product Liability",
  "Directors & Officers (D&O) / E&O Liability",
  "Cyber Risk & Digital Infrastructure",
  "Group Health & Employee Wellness (GMC/GPA)",
  "Existing Policy Audit & Cost Optimization",
  "Other Commercial Insurance Requirement",
];

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  idPrefix = "hero",
  className = "",
  submitButtonText = "Request a Callback",
  defaultRequirement = "",
}) => {
  const [isPending, startTransition] = useTransition();
  const [serverState, setServerState] = useState<FormSubmissionState | null>(null);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    startTransition(async () => {
      const response = await submitLeadForm(serverState, formData);
      setServerState(response);

      if (response.success) {
        setIsSubmittedSuccessfully(true);
        toast.success("Callback Request Received", {
          description: response.message,
          duration: 5000,
        });
        formElement.reset();
      } else {
        toast.error("Submission Incomplete", {
          description: response.message,
        });
      }
    });
  };

  if (isSubmittedSuccessfully) {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-8 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-[#102A43] mb-2 font-forum">
          Thank you! Request Confirmed
        </h4>
        <p className="text-sm text-[#243746] max-w-sm mb-6 leading-relaxed">
          A senior Peraj risk adviser has been notified. We will review your requirements and phone you back within 2 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmittedSuccessfully(false);
            setServerState(null);
          }}
          className="text-xs font-semibold text-[#007F73] hover:underline"
        >
          Submit another inquiry &rarr;
        </button>
      </div>
    );
  }

  const errors = serverState?.fieldErrors || {};

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Invisible Honeypot to block spam bots silently */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-hp-website`}>Leave this empty</label>
        <input
          type="text"
          id={`${idPrefix}-hp-website`}
          name="hp_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label
            htmlFor={`${idPrefix}-fullName`}
            className="block text-xs font-semibold text-[#102A43] mb-1.5"
          >
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${idPrefix}-fullName`}
            name="fullName"
            type="text"
            required
            placeholder="e.g. Vikram Mehta"
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
              errors.fullName
                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-slate-200 focus:border-[#007F73] focus:ring-1 focus:ring-[#007F73]"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-600 mt-1">{errors.fullName[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-phone`}
            className="block text-xs font-semibold text-[#102A43] mb-1.5"
          >
            Direct Mobile <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
              errors.phone
                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-slate-200 focus:border-[#007F73] focus:ring-1 focus:ring-[#007F73]"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-rose-600 mt-1">{errors.phone[0]}</p>
          )}
        </div>
      </div>

      {/* Row 2: Work Email and Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label
            htmlFor={`${idPrefix}-workEmail`}
            className="block text-xs font-semibold text-[#102A43] mb-1.5"
          >
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${idPrefix}-workEmail`}
            name="workEmail"
            type="email"
            required
            placeholder="vikram@company.com"
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
              errors.workEmail
                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-slate-200 focus:border-[#007F73] focus:ring-1 focus:ring-[#007F73]"
            }`}
          />
          {errors.workEmail && (
            <p className="text-xs text-rose-600 mt-1">{errors.workEmail[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-companyName`}
            className="block text-xs font-semibold text-[#102A43] mb-1.5"
          >
            Company Name
          </label>
          <input
            id={`${idPrefix}-companyName`}
            name="companyName"
            type="text"
            placeholder="Enterprise Ltd."
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:border-[#007F73] focus:outline-none focus:ring-1 focus:ring-[#007F73] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Insurance Requirement Dropdown */}
      <div>
        <label
          htmlFor={`${idPrefix}-insuranceRequirement`}
          className="block text-xs font-semibold text-[#102A43] mb-1.5"
        >
          Primary Insurance Requirement <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}-insuranceRequirement`}
            name="insuranceRequirement"
            defaultValue={defaultRequirement}
            required
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none appearance-none transition-colors ${
              errors.insuranceRequirement
                ? "border-rose-400 focus:border-rose-500"
                : "border-slate-200 focus:border-[#007F73] focus:ring-1 focus:ring-[#007F73]"
            }`}
          >
            <option value="" disabled>
              Select your insurance focus...
            </option>
            {REQUIREMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.insuranceRequirement && (
          <p className="text-xs text-rose-600 mt-1">{errors.insuranceRequirement[0]}</p>
        )}
      </div>

      {/* Row 4: Optional Message / Details */}
      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="block text-xs font-semibold text-[#102A43] mb-1.5"
        >
          Additional Context (Optional)
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={2}
          placeholder="e.g. Existing policy renewal due next month, looking for audit..."
          className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:border-[#007F73] focus:outline-none focus:ring-1 focus:ring-[#007F73] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 bg-[#007F73] hover:bg-[#00685E] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,127,115,0.35)] hover:shadow-[0_6px_20px_rgba(0,127,115,0.5)] transition-all duration-200 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Connecting with Adviser...</span>
          </>
        ) : (
          <>
            <span>{submitButtonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {/* Micro Trust Seal */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5B7083] pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>Strict Bilateral NDA • Guaranteed response within 2 business hours</span>
      </div>
    </form>
  );
};
