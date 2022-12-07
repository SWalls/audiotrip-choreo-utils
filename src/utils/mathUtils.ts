/** This is what the view assumes is the height of the viewer in 3D space.  */
export const PERSON_HEIGHT_METERS = 1.55;

/** An XY coordinate (no Z dimension). */
export interface Coordinate2D {
  readonly x: number;
  readonly y: number;
}

/** An XYZ coordinate. */
export interface Coordinate3D {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

/** The point in 2D space at [0,0]. */
export const ORIGIN_2D: Coordinate2D = {
  x: 0,
  y: 0,
} as const;

/** The point in 3D space at [0,0,0]. */
export const ORIGIN_3D: Coordinate3D = {
  x: 0,
  y: 0,
  z: 0,
} as const;

/**
 * Gets the median value.
 * @param unsorted list of values
 * @returns median
 */
export function medianValue(unsorted: readonly number[]): number {
  if (unsorted.length === 0) return 0;
  const values = unsorted.slice().sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  return (values[half - 1] + values[half]) / 2.0;
}

/** Gets a random number between min inclusive, max exclusive. */
export function randomBetween(
    {min, max}: {readonly min: number; readonly max: number}): number {
  return Math.random() * (max - min) + min;
}

/** Gets a random integer between min inclusive, max exclusive. */
export function randomIntBetween(
    {min, max}: {readonly min: number; readonly max: number}): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

/** Gets a random value from the given options. */
export function randomSelection<T>(options: readonly T[]): T {
  return options[randomIntBetween({min: 0, max: options.length})];
}

/** Gets a random angle (in radians) between 0 and 2*PI. */
export function randomAngle(): number {
  return randomBetween({min: 0, max: Math.PI * 2});
}

/** Gets a random angle (in radians) between -PI/2 and PI/2. */
export function randomHalfCircleAngle(): number {
  return randomBetween({min: -Math.PI / 2, max: Math.PI / 2});
}

/** Gets a random angle (in degrees) between min inclusive, max exclusive. */
export function randomAngleBetweenDegrees(
    {minDegrees, maxDegrees}:
        {readonly minDegrees: number; readonly maxDegrees: number}): number {
  return (randomBetween({min: minDegrees, max: maxDegrees}) / 180) * Math.PI;
}

/** Parameters needed to define a point on a circle's circumference. */
export interface PointOnACircle {
  readonly angle: number;
  readonly radius: number;
  readonly center: Coordinate2D;
  readonly offset: number;
}

/**
 * Gets the 2D coordinate representing the point on the circumference of the
 * circle defined by the radius and offset from center, at the given angle.
 */
export function getCircumferencePoint(
    {angle, radius, center, offset}: PointOnACircle = {
      angle: 0,
      radius: 1,
      center: ORIGIN_2D,
      offset: PERSON_HEIGHT_METERS / 2,
    }): Coordinate2D {
  return {
    x: Math.cos(angle) * radius - (offset + center.x),
    y: Math.sin(angle) * radius + (offset + center.y),
  };
}

/** Adds the given inputs together. */
export function sumReducer(a: number, b: number): number {
  return a + b;
}
