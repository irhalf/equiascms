/**
 * Central site configuration for the Naujan Lake Visitor Hub.
 * Keeping navigation, contact details and park facts in one place so the
 * header, footer and page sections stay in sync.
 */

export const site = {
  name: "Naujan Lake",
  legalName: "Naujan Lake National Park",
  tagline: "Eco-Tourism & Wildlife Information Hub",
  description:
    "The official visitor hub of Naujan Lake National Park — a Ramsar Wetland of International Importance in Oriental Mindoro, Philippines. Discover wildlife, plan a guided boat tour, and travel responsibly.",
  url: "https://naujanlake.ph",
  location: "Naujan, Oriental Mindoro, Philippines",
  /**
   * Static rather than `new Date().getFullYear()`: Next.js 16 blocks reading
   * the current time during prerendering unless the route is dynamic.
   */
  copyrightYear: 2026,
  ramsar: {
    label: "Ramsar Site No. 1008",
    designated: "2001",
  },
  // NOTE: contact details are placeholders for development.
  contact: {
    address: "Protected Area Office, Brgy. Bayani, Naujan, Oriental Mindoro 5204",
    phone: "+63 917 000 0000",
    email: "info@naujanlake.ph",
    officeHours: "Mon – Sat, 8:00 AM – 5:00 PM",
  },
} as const;

export const mainNav = [
  { label: "Wildlife", href: "/wildlife" },
  { label: "Eco-Tours", href: "/tours" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Advisories", href: "/advisories" },
] as const;

export const footerNav = [
  {
    title: "Discover",
    links: [
      { label: "Wildlife Catalog", href: "/wildlife" },
      { label: "Eco-Tour Packages", href: "/tours" },
      { label: "Park Advisories", href: "/advisories" },
      { label: "Photo Gallery", href: "/wildlife" },
    ],
  },
  {
    title: "Plan a Visit",
    links: [
      { label: "Park Guidelines", href: "/guidelines" },
      { label: "Lake Zoning Map", href: "/guidelines" },
      { label: "Send an Inquiry", href: "/inquire" },
      { label: "Newsletter", href: "/subscribe" },
    ],
  },
] as const;

/** Headline figures used in the hero strip. */
export const parkStats = [
  { value: "14,568", unit: "ha", label: "Protected area" },
  { value: "5th", unit: "", label: "Largest lake in the Philippines" },
  { value: "100+", unit: "", label: "Bird species recorded" },
  { value: "2001", unit: "", label: "Ramsar designation" },
] as const;
