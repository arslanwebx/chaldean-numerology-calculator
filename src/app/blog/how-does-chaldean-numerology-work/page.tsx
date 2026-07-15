import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { CHALDEAN_GROUPS } from "@/data/chaldean";
import { articleMetadata } from "@/lib/metadata";

const path = "/blog/how-does-chaldean-numerology-work/";
const title = "How Does Chaldean Numerology Work?";
const description = "Chaldean numerology maps letters to values from 1 to 8, adds the full name total, preserves that compound, and reduces it to a root from 1 to 9.";
const image = "/images/blog/how-chaldean-numerology-works.webp";
const imageAlt = "A left-to-right diagram showing grouped values becoming a compound and then one root token";

export const metadata = articleMetadata({
  title: "How Does Chaldean Numerology Work? Step-by-Step Method",
  description: "See how Chaldean numerology converts letters into values, preserves compound totals, reduces roots, and calculates Birth and Life Path numbers with examples.",
  path,
  image,
  imageAlt,
  published: "2026-07-15",
});

const faqs = [
  {
    question: "Do spaces, hyphens, or apostrophes count in Chaldean numerology?",
    answer: "No. In the method used here, ordinary punctuation has no number value. It separates name parts so word subtotals can be displayed, but only recognized Latin letters contribute to the total.",
  },
  {
    question: "Can 9 appear in a Chaldean numerology result?",
    answer: "Yes. The common chart assigns no letter to 9, but a letter sum can reduce to 9. For example, JOHN totals 18 and reduces to 9, so its result is 18/9.",
  },
  {
    question: "Does this method keep 11, 22, and 33 as master numbers?",
    answer: "No. The strict reduction used by this calculator continues until one digit remains, so 11 becomes 2, 22 becomes 4, and 33 becomes 6. Calculators that preserve master numbers are using a different stated convention.",
  },
  {
    question: "How are non-Latin names calculated?",
    answer: "The chart defines Latin letters A through Z. Enter the usual Latin transliteration you personally use. Automated transliteration is avoided because different spellings can produce different totals.",
  },
] as const;

