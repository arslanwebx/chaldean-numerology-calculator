import { siteConfig } from "@/config/site";
export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  if (!siteConfig.adsEnabled) return null;
  return <aside aria-label={label} className="ad-slot"><span>{label}</span>{/* Ad unit markup is added only after approval and a real slot ID. */}</aside>;
}
