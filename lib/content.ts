/**
 * Curated home-page content. In Phase 2 these arrays are replaced by Supabase
 * queries; the shapes here intentionally mirror the PRD's table definitions.
 */

const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  overview: unsplash("photo-1518495973542-4542c06a5843", 1100),
  kingfisher: unsplash("photo-1486365227551-f3f90034a57c", 1100),
  zoning: unsplash("photo-1444927714506-8492d94b4e3d", 1800),
} as const;

export type ConservationCode = "CR" | "EN" | "VU" | "NT" | "LC";

export const conservationStatus: Record<
  ConservationCode,
  { label: string; className: string; dot: string }
> = {
  CR: {
    label: "Critically Endangered",
    className: "border-clay/30 bg-clay/10 text-clay",
    dot: "bg-clay",
  },
  EN: {
    label: "Endangered",
    className: "border-clay/25 bg-clay/5 text-clay",
    dot: "bg-clay",
  },
  VU: {
    label: "Vulnerable",
    className: "border-amber/30 bg-amber/10 text-amber",
    dot: "bg-amber",
  },
  NT: {
    label: "Near Threatened",
    className: "border-teal/30 bg-teal/10 text-teal",
    dot: "bg-teal",
  },
  LC: {
    label: "Least Concern",
    className: "border-emerald/25 bg-emerald/10 text-emerald",
    dot: "bg-emerald",
  },
};

export type SpeciesHighlight = {
  commonName: string;
  localName: string;
  scientificName: string;
  status: ConservationCode;
  seasonality: "Resident" | "Migratory";
};

export const speciesHighlights: SpeciesHighlight[] = [
  {
    commonName: "Philippine Duck",
    localName: "Papan",
    scientificName: "Anas luzonica",
    status: "VU",
    seasonality: "Resident",
  },
  {
    commonName: "Purple Heron",
    localName: "Lapay",
    scientificName: "Ardea purpurea",
    status: "LC",
    seasonality: "Migratory",
  },
  {
    commonName: "Great Egret",
    localName: "Tagak",
    scientificName: "Ardea alba",
    status: "LC",
    seasonality: "Migratory",
  },
  {
    commonName: "Common Kingfisher",
    localName: "Kasay-kasay",
    scientificName: "Alcedo atthis",
    status: "LC",
    seasonality: "Resident",
  },
  {
    commonName: "Freshwater Goby",
    localName: "Biya",
    scientificName: "Glossogobius giuris",
    status: "LC",
    seasonality: "Resident",
  },
];

export type Tour = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  rate: number;
  capacity: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  image: string;
};

export const featuredTours: Tour[] = [
  {
    slug: "sunrise-birdwatching-cruise",
    title: "Sunrise Birdwatching Cruise",
    summary:
      "Glide out before the mist lifts, when herons and egrets feed along the reed beds.",
    duration: "3–4 hours",
    rate: 850,
    capacity: 6,
    difficulty: "Easy",
    image: unsplash("photo-1439066615861-d1af74d74000", 900),
  },
  {
    slug: "sunset-wetland-photography",
    title: "Sunset Wetland Photography",
    summary:
      "A slow drift to the western shallows with a guide who knows every roosting tree.",
    duration: "2 hours",
    rate: 650,
    capacity: 8,
    difficulty: "Easy",
    image: unsplash("photo-1511497584788-876760111969", 900),
  },
  {
    slug: "lakeside-heritage-walk",
    title: "Lakeside Heritage Walk",
    summary:
      "Shoreline footpaths, fishing villages, and the stories that keep the lake protected.",
    duration: "4 hours",
    rate: 500,
    capacity: 12,
    difficulty: "Moderate",
    image: unsplash("photo-1470071459604-3b5ec3a7fe05", 900),
  },
];

export type Severity = "CRITICAL" | "WARNING" | "INFO";

export const severityStyles: Record<
  Severity,
  { label: string; className: string; dot: string }
