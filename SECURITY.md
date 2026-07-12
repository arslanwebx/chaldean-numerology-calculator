# Security Policy

## Privacy and data handling

Name and birth-date calculations run locally in the browser. They are not intentionally transmitted, saved, logged, or included in analytics. Contact submissions are separate and contain only name, email, subject, and message.

## Reporting

Set `CONTACT_EMAIL` to the owner's monitored security contact before launch. Reports should describe the affected URL, impact, and reproduction steps without including real calculator data or secrets.

## Controls and limitations

The app sets CSP, anti-framing, MIME-sniffing, referrer, permissions, and production HSTS headers. Server inputs use Zod, mail headers are stripped of newlines, SMTP errors are generic, and a single-process rate limit plus honeypot reduces basic form abuse. Distributed attacks require Hostinger or CDN-level controls. Security reduces risk; it is never a guarantee.

Dependencies should be reviewed with `npm audit --omit=dev`, updated deliberately, and verified with `npm run check`. Never commit `.env` files or credentials.
