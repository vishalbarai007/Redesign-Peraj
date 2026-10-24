import { SiteConfig } from "@/types/dataContracts";

export const siteConfig: SiteConfig = {
  name: "Peraj Insurance Brokers",
  shortName: "Peraj Insurance",
  tagline: "Insurance advice and risk structuring built around your business goals.",
  description:
    "For over seven decades, Peraj has served enterprise clients across India and globally with dedicated teams, independent risk diagnostics, and enduring partnerships rooted in integrity.",
  logoUrl: "/logo.svg",
  footerLogoUrl: "/footerLogo.png",
  phone: "+91 22 1234 5678",
  email: "info@perajinsurance.co.in",
  address: "Mumbai • Bengaluru • New Delhi • Chennai • Global Partnerships",
  establishedYear: 1951,
  irdaiLicense: "IRDAI Registered Direct Insurance Broker (Life & General) • Broker License No. 182",
  navigation: [
    { label: "Why Peraj", href: "#why-peraj" },
    { label: "Risk Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Our Process", href: "#process" },
    { label: "Enterprise Proof", href: "#evidence" },
    { label: "FAQs", href: "#faqs" },
  ],
  primaryActionLabel: "Request a Callback",
  socials: {
    linkedin: "https://www.linkedin.com/company/peraj-insurance-brokers/",
    instagram: "https://www.instagram.com/peraj_insurance_brokers",
  },
};
