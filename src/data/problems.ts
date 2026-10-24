import { ProblemItem } from "@/types/dataContracts";

export const problemsData: ProblemItem[] = [
  {
    id: "gap-exposure",
    index: "01",
    category: "Coverage Vulnerability",
    title: "Hidden policy exclusions that only surface after a catastrophic loss",
    painPoint:
      "Most corporate policies are renewed automatically year after year without stress-testing modern operational, cyber, or supply chain changes, leaving critical exposures uninsured.",
    solutionImpact:
      "Peraj conducts a forensic Risk Diagnostic before placement, identifying unaddressed contractual liabilities and closing ambiguous exclusion wording.",
  },
  {
    id: "claims-friction",
    index: "02",
    category: "Claims Advocacy",
    title: "Slow, adversarial claim settlements draining balance sheets and management focus",
    painPoint:
      "When a significant claim occurs, insurers send surveyors and loss adjusters with narrow mandates. Businesses without independent advocacy often suffer 30% to 50% arbitrary claim deductions.",
    solutionImpact:
      "Our dedicated in-house Claims Advocacy & Capital Recovery cell fights for your mandate from day one, ensuring swift, complete loss indemnification.",
  },
  {
    id: "cost-inflation",
    index: "03",
    category: "Premium Optimization",
    title: "Uncontrolled premium inflation without proportional risk reduction",
    painPoint:
      "Corporate insurance is frequently treated by standard brokers as an off-the-shelf procurement commodity rather than a tailored financial instrument, causing escalating costs without added protection.",
    solutionImpact:
      "We benchmark your risk profile across top domestic and international syndicates to engineer total cost of risk transfer (TCOR), maximizing coverage value.",
  },
];
