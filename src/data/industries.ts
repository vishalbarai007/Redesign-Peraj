import { IndustryItem } from "@/types/dataContracts";

export const industriesData: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Industrials, Manufacturing & Advanced Engineering",
    keyRisks: ["Machinery breakdown", "Supply chain halts", "Environmental liability"],
    imageUrl: "/industries/industryImage1.png",
  },
  {
    id: "infrastructure",
    name: "Infrastructure, Construction & Capital Projects",
    keyRisks: ["Contractor delay risk", "Advance loss of profit", "Third-party bodily injury"],
    imageUrl: "/industries/industryImage2.png",
  },
  {
    id: "energy",
    name: "Energy, Power, Utilities & Natural Resources",
    keyRisks: ["Turbine damage", "Grid interruption", "Catastrophe property damage"],
    imageUrl: "/industries/industryImage3.png",
  },
  {
    id: "logistics",
    name: "Transportation, Mobility & Global Logistics",
    keyRisks: ["Cargo transit loss", "Fleet liability", "Warehousing logistics exposures"],
    imageUrl: "/industries/industryImage4.png",
  },
  {
    id: "financial-institutions",
    name: "Financial Institutions & Capital Markets",
    keyRisks: ["D&O lawsuits", "Cyber fraud & crime", "Professional negligence"],
    imageUrl: "/industries/industryImage5.png",
  },
  {
    id: "technology",
    name: "Technology, Telecom & Digital Infrastructure",
    keyRisks: ["Cloud downtime", "Ransomware extortion", "Data breach liability"],
    imageUrl: "/industries/industryImage6.png",
  },
];
