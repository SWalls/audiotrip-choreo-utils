/*eslint no-magic-numbers: [0]*/
/*eslint @typescript-eslint/no-magic-numbers: [0]*/

/** An XYZ coordinate (z is optional). */
export interface Coordinate {
  x: number;
  y: number;
  z?: number;
}

/**
 * Gets the median value.
 * @param values list of values
 * @returns median
 */
export const medianValue = (unSorted: readonly number[]): number => {
  if (unSorted.length === 0) return 0;
  const values = unSorted.slice().sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  return (values[half - 1] + values[half]) / 2.0;
};

/**
 * Gets a random number between min inclusive, max exclusive.
 */
export const randomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

// including min, excluding max
export const randomIntBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomSelection = (
  options: readonly number[] | readonly string[],
): number | string => {
  return options[randomIntBetween(0, options.length)];
};

export const randomAngle = (): number => {
  return randomBetween(0, Math.PI * 2);
};

export const randomHalfCircleAngle = (): number => {
  return randomBetween(-Math.PI / 2, Math.PI / 2);
};

export const randomAngleBetweenDegrees = (
  minDegrees: number,
  maxDegrees: number,
): number => {
  return (randomBetween(minDegrees, maxDegrees) / 180) * Math.PI;
};

export const getCircumferencePoint = (
  angle = 0,
  radius = 1,
  centerX = 0,
  centerY = 0,
): Coordinate => {
  return {
    x: Math.cos(angle) * radius - (1.55 / 2 + centerX),
    y: Math.sin(angle) * radius + (1.55 / 2 + centerY), // 1.55m tall
  };
};

export const sumReducer = (a: number, b: number): number => a + b;
