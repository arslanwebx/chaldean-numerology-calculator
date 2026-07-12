import { describe, expect, it } from "vitest";
import { CHALDEAN_GROUPS, LETTER_VALUES } from "@/data/chaldean";
import { calculateDate, calculateName, reduceNumber } from "@/lib/numerology";

describe("Chaldean mapping",()=>{it("maps every declared letter and none to 9",()=>{for(const [value,letters] of Object.entries(CHALDEAN_GROUPS))for(const letter of letters)expect(LETTER_VALUES[letter]).toBe(Number(value));expect(Object.values(LETTER_VALUES)).not.toContain(9);expect(Object.keys(LETTER_VALUES)).toHaveLength(26)})});
describe("name calculation",()=>{
  it.each([["ALICE",13,4],["JOHN",18,9],["HAMZA",18,9],["CHALDEAN NUMEROLOGY",70,7]])("calculates %s",(name,compound,root)=>{expect(calculateName(name)).toMatchObject({compound,root})});
  it("treats case equally",()=>expect(calculateName("alice").compound).toBe(calculateName("ALICE").compound));
  it("ignores spaces and ordinary punctuation",()=>expect(calculateName("A-L.I'C E").compound).toBe(13));
  it("normalizes accented Latin letters",()=>expect(calculateName("ÁLÎÇÉ").compound).toBe(13));
  it("rejects unsupported scripts actionably",()=>expect(()=>calculateName("علي")).toThrow(/Latin transliteration/));
  it.each(["","--- ..."])("rejects empty-like input",value=>expect(()=>calculateName(value)).toThrow());
  it("enforces 100 visible characters",()=>expect(()=>calculateName("A".repeat(101))).toThrow(/100/));
  it("preserves compound and repeated reduction",()=>{expect(calculateName("ZZZZZZZZ")).toMatchObject({compound:56,root:2});expect(reduceNumber(9999)).toBe(9)});
  it.each([[11,2],[22,4],[33,6]])("does not stop at %i",(value,root)=>expect(reduceNumber(value)).toBe(root));
});
describe("date calculation",()=>{
  it("calculates birth and full-date totals",()=>expect(calculateDate("1990-12-24",new Date(2026,6,11))).toMatchObject({birthCompound:24,birthRoot:6,lifePathCompound:37,lifePathRoot:1}));
  it("accepts a leap day",()=>expect(calculateDate("2000-02-29",new Date(2026,6,11)).birthRoot).toBe(2));
  it.each(["2025-02-29","2020-13-01","2020-04-31"])("rejects impossible %s",date=>expect(()=>calculateDate(date,new Date(2026,6,11))).toThrow());
  it("rejects future dates",()=>expect(()=>calculateDate("2027-01-01",new Date(2026,6,11))).toThrow(/future/));
  it("does not use UTC date conversion",()=>expect(calculateDate("2001-01-01",new Date(2026,6,11))).toMatchObject({birthCompound:1,birthRoot:1}));
});
