import { OfferingItem } from "@/types/dataContracts";

export const offeringsData: OfferingItem[] = [
  {
    id: "property-physical-assets",
    title: "Property & Physical Asset Protection",
    shortDescription:
      "Engineered protection for manufacturing plants, heavy machinery, warehousing, and commercial infrastructure against fire, natural catastrophes, and business interruption.",
    coveragePoints: [
      "Industrial All Risks (IAR) with comprehensive BI indemnity",
      "Machinery Breakdown & Electronic Equipment floater",
      "Valuation audit to prevent under-insurance penalties",
    ],
    imageUrl: "/products/propertyAndPhysicalAsset.png",
    badge: "Core Enterprise Shield",
    recommendedFor: "Manufacturing, Real Estate, Logistics & Warehousing",
  },
  {
    id: "capital-projects-engineering",
    title: "Capital Projects & Engineering Risk",
    shortDescription:
      "Mitigate project delays, structural failures, and financial overruns during high-stakes greenfield and brownfield infrastructure execution.",
    coveragePoints: [
      "Erection All Risks (EAR) & Contractors All Risks (CAR)",
      "Advance Loss of Profits (ALOP) & Delay in Startup (DSU)",
      "Testing, commissioning, and extended maintenance coverage",
    ],
    imageUrl: "/products/capitalProjectAndEngineer.png",
    badge: "Infrastructure & EPC",
    recommendedFor: "EPC Contractors, Energy Developers, Heavy Industries",
  },
  {
    id: "casualty-third-party",
    title: "Casualty & Third-Party Liability",
    shortDescription:
      "Safeguard your enterprise balance sheet against domestic and global third-party bodily injury, property damage, and legal defense costs.",
    coveragePoints: [
      "Commercial General Liability (CGL) with worldwide jurisdiction",
      "Product Liability & Product Recall endorsements",
      "Public & Pollution Liability tailored to chemical/industrial plants",
    ],
    imageUrl: "/products/casualtyAndThirdParty.png",
    badge: "Liability Defense",
    recommendedFor: "Exporters, Consumer Brands, Pharma & Chemical Plants",
  },
  {
    id: "management-liability",
    title: "Management Liability & Financial Lines",
    shortDescription:
      "Insulate company directors, executive officers, and fiduciaries against shareholder lawsuits, regulatory investigations, and ESG disputes.",
    coveragePoints: [
      "Directors & Officers (D&O) with dedicated Side-A A-DIC protection",
      "Errors & Omissions (E&O) / Professional Indemnity",
      "Comprehensive Commercial Crime & Employee Dishonesty cover",
    ],
    imageUrl: "/products/managementLiability.png",
    badge: "Board Governance",
    recommendedFor: "Public Companies, PE/VC Funded Firms, BFSI Institutions",
  },
  {
    id: "cyber-digital-infrastructure",
    title: "Cyber, Data & Digital Infrastructure",
    shortDescription:
      "Comprehensive digital risk transfer defending tech platforms, financial systems, and sensitive consumer data against extortion, ransomware, and business halt.",
    coveragePoints: [
      "First-party business interruption & forensic investigation costs",
      "Ransomware negotiation and data restoration reimbursement",
      "Regulatory penalties (DPDP Act, GDPR) and third-party lawsuit defense",
    ],
    imageUrl: "/products/cyberData.png",
    badge: "Tech & Data Security",
    recommendedFor: "SaaS, Fintech, Healthcare IT, E-commerce Platforms",
  },
  {
    id: "human-capital-employee-health",
    title: "Human Capital & Employee Wellness",
    shortDescription:
      "High-engagement group health, term life, and accident coverage structured to win top talent while maintaining disciplined corporate claims ratios.",
    coveragePoints: [
      "Group Medical Cover (GMC) with cashless network across 12,000+ hospitals",
      "Group Term Life (GTL) and Personal Accident (GPA) riders",
      "Dedicated wellness, OPD, and 24/7 corporate claims concierge",
    ],
    imageUrl: "/products/fidelityAndCrime.png",
    badge: "Talent Retention",
    recommendedFor: "Startups, Mid-Market Employers, Global MNCs",
  },
];
