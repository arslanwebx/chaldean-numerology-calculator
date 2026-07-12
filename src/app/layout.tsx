import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/site-chrome";
import { siteConfig } from "@/config/site";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` }, description: siteConfig.description, authors: [{ name: "Arslan Ejaz" }], creator: "Arslan Ejaz", publisher: siteConfig.publisher, category: "Numerology reference", applicationName: siteConfig.name, formatDetection: { telephone: false, address: false, email: false }, icons: { icon: "/icon.svg", apple: "/apple-icon.svg" }, manifest: "/manifest.webmanifest" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f4ec" }, { media: "(prefers-color-scheme: dark)", color: "#251b4b" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><Header/><main id="main-content">{children}</main><Footer/><GoogleAnalytics/></body></html>; }
