# Chaldean Numerology Calculator

A fast, responsive, and user-friendly Chaldean numerology calculator built to help users calculate their name number, destiny number, personality number, and life path number using the traditional Chaldean numerology system.

Live website: [Chaldean Numerology Calculator](https://chaldeannumerology.online/)

## Features

* Chaldean name number calculator
* Birth date and life path number calculation
* Compound and root number results
* Clear number meanings and interpretations
* Mobile-friendly responsive design
* Fast page loading
* SEO-friendly page structure
* Accessible forms and readable content
* Privacy-focused calculations
* Blog-ready structure
* About, Contact, Privacy Policy, Disclaimer, Terms, and other important pages
* Sitemap and robots.txt support
* Structured data for search engines

## Chaldean Numerology Letter Chart

| Number | Letters       |
| ------ | ------------- |
| 1      | A, I, J, Q, Y |
| 2      | B, K, R       |
| 3      | C, G, L, S    |
| 4      | D, M, T       |
| 5      | E, H, N, X    |
| 6      | U, V, W       |
| 7      | O, Z          |
| 8      | F, P          |

In the traditional Chaldean system, the number 9 is not assigned directly to any letter. However, a final calculation may still reduce to 9.

## How It Works

1. The user enters a name.
2. Each letter is matched with its Chaldean number.
3. The values are added together.
4. The calculator displays the compound number and reduced root number.
5. If a birth date is entered, the calculator also calculates the life path number.
6. The result section explains the meaning associated with each number.

## Technology

This project may use the following technologies:

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML5
* CSS3
* JavaScript
* JSON-LD structured data

## Local Development

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Open the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local website in your browser:

## Environment variables

Required before public launch:

- `SITE_URL`: final HTTPS origin, for example the real production origin. Do not include a path or trailing slash.
- `CONTACT_EMAIL`: public, monitored contact address. The configured launch address is `admin@chaldeannumerology.online`.
- `PUBLISHER_NAME`: real owner or organization name. The configured author and publisher is Arslan Ejaz.

Optional:

- `GOVERNING_LAW`: only after the owner and legal reviewer select a real jurisdiction.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`: enable contact delivery when all are set. Form mail is delivered to `admin@chaldeannumerology.online`.
- `NEXT_PUBLIC_GA_ID` plus `NEXT_PUBLIC_ANALYTICS_ENABLED=true`: enables the configured GA4 tag. The implementation never sends calculator-derived values. Set the flag to `false` to disable it.
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
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Deployment

The website is designed to be deployed through GitHub to a Node.js-compatible hosting platform such as Hostinger.

Blog: follow [BLOG_AUTHORING.md](BLOG_AUTHORING.md). The archive lists the three canonical long-form guides and can be extended with reviewed articles.

Typical deployment process:

1. Push the completed project to GitHub.
2. Connect the GitHub repository to Hostinger.
3. Select the correct project branch.
4. Use Node.js 22 or the version defined in `package.json`.
5. Run `npm install`.
6. Use `npm run build` as the build command.
7. Use `npm run start` as the start command.
8. Add the production domain and environment variables.
9. Confirm that the sitemap, robots.txt, canonical URLs, and metadata use the production domain.

Production website:

https://chaldeannumerology.online/

## SEO

The project is structured to support:

* Descriptive title tags
* Unique meta descriptions
* Correct heading hierarchy
* Canonical URLs
* Open Graph metadata
* Twitter card metadata
* XML sitemap
* robots.txt
* Internal linking
* Mobile usability
* Fast loading performance
* FAQ structured data
* Organization and website schema
* Search-friendly calculator content

The primary website topic is the Chaldean numerology calculator.

## Privacy

The calculator should process user-entered names and birth dates locally whenever possible.

The application should not permanently store:

* Names entered into the calculator
* Birth dates
* Numerology results
* Personal calculation history

Review the live website’s Privacy Policy for complete details.

## Accuracy Notice

Numerology is a belief-based interpretive system and is not scientifically proven. Calculator results are provided for informational, educational, and entertainment purposes.

The website does not provide medical, legal, financial, psychological, or professional advice.

## Contributing

Contributions that improve accessibility, calculation accuracy, performance, content quality, testing, or user experience are welcome.

Before submitting a contribution:

1. Create a separate branch.
2. Make and test your changes.
3. Confirm that the production build succeeds.
4. Submit a pull request with a clear description.
5. Avoid adding unnecessary packages or tracking scripts.

## License

All original website content, branding, graphics, and design elements are protected by their respective owner unless otherwise stated.

Source code licensing terms should be added here based on the repository owner’s preferred license.

## Website

Use the free calculator and learn more about the Chaldean numerology system:

**[Chaldean Numerology Calculator](https://chaldeannumerology.online/)**

