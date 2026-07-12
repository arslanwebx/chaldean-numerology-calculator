import Script from "next/script";
import { siteConfig } from "@/config/site";

export function GoogleAnalytics() {
  if (!siteConfig.analyticsEnabled || !siteConfig.gaId) return null;

  return <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.gaId}',{anonymize_ip:true});`}
    </Script>
  </>;
}
