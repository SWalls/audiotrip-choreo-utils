/** 1000 milliseconds are in 1 second. */
export const MS_PER_SEC = 1000;
/** 60 seconds are in 1 minute. */
export const SEC_PER_MIN = 60;

/** Number of audio samples to use per second in buffer. */
export const SAMPLES_PER_SECOND = 64;

/** Usable beat divisions (as 1/X time). */
export const BEAT_DIVISIONS = [1, 2, 4, 8, 16];

/** Represents a passage of time. */
export interface Duration {
  readonly milliseconds: number;
}

/** Gets the duration (ms) by converting the given units and adding them. */
export function getDuration(
  { minutes = 0, seconds = 0, milliseconds = 0 }:
    { readonly minutes?: number; readonly seconds?: number; readonly milliseconds?: number }): Duration {
  const minDuration = Number(minutes) * SEC_PER_MIN * MS_PER_SEC;
  const secDuration = Number(seconds) * MS_PER_SEC;
  return {milliseconds: Number(milliseconds) + minDuration + secDuration};
}

/** Trims the given value to be only the prefix of the given limit length. */
export function trim(
    {value, limit}: {readonly value: number|string; readonly limit: number}):
    string {
  return String(value).trim().substring(0, limit);
}

/**
 * Returns a padded string after truncating to the first digits that, when
 * digits=2 (default), looks like e.g. ' 780' -> '78', or '8 ' -> '08'.
 */
export function trimAndPadNumber({value, maxValue, digits = 2}: {
  readonly value: number|string; readonly maxValue: number;
  readonly digits?: number;
}): string {
  value = Number(trim({value, limit: digits}));
  if (value > maxValue) value = maxValue;
  const roundedValue = `${Math.round(value)}`;
  return roundedValue.padStart(digits, '0');
}
