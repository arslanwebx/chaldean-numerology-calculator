const fallbackOrigin = process.env.NODE_ENV === "production" ? "https://chaldeannumerology.online" : "http://localhost:3000";

function validOrigin(value: string | undefined): string {
  if (!value) return fallbackOrigin;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.hostname === "localhost" ? url.origin : fallbackOrigin;
  } catch { return fallbackOrigin; }
}

export const siteConfig = Object.freeze({
  name: "Chaldean Numerology Calculator",
  title: "Chaldean Numerology Calculator – Find Your Name & Destiny Number",
  description: "Calculate your Chaldean numerology number instantly. Enter your name and birth date to reveal your destiny, personality, and life path number.",
  url: validOrigin(process.env.SITE_URL),
  contactEmail: process.env.CONTACT_EMAIL?.trim() || "admin@chaldeannumerology.online",
  publisher: process.env.PUBLISHER_NAME?.trim() || "Arslan Ejaz",
  governingLaw: process.env.GOVERNING_LAW?.trim() || "",
  policyDate: "July 11, 2026",
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || "G-YMSPK6ZB6H",
  analyticsEnabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "false",
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID),
});

export type PublicSiteConfig = typeof siteConfig;