export default function Page() {
  return <BlogArticle
    title={title}
    description={description}
    path={path}
    published="2026-07-15"
    image={image}
    imageAlt={imageAlt}
    sections={[
      { id: "process", label: "The process in four steps" },
      { id: "chart", label: "The letter chart" },
      { id: "name-example", label: "Worked name example" },
      { id: "compound-root", label: "Compound and root" },
      { id: "dates", label: "Birth-date numbers" },
      { id: "differences", label: "Why results differ" },
      { id: "implementation", label: "How this calculator handles input" },
      { id: "limits", label: "What the method cannot establish" },
      { id: "faq", label: "Frequently asked questions" },
    ]}
    faqs={faqs}
  >
    <div className="callout">
      <p><strong>How it works:</strong> choose a name, replace each recognized letter with its Chaldean value, add every value to get the compound number, then add the compound's digits repeatedly until one root digit remains.</p>
      <p>A date of birth uses separate arithmetic. The calendar day forms the Birth Number, while all date digits form the Life Path Number.</p>
    </div>

    <h2 id="process">The process in four steps</h2>
    <ol>
      <li><strong>Fix the input.</strong> Decide which name version you are calculating and write it exactly enough to identify it later.</li>
      <li><strong>Assign letter values.</strong> Use one Chaldean chart consistently for every A-to-Z letter.</li>
      <li><strong>Add the compound.</strong> Sum all recognized letters before reducing anything.</li>
      <li><strong>Reduce to the root.</strong> Add the digits repeatedly until the result is between 1 and 9.</li>
    </ol>
    <p>This is the documented method used by the calculator on this site. The arithmetic is deliberately visible, so a reader can confirm the result instead of trusting a number produced behind a curtain.</p>
    <p>The distinction between single and compound numbers appears in the historical <a href="https://archive.org/download/cheirosbookofnumbers/Cheiro%27s%20Book%20of%20Numbers_text.pdf">digitized text of <cite>Cheiro's Book of Numbers</cite></a>. Modern schools may change the input or interpretation rules, which is why naming the method matters.</p>

    <h2 id="chart">Step 1: use the Chaldean letter chart</h2>
    <p>The common Latin-letter chart uses values 1 through 8. It is not alphabetical, and no letter receives 9.</p>
    <div className="table-wrap" role="region" aria-label="Chaldean letter values from 1 to 8" tabIndex={0}>
      <table>
        <thead><tr><th>Value</th><th>Letters</th></tr></thead>
        <tbody>{Object.entries(CHALDEAN_GROUPS).map(([value, letters]) => <tr key={value}><td><strong>{value}</strong></td><td>{letters.join(" · ")}</td></tr>)}</tbody>
      </table>
    </div>
    <p>Nine is still available as an output. A total of 18 reduces to 1 + 8 = 9. The absence of a 9 letter group therefore does not remove 9 from the number system.</p>
    <p>Keep this table separate from the sequential Pythagorean chart. If you want to inspect spelling, accents, punctuation, and transliteration in more detail, use the <Link href="/chaldean-numerology-chart/">complete chart reference</Link>.</p>

    <h2 id="name-example">Step 2: add a name without reducing early</h2>
    <p>Take <strong>ALICE</strong>. Replace each letter with its value:</p>
    <div className="calculation-example" aria-label="Step-by-step Chaldean calculation for Alice">
      <p>A = 1, L = 3, I = 1, C = 3, E = 5</p>
      <p><strong>1 + 3 + 1 + 3 + 5 = 13</strong></p>
      <p>1 + 3 = 4</p>
      <p>Final notation: <strong>13/4</strong></p>
    </div>
    <p>If a name contains several words, the calculator shows each word subtotal for checking, then adds those subtotals into one full compound. It does not reduce each word to a root before combining them.</p>
    <p>For example, <strong>CHALDEAN NUMEROLOGY</strong> has word subtotals of 30 and 40. The complete total is 70, and 7 + 0 gives root 7. The result is 70/7.</p>

    <h2 id="compound-root">Step 3: preserve the compound, then find the root</h2>
    <p>A compound number is the unreduced total. A root number is the final one-digit result. They answer different questions inside the tradition:</p>
    <ul>
      <li>The <strong>compound</strong> preserves the exact arithmetic path.</li>
      <li>The <strong>root</strong> groups the result under a broad one-digit theme.</li>
    </ul>
    <p>Several compounds can share a root. Thirteen, 22, 31, and 40 all reduce to 4. Reporting only “4” hides which sum the name actually produced.</p>
    <p>This calculator also reduces 11, 22, and 33 instead of stopping at modern master numbers. That means 22/4 remains visible as a compound/root pair. The method neither discards 22 nor treats it as the final root.</p>
    <p>Once you have checked the arithmetic, the <Link href="/numerology-number-meanings/">root number meaning guide</Link> offers balanced reflection prompts for 1 through 9. It labels the interpretations as traditional associations rather than personality findings.</p>

    <h2 id="dates">How Birth and Life Path numbers are calculated</h2>
    <p>Date numbers do not use the letter chart. They use the digits in a valid Gregorian birth date.</p>
    <p>Consider <strong>December 24, 1990</strong>:</p>
    <div className="table-wrap" role="region" aria-label="Birth and Life Path calculation example" tabIndex={0}>
      <table>
        <thead><tr><th>Result</th><th>Calculation</th><th>Displayed value</th></tr></thead>
        <tbody>
          <tr><td>Birth Number</td><td>Day 24, then 2 + 4</td><td><strong>24/6</strong></td></tr>
          <tr><td>Life Path Number</td><td>1 + 9 + 9 + 0 + 1 + 2 + 2 + 4 = 28, then 2 + 8 = 10, then 1 + 0</td><td><strong>28/1</strong></td></tr>
        </tbody>
      </table>
    </div>
    <p>The Birth Number uses only the day. The Life Path Number uses every digit in the full date. Some numerology schools reduce the day, month, and year separately or preserve master numbers, so their life-path result may differ for some dates.</p>

    <h2 id="differences">Why two Chaldean calculators can disagree</h2>
    <p>A different result usually comes from a different rule, not difficult arithmetic. Check these variables:</p>
    <ul>
      <li>Was the everyday name or full birth name used?</li>
      <li>Did both tools use the same letter chart?</li>
      <li>Were accents or non-Latin names transliterated the same way?</li>
      <li>Were word subtotals reduced before being combined?</li>
      <li>Did one tool stop at 11, 22, or 33?</li>
      <li>Does “Destiny Number” refer to a name or a full birth date?</li>
    </ul>
    <p>The <Link href="/chaldean-vs-pythagorean-numerology/">comparison of Chaldean and Pythagorean numerology</Link> shows how an entirely different chart can produce a different answer for the same spelling.</p>

    <h2 id="implementation">How this calculator handles input</h2>
    <p>The site's implementation follows a small set of explicit rules:</p>
    <ul>
      <li>Uppercase and lowercase letters are treated equally.</li>
      <li>Common accented Latin characters are normalized to their base letter.</li>
      <li>Spaces, hyphens, apostrophes, periods, and ordinary punctuation add no value.</li>
      <li>Unsupported writing systems trigger a request for the user's chosen Latin transliteration.</li>
      <li>Names are limited to 100 visible characters.</li>
      <li>Impossible or future birth dates are rejected.</li>
      <li>All calculations run in the browser; the name and date are not sent to the contact API.</li>
    </ul>
    <p>Automated tests verify the 26-letter mapping, examples such as ALICE 13/4 and JOHN 18/9, punctuation handling, accent normalization, repeated reduction, leap days, impossible dates, and future-date rejection.</p>

    <h2 id="limits">What the method can and cannot establish</h2>
    <p>It can establish a reproducible number for a stated input and stated rules. It cannot establish that the number caused a personality trait, predicts an event, proves compatibility, or identifies the right medical, legal, financial, career, or relationship decision.</p>
    <p>An <a href="https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/numeromancy">encyclopedia definition places numeromancy within divination</a>, and the <a href="https://www.anthroencyclopedia.com/entry/divination">Open Encyclopedia of Anthropology describes divination as a varied cultural practice</a>. Those are more appropriate contexts for numerology than scientific measurement.</p>
    <p className="notice">Treat the result as symbolic or reflective material. Keep evidence and qualified professional advice in charge of consequential decisions.</p>

    <h2>Verify the process yourself</h2>
    <p>Enter one name, compare every letter with the chart, add the displayed values, and confirm the reduction. A useful calculator should make that check easy.</p>
    <aside className="cta"><h2>See every calculation step</h2><p>The calculator displays recognized letters, word subtotals, the full compound, and the root. Add a date only if you also want Birth and Life Path numbers.</p><Link className="cta-button" href="/#calculator">Open the Chaldean calculator <span aria-hidden="true">→</span></Link></aside>
  </BlogArticle>;
}
