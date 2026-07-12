import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return <header className="site-header"><div className="container header-inner"><Logo/><MobileNav/></div></header>;
}

const guides = [["Calculator", "/#calculator"], ["Chaldean numerology chart", "/chaldean-numerology-chart/"], ["Number meanings 1 to 9", "/numerology-number-meanings/"], ["Chaldean vs Pythagorean", "/chaldean-vs-pythagorean-numerology/"], ["All guides", "/blog/"]] as const;
const sitePages = [["About", "/about/"], ["Arslan Ejaz, author", "/author/arslan-ejaz/"], ["Contact", "/contact/"], ["Editorial policy", "/editorial-policy/"], ["Accessibility", "/accessibility/"]] as const;
const policies = [["Privacy policy", "/privacy-policy/"], ["Terms and conditions", "/terms-and-conditions/"], ["Disclaimer", "/disclaimer/"], ["Cookie policy", "/cookie-policy/"]] as const;

function FooterLinks({ links }: { links: readonly (readonly [string, string])[] }) {
  return <ul>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Logo/><p>A transparent, privacy-first calculator for exploring a traditional number system.</p><p className="fine">Calculations stay in your browser.</p><div className="footer-contact"><span>Questions or corrections?</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></div></div><div><h2>Tools and guides</h2><FooterLinks links={guides}/></div><div><h2>Site pages</h2><FooterLinks links={sitePages}/></div><div><h2>Policies</h2><FooterLinks links={policies}/></div></div><div className="container footer-bottom"><span>{"©"} {new Date().getFullYear()} Chaldean Numerology Calculator</span><span>For entertainment and personal reflection, not professional advice.</span></div></footer>;
}
