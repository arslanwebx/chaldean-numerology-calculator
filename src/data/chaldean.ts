export const CHALDEAN_GROUPS = Object.freeze({
  1: Object.freeze(["A", "I", "J", "Q", "Y"]),
  2: Object.freeze(["B", "K", "R"]),
  3: Object.freeze(["C", "G", "L", "S"]),
  4: Object.freeze(["D", "M", "T"]),
  5: Object.freeze(["E", "H", "N", "X"]),
  6: Object.freeze(["U", "V", "W"]),
  7: Object.freeze(["O", "Z"]),
  8: Object.freeze(["F", "P"]),
} as const);

export const LETTER_VALUES = Object.freeze(Object.fromEntries(
  Object.entries(CHALDEAN_GROUPS).flatMap(([value, letters]) => letters.map((letter) => [letter, Number(value)])),
) as Readonly<Record<string, number>>);
