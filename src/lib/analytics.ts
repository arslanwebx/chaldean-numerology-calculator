export type SafeEvent = "calculator_started" | "calculator_completed";
export function trackSafeEvent(event: SafeEvent): void {
  if (typeof window === "undefined" || process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "true") return;
  const consent = window.localStorage.getItem("privacy-consent");
  if (consent !== "accepted") return;
  const ga = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  ga?.("event", event);
}
