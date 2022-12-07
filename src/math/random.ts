import {degreesToRadians} from './geometry';

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

/**
 * Gets a random angle (in radians) between min inclusive, max exclusive, both
 * given in degrees.
 */
export function randomAngleBetween(
    {minDegrees, maxDegrees}:
        {readonly minDegrees: number; readonly maxDegrees: number}): number {
  return degreesToRadians(randomBetween({min: minDegrees, max: maxDegrees}));
}
