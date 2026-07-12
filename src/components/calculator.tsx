"use client";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { calculateDate, calculateName, DateCalculation, NameCalculation, NumerologyError } from "@/lib/numerology";
import { COMPOUND_MEANINGS, rootMeaning } from "@/data/interpretations";

type Errors = { name?: string; date?: string };

export function Calculator() {
  const [name, setName] = useState(""); const [date, setDate] = useState(""); const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<{ name: NameCalculation; date?: DateCalculation }>(); const [notice, setNotice] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent) {
    event.preventDefault(); const next: Errors = {};
    let nameResult: NameCalculation | undefined; let dateResult: DateCalculation | undefined;
    try { nameResult = calculateName(name); } catch (error) { next.name = error instanceof NumerologyError ? error.message : "Check the entered name."; }
    if (date) try { dateResult = calculateDate(date); } catch (error) { next.date = error instanceof NumerologyError ? error.message : "Check the birth date."; }
    setErrors(next);
    if (!nameResult || Object.keys(next).length) { setResult(undefined); setNotice("Please correct the highlighted field."); return; }
    setResult({ name: nameResult, date: dateResult }); setNotice(`New result calculated. Name Number ${nameResult.compound}/${nameResult.root}.`);
    requestAnimationFrame(() => resultRef.current?.focus());
  }
  function reset() { setName(""); setDate(""); setErrors({}); setResult(undefined); setNotice("Calculator reset."); }
  async function copy() {
    if (!result) return; const text = `${result.name.input}: Name Number ${result.name.compound}/${result.name.root}${result.date ? `, Birth Number ${result.date.birthCompound}/${result.date.birthRoot}, Life Path Number ${result.date.lifePathCompound}/${result.date.lifePathRoot}` : ""}. Interpretations are traditional and non-scientific.`;
    try { await navigator.clipboard.writeText(text); setNotice("Summary copied to the clipboard."); } catch { setNotice("Copy was unavailable. Select the result text and copy it manually."); }
  }
  const meaning = result ? rootMeaning(result.name.root) : undefined;
  const firstName = result?.name.input.trim().split(/[\s-]+/)[0];
  return <section id="calculator" className="calculator-shell" aria-labelledby="calculator-title">
    <div className="calculator-intro"><p className="eyebrow">Your private calculation</p><h2 id="calculator-title">Calculate your Chaldean numbers</h2><p>Enter the name you commonly use. Add a birth date for two optional date-based numbers.</p><p className="privacy-note">🔒 Calculations happen in this browser. Your entries are not stored or sent to a server.</p></div>
    <form onSubmit={submit} noValidate className="calculator-form">
      <div className="field"><label htmlFor="full-name">Full name or commonly used name <span aria-hidden="true">*</span></label><input id="full-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={101} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={`name-help${errors.name ? " name-error" : ""}`}/><p id="name-help" className="help">For example, Alice Morgan. Latin letters, up to 100 characters.</p>{errors.name && <p id="name-error" className="error" role="alert">{errors.name}</p>}</div>
      <div className="field"><label htmlFor="birth-date">Date of birth <span className="optional">Optional</span></label><input id="birth-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-invalid={Boolean(errors.date)} aria-describedby={`date-help${errors.date ? " date-error" : ""}`}/><p id="date-help" className="help">Adds your Birth Number and birth-date Life Path Number.</p>{errors.date && <p id="date-error" className="error" role="alert">{errors.date}</p>}</div>
      <div className="actions"><button className="button primary" type="submit">Calculate my numbers</button><button className="button secondary" type="button" onClick={reset}>Reset</button></div>
    </form>
    <p className="sr-only" aria-live="polite">{notice}</p>
    {result && meaning ? <div className="results" ref={resultRef} tabIndex={-1} aria-labelledby="result-title">
      <div className="result-heading"><div><p className="eyebrow">Your reading</p><h3 id="result-title">{firstName}, here is your calculation</h3></div><div className="result-actions"><button className="text-button" onClick={copy}>Copy summary</button><button className="text-button" onClick={() => window.print()}>Print or save PDF</button></div></div>
      <div className="number-cards"><NumberCard label="Name Number" compound={result.name.compound} root={result.name.root}/>{result.date && <><NumberCard label="Birth Number" compound={result.date.birthCompound} root={result.date.birthRoot}/><NumberCard label="Life Path Number" compound={result.date.lifePathCompound} root={result.date.lifePathRoot}/></>}</div>
      {!result.date && <p className="callout">Your name result is complete. Add a date of birth whenever you want to explore the optional Birth and Life Path numbers.</p>}
      <div className="interpretation-grid"><article><p className="eyebrow">Root {meaning.number}: {meaning.title}</p><h4>Personality interpretation</h4><p>{meaning.overview}</p><p><strong>Traditional planetary association:</strong> {meaning.planet}. This correspondence is traditional, not scientific, and varies by school.</p></article><article><h4>Strengths often associated</h4><ul>{meaning.strengths.map((item) => <li key={item}>{item}</li>)}</ul><h4>Possible growth areas</h4><ul>{meaning.growth.map((item) => <li key={item}>{item}</li>)}</ul></article></div>
      <blockquote>{meaning.prompt}</blockquote>
      <article className="compound"><h4>Compound {result.name.compound}</h4><p>{COMPOUND_MEANINGS[result.name.compound] ?? `The exact total is ${result.name.compound}. Commonly published Cheiro-style lists usually focus on 10 through 52, so no special traditional compound meaning is assigned here. The root interpretation above remains available.`}</p></article>
      {result.date && <p className="interaction"><strong>How these themes may interact:</strong> Your name root {result.name.root}, birth root {result.date.birthRoot}, and life-path root {result.date.lifePathRoot} can be read as different lenses on expression, day-of-birth tendencies, and the full-date theme. Similarities may reinforce a theme; differences can invite balance. Compatibility rules vary across schools and are not predictions.</p>}
      <details><summary>How this was calculated</summary><div className="breakdown">{result.name.words.map((word) => <div key={word.word}><strong>{word.word}: {word.subtotal}</strong><span>{word.letters.map(({ letter, value }) => `${letter}${value}`).join(" + ")}</span></div>)}<p>Total: {result.name.compound}. Digit reduction: {digitSteps(result.name.compound)} = {result.name.root}.</p>{result.date && <p>Birth Number uses day {result.date.birthCompound}. Life Path adds every digit in {result.date.date}, giving {result.date.lifePathCompound}, then reduces to {result.date.lifePathRoot}.</p>}</div></details>
      <p className="result-links">Review the <Link href="/chaldean-numerology-chart/">letter chart</Link> or explore all <Link href="/numerology-number-meanings/">number meanings</Link>.</p>
    </div> : <div className="empty-result"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="32"/><ellipse cx="50" cy="50" rx="46" ry="17"/><circle cx="92" cy="47" r="4"/></svg><div><h3>Your calculation will appear here</h3><p>We will show the compound total, root number, every letter value, and optional birth-date numbers.</p></div></div>}
  </section>;
}

function NumberCard({ label, compound, root }: { label: string; compound: number; root: number }) { return <article className="number-card"><span>{label}</span><strong>{compound}/{root}</strong><small>compound / root</small></article>; }
function digitSteps(value: number) { const steps = [value]; let n = value; while (n > 9) { n = String(n).split("").reduce((sum, d) => sum + Number(d), 0); steps.push(n); } return steps.join(" → "); }
