import moment from 'moment';

export const samplesPerSecond = 64;
export const beatDivisions = [1, 2, 4, 8, 16];

export const getSubtimeInputAsMs = (
  mins: number | string,
  secs: number | string,
  ms: number | string,
): number => {
  const minDuration = moment.duration(parseInt(String(mins)), 'minutes');
  const secDuration = moment.duration(parseInt(String(secs)), 'seconds');
  const msDuration = moment.duration(parseInt(String(ms)), 'milliseconds');
  const duration = minDuration.add(secDuration).add(msDuration);
  return duration.asMilliseconds();
};

/** Formats '780' -> '78', or '8' -> '08' */
export const formatSubtimeInput = (
  inputNum: number | string,
  maxNum: number | string,
  size = 2,
): string => {
  inputNum = Number(String(inputNum).substring(0, size));
  maxNum = Number(maxNum);
  if (inputNum > maxNum) inputNum = maxNum;
  const roundedValue = `${Math.round(inputNum)}`;
  let formatted = roundedValue;
  for (let i = 0; i < size - roundedValue.length; i++) {
    formatted = `0${formatted}`;
  }
  return formatted;
};

export const trimTime = (count: number | string, size = 2): string => {
  return String(count).substring(0, size);
};
