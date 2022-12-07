/**
 * Gets the median value.
 * @param unsorted list of values
 * @returns median, or 0 if the list is empty
 */
export function medianValue(unsorted: readonly number[]): number {
  if (unsorted.length === 0) return 0;
  const values = unsorted.slice().sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  return (values[half - 1] + values[half]) / 2.0;
}

/** Adds the given inputs together. */
export function sumReducer(a: number, b: number): number {
  return a + b;
}
