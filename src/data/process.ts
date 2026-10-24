import { ProcessStep } from "@/types/dataContracts";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    phase: "Discovery",
    title: "15-Minute Risk Discovery Call",
    description:
      "A senior Peraj risk adviser connects directly with your leadership or finance team to understand your current operations, upcoming capital projects, and core pain points.",
    deliverable: "Scoping Brief & Immediate Coverage Checklist",
    timeline: "Within 2 business hours of enquiry",
  },
  {
    step: 2,
    phase: "Forensic Audit",
    title: "Independent Policy & Exposure Audit",
    description:
      "We stress-test your existing policies against real-world catastrophe and claim scenarios. We uncover wording gaps, under-insurance clauses, and excessive premium markups.",
    deliverable: "Gap Analysis Matrix & Optimization Blueprint",
    timeline: "2 to 4 business days",
  },
  {
    step: 3,
    phase: "Placement & Advocacy",
    title: "Market Syndication & Lifetime Claims Advocacy",
    description:
      "We negotiate directly with leading domestic and global insurers to place airtight coverage at optimal terms. Our mandate continues with ongoing claims support throughout the policy lifecycle.",
    deliverable: "Complete Policy Docket & Dedicated Claims Helpdesk",
    timeline: "Ongoing protection from placement",
  },
];
