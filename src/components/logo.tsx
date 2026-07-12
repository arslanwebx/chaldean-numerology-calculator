import Link from "next/link";

export function Logo() {
  return <Link href="/" className="logo" aria-label="Chaldean Numerology Calculator home">
    <svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2"/><ellipse cx="24" cy="24" rx="21" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-28 24 24)"/><circle cx="42" cy="16" r="2.5" fill="currentColor"/><text x="24" y="30" textAnchor="middle" fontSize="17" fontWeight="700" fill="currentColor">8</text></svg>
    <span>Chaldean Numerology <small>Calculator</small></span>
  </Link>;
}
