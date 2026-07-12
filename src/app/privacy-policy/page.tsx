import { ContentPage } from "@/components/page";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Privacy Policy", "How this calculator handles browser-local inputs, hosting logs, contact messages, analytics, and privacy choices.", "/privacy-policy/");

export default function Page() {
  return <ContentPage eyebrow={`Last updated ${siteConfig.policyDate}`} title="Privacy Policy" intro="This policy explains how calculator inputs remain private, what ordinary technical data may be processed, and how Google Analytics is used." path="/privacy-policy/">
    <h2>Calculator data</h2><p>Name and birth-date calculations happen in your browser. The site does not intentionally transmit, log, store, or retain those inputs or results. They are not placed in URLs, cookies, local storage, analytics events, or public share links.</p>
    <h2>Hosting and technical logs</h2><p>Hosting infrastructure may create ordinary request logs containing an IP address, time, requested path, browser information, and error details. These logs support security and reliability and are controlled by the host's settings. Calculator field values are not part of normal page requests.</p>
    <h2>Contact messages</h2><p>If you contact the site, your name, email, subject, and message are used to respond and address the request. Messages are retained only as long as reasonably needed for correspondence, records, abuse prevention, or legal obligations. Do not send birth dates, results, or sensitive information.</p>
    <h2>Google Analytics</h2><p>This site loads Google Analytics using measurement ID G-YMSPK6ZB6H to measure ordinary page usage and technical performance. Google may receive information such as page URLs, approximate location derived from an IP address, browser and device details, and cookie or session identifiers. IP anonymization is requested in the tag configuration. Calculator names, birth dates, number results, and calculation breakdowns are never deliberately included in analytics events.</p>
    <h2>Advertising</h2><p>Advertising remains disabled. No AdSense script or ad unit is loaded by the current site configuration.</p>
    <h2>Your choices and regional rights</h2><p>You can control or delete cookies in your browser and use Google's available Analytics opt-out controls. Depending on where you live, you may have rights to request access, correction, deletion, restriction, or objection. These rights have legal limits and must be assessed for the applicable jurisdiction.</p>
    <h2>Children, security, and updates</h2><p>This general-audience site is not directed to children under 13 and does not knowingly seek their personal information. Reasonable safeguards reduce risk, but no internet service can promise absolute security. This policy may change when features, vendors, or legal requirements change.</p>
    <h2>Contact</h2><p>Privacy questions may be sent to <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p>
  </ContentPage>;
}
