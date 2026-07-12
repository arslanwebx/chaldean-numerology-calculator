# Chaldean Numerology Calculator

A production-oriented Next.js website that calculates a Chaldean Name Number in the browser and optionally adds Birth and Life Path numbers from a valid Gregorian birth date. It shows every letter value, word subtotal, compound number, root reduction, and carefully labeled traditional interpretation.

## Requirements and local setup

- Node.js 22.x (Hostinger also supports newer versions, but 22 is the deployment target)
- npm 10 or newer

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Never commit `.env.local`.

## Environment variables

Required before public launch:

- `SITE_URL`: final HTTPS origin, for example the real production origin. Do not include a path or trailing slash.
- `CONTACT_EMAIL`: public, monitored contact address.
- `PUBLISHER_NAME`: real owner or organization name when ready to publish it.

Optional:

- `GOVERNING_LAW`: only after the owner and legal reviewer select a real jurisdiction.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`: enable contact delivery when all are set. `CONTACT_EMAIL` is the recipient.
- `NEXT_PUBLIC_GA_ID` plus `NEXT_PUBLIC_ANALYTICS_ENABLED=true`: reserved for consent-aware GA4. The current abstraction never sends calculator-derived values.
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` plus `NEXT_PUBLIC_ADS_ENABLED=true`: reserved until AdSense approval and consent integration. No live slot is shipped.
- `ADSENSE_PUBLISHER_ID`: server-only reference for a future real `ads.txt` entry after approval. Do not publish `ads.txt` without the issued ID.

## Methodology

The immutable chart is 1: A I J Q Y, 2: B K R, 3: C G L S, 4: D M T, 5: E H N X, 6: U V W, 7: O Z, and 8: F P. Common accented Latin letters normalize to their base. Punctuation adds no value. Unsupported scripts prompt the visitor to choose their own Latin transliteration.

The complete name total is preserved, then digit-reduced to 1–9 without stopping at 11, 22, or 33. Birth Number uses the calendar day. Life Path uses every digit of the full date. Dates are parsed as components, not through UTC conversion.

Numerology is an esoteric practice for entertainment and reflection, not a scientific or professional diagnostic method.

## Commands

```bash
npm run dev        # local server
npm run lint       # ESLint
npm run typecheck  # strict TypeScript
npm run test       # Vitest
npm run build      # optimized production build
npm run start      # production server, respects PORT
npm run check      # lint, typecheck, tests, and build
```

## Hostinger GitHub deployment

1. Push the completed repository to GitHub after review.
2. In hPanel choose Websites, Add Website, then Node.js Web App and import the Git repository.
3. Use the repository root as the application root. `package.json` is at that root.
4. Select Node.js 22.x and npm.
5. Set environment variables in hPanel, never in Git.
6. Configure commands:
   - Install: `npm ci`
   - Build: `npm run build`
   - Start: `npm run start`
7. Deploy, open the temporary and final domains, then check `/api/health/` returns only `{"status":"ok"}`.
8. Verify direct navigation to every sitemap URL and confirm `SITE_URL` exactly matches the final HTTPS origin before indexing.

Hostinger's current managed Node.js flow supports Next.js and detects the Node version from `package.json`. Review the [official Hostinger Node.js deployment guide](https://www.hostinger.com/tutorials/deploy-node-js-application) because hPanel labels can change.

## Enabling optional services safely

SMTP: configure every SMTP value and test both success and unavailable states. The included in-memory limiter protects one process only, so enable Hostinger or CDN abuse controls for production volume.

GA4: complete a regional consent assessment and integrate a suitable consent manager before changing the enable flag. Keep event payloads generic. Never send names, birth dates, totals, roots, or result text.

AdSense: apply only after the final site, domain, policies, and original content are ready. Approval belongs to Google. After approval, add a reviewed consent solution, a real ad unit implementation in safe content positions, and an `ads.txt` line using the issued publisher ID. Do not place ads beside calculator or navigation controls.

Blog: follow [BLOG_AUTHORING.md](BLOG_AUTHORING.md). The empty archive is noindex and excluded from the sitemap until a genuine post is published.

## Search Console launch checklist

- Set and verify the final `SITE_URL`, then redeploy.
- Verify ownership of the final domain in Search Console.
- Submit `https://your-real-domain/sitemap.xml` only after canonical URLs are correct.
- Inspect the homepage URL and test the rendered HTML and mobile usability.
- Monitor indexing, crawl errors, security issues, and Core Web Vitals.
- Do not request indexing while the temporary domain is canonical.

## Privacy and launch checklist

- Confirm calculator network requests never contain field values.
- Set a monitored contact email and test SMTP if enabled.
- Keep analytics and ads off until consent and policy work is complete.
- Review Hostinger log retention and access controls.
- Run `npm audit --omit=dev` and `npm run check` before each release.
- Have Privacy, Terms, Cookie, Disclaimer, and data-handling choices reviewed by a qualified lawyer before commercial launch.
- Check keyboard navigation, 200% zoom, screen-reader field errors, print output, and 320px layout with real devices where possible.

No ranking, AdSense approval, legal compliance, accessibility conformance, security, or performance score is guaranteed by this implementation.
