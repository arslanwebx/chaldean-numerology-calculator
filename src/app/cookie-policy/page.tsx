import { ContentPage } from "@/components/page";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Cookie Policy", "Understand essential, analytics, and advertising cookies and how to manage your choices.", "/cookie-policy/");

export default function Page() {
  return <ContentPage eyebrow={`Last updated ${siteConfig.policyDate}`} title="Cookie Policy" intro="The calculator does not use cookies to process or save a name or birth date. Google Analytics is active for ordinary site measurement." path="/cookie-policy/">
    <h2>Essential technology</h2><p>Basic page delivery, security, and contact-form protection may use short-lived technical state where the hosting environment requires it. Calculator entries and results are not stored in cookies.</p>
    <h2>Google Analytics</h2><p>This site uses Google Analytics with measurement ID G-YMSPK6ZB6H to understand general page usage and site performance. Google may use cookies or similar identifiers to distinguish browsers and sessions. The site does not send entered names, birth dates, compound totals, root numbers, or result text as analytics event data.</p>
    <h2>Advertising</h2><p>Advertising is currently disabled. Advertising cookies are not loaded merely because the codebase supports future configuration. If advertising is enabled later, this policy and the applicable privacy choices must be updated first.</p>
    <h2>Managing cookies</h2><p>You can delete or block cookies through your browser settings. Google also provides browser and account-level controls for Analytics data. Blocking analytics storage does not prevent the local numerology calculation from working.</p>
  </ContentPage>;
}