> = {
  CRITICAL: {
    label: "Critical",
    className: "border-clay/30 bg-clay/10 text-clay",
    dot: "bg-clay",
  },
  WARNING: {
    label: "Warning",
    className: "border-amber/30 bg-amber/10 text-amber",
    dot: "bg-amber",
  },
  INFO: {
    label: "Info",
    className: "border-emerald/25 bg-emerald/10 text-emerald",
    dot: "bg-emerald",
  },
};

export type Advisory = {
  slug: string;
  severity: Severity;
  title: string;
  excerpt: string;
  publishedAt: string;
};

export const recentAdvisories: Advisory[] = [
  {
    slug: "boat-speed-restriction-melgar-mouth",
    severity: "WARNING",
    title: "Boat speeds restricted near the Melgar river mouth",
    excerpt:
      "Sustained rains have raised water levels. Reduce wake within 200 metres of the nesting marsh until further notice.",
    publishedAt: "18 Oct 2026",
  },
  {
    slug: "asian-waterbird-census-2026",
    severity: "INFO",
    title: "Asian Waterbird Census 2026: 11,480 individuals counted",
    excerpt:
      "Volunteers recorded 43 species across nine counting blocks, including a new high count for Philippine Duck.",
    publishedAt: "12 Oct 2026",
  },
  {
    slug: "migratory-season-opens",
    severity: "INFO",
    title: "Migratory season opens — expect peak arrivals through November",
    excerpt:
      "The first flocks have reached the southern shallows. Guides are adjusting departure times to 5:30 AM.",
    publishedAt: "02 Oct 2026",
  },
];

export type ParkRule = {
  title: string;
  description: string;
  why: string;
  icon: "leaf" | "ban" | "camera" | "lifebuoy" | "fish" | "footprints" | "users";
};

export const parkRules: ParkRule[] = [
  {
    title: "Leave nothing behind",
    description:
      "Everything you bring — wrappers, bottles, bait boxes — leaves with you. There are no bins on the water.",
    why: "Plastic in the shallows is ingested by ducks and fish within days.",
    icon: "leaf",
  },
  {
    title: "Never feed or approach wildlife",
    description:
      "Keep at least 30 metres from roosting birds, and never lure them with food for a photograph.",
    why: "Hand-fed birds lose their foraging instinct and drift into boat lanes.",
    icon: "ban",
  },
  {
    title: "No flash at nesting sites",
    description:
      "Between October and March, flash photography and drone flight are prohibited within 100 m of reed beds.",
    why: "A single disturbance can make a pair abandon its clutch.",
    icon: "camera",
  },
  {
    title: "Wear your life jacket",
    description:
      "Every passenger, every crossing. Children under 12 keep theirs on for the whole tour.",
    why: "Required by coast guard rules and checked at the jetty before departure.",
    icon: "lifebuoy",
  },
  {
    title: "Fish only where it is allowed",
    description:
      "Rod and line in the sustainable use zone only. Nets, traps, and electro-fishing are prohibited park-wide.",
    why: "Spawning beds sit inside the strict protection zone.",
    icon: "fish",
  },
  {
    title: "Ask before you photograph people",
    description:
      "Fisherfolk and homestay hosts are neighbours, not scenery. Ask first, and buy from local vendors.",
    why: "Tourism only protects the lake while it respects the people who live beside it.",
    icon: "users",
  },
];

export type Zone = {  name: string;
  access: string;
  description: string;
  icon: "shield" | "compass" | "home";
};

export const lakeZones: Zone[] = [
  {
    name: "Strict Protection Zone",
    access: "Closed to tourism",
    description:
      "Breeding grounds and fish spawning beds. Entry requires a PENRO research permit and is never granted for leisure.",
    icon: "shield",
  },
  {
    name: "Sustainable Use Zone",
    access: "Guided access only",
    description:
      "Where accredited boats operate: birdwatching runs, designated photography points, and regulated angling.",
    icon: "compass",
  },
  {
    name: "Buffer Zone",
    access: "Controlled access",
    description:
      "Shoreline communities, footpaths, and homestays — the living edge between the park and the paddies.",
    icon: "home",
  },
];
