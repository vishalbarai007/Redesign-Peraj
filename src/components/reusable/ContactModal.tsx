"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ShieldCheck } from "lucide-react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRequirement?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onOpenChange,
  triggerRequirement,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#001D2D]/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-xl translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 border border-slate-200 focus:outline-none max-h-[92vh] overflow-y-auto">
          {/* Top accent ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#102A43] via-[#007F73] to-[#B58B45] rounded-t-2xl" />

          {/* Close button */}
          <Dialog.Close className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:text-[#102A43] hover:bg-slate-100 transition-colors focus:outline-none">
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* Modal Header */}
          <div className="mb-6 pr-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#007F73] bg-[#007F73]/10 px-2.5 py-0.5 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Broker Consultation</span>
            </div>
            <Dialog.Title className="text-2xl sm:text-3xl font-forum text-[#102A43] leading-tight">
              Start a Conversation with Peraj
            </Dialog.Title>
            <Dialog.Description className="text-xs sm:text-sm text-[#5B7083] mt-1.5 leading-relaxed font-sans">
              Tell us about your operations. A senior risk adviser will review your coverage and phone you back within 2 business hours.
            </Dialog.Description>
          </div>

          {/* Lead Capture Form */}
          <LeadCaptureForm
            idPrefix="modal"
            defaultRequirement={triggerRequirement}
            submitButtonText="Submit Consultation Request"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
