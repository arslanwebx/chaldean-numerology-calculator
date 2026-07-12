import { LETTER_VALUES } from "@/data/chaldean";

export type LetterValue = { letter: string; value: number };
export type WordCalculation = { word: string; letters: LetterValue[]; subtotal: number };
export type NameCalculation = { input: string; normalized: string; compound: number; root: number; words: WordCalculation[] };
export type DateCalculation = { date: string; birthCompound: number; birthRoot: number; lifePathCompound: number; lifePathRoot: number };

export class NumerologyError extends Error { constructor(public code: "required" | "length" | "unsupported" | "date", message: string) { super(message); } }

export function reduceNumber(value: number): number {
  if (!Number.isInteger(value) || value <= 0) throw new NumerologyError("required", "A positive total is required.");
  let result = value;
  while (result > 9) result = String(result).split("").reduce((sum, digit) => sum + Number(digit), 0);
  return result;
}

export function normalizeLatin(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

export function calculateName(input: string): NameCalculation {
  const visible = Array.from(input.trim());
  if (!visible.length) throw new NumerologyError("required", "Enter the name you commonly use.");
  if (visible.length > 100) throw new NumerologyError("length", "Keep the name to 100 characters or fewer.");
  const normalized = normalizeLatin(input);
  const hasUnsupportedLetters = Array.from(normalized).some((char) => /[^\x00-\x7F]/.test(char) && /\p{L}/u.test(char));
  if (hasUnsupportedLetters) throw new NumerologyError("unsupported", "This chart uses Latin letters. Enter the usual Latin transliteration you personally use.");
  const chunks = normalized.split(/[\s\-'.]+/).filter(Boolean);
  const words = chunks.map((chunk) => {
    const letters = Array.from(chunk).filter((char) => LETTER_VALUES[char]).map((letter) => ({ letter, value: LETTER_VALUES[letter] }));
    return { word: letters.map((item) => item.letter).join(""), letters, subtotal: letters.reduce((sum, item) => sum + item.value, 0) };
  }).filter((word) => word.letters.length);
  const compound = words.reduce((sum, word) => sum + word.subtotal, 0);
  if (!compound) throw new NumerologyError("required", "Enter at least one Latin letter from A to Z.");
  return { input: input.trim(), normalized, compound, root: reduceNumber(compound), words };
}

function isValidGregorian(year: number, month: number, day: number): boolean {
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= days[month - 1];
}

export function calculateDate(date: string, today = new Date()): DateCalculation {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) throw new NumerologyError("date", "Enter a valid birth date.");
  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText), month = Number(monthText), day = Number(dayText);
  if (!isValidGregorian(year, month, day)) throw new NumerologyError("date", "That calendar date does not exist.");
  const current = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  if (date > current) throw new NumerologyError("date", "Birth date cannot be in the future.");
  const total = [...yearText, ...monthText, ...dayText].reduce((sum, digit) => sum + Number(digit), 0);
  return { date, birthCompound: day, birthRoot: reduceNumber(day), lifePathCompound: total, lifePathRoot: reduceNumber(total) };
}
