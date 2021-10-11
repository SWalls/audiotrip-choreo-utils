/** Mockable random number generator. */
export class Random {
  nextIdx = 0;

  options: number[] = [];

  constructor(options: number[] = []) {
    this.options = options;
  }

  next = () => {
    this.nextIdx = (this.nextIdx + 1) % this.options.length;
    return this.options.length > 0 ? this.options[this.nextIdx] : Math.random();
  };
}

/** Default random number generator that uses Math.random() */
export const RANDOM = new Random();

export const medianValue = (values: number[]) => {
  if (values.length === 0) return 0;
  values.sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  return (values[half - 1] + values[half]) / 2.0;
};

// including min, excluding max
export const randomBetween = (min: number, max: number, rand = RANDOM) => {
  return rand.next() * (max - min) + min;
};

// including min, excluding max
export const randomIntBetween = (min: number, max: number, rand = RANDOM) => {
  return Math.floor(rand.next() * (max - min)) + min;
};

export const randomSelection = (options: any[], rand = RANDOM) => {
  return options[randomIntBetween(0, options.length, rand)];
};

export const randomAngle = (rand = RANDOM) => {
  return randomBetween(0, Math.PI * 2, rand);
};

export const randomHalfCircleAngle = (rand = RANDOM) => {
  return randomBetween(-Math.PI / 2, Math.PI / 2, rand);
};

export const randomAngleBetweenDegrees = (
  minDegrees: number,
  maxDegrees: number,
  rand = RANDOM,
) => {
  return (randomBetween(minDegrees, maxDegrees, rand) / 180) * Math.PI;
};

export const getCircumferencePoint = (
  angle = 0,
  radius = 1,
  centerX = 0,
  centerY = 0,
) => {
  // angle = angle || randomHalfCircleAngle();
  return {
    x: Math.cos(angle) * radius - (1.55 / 2 + centerX),
    y: Math.sin(angle) * radius + (1.55 / 2 + centerY), // 1.55m tall
  };
};

export const sumReducer = (a: number, b: number) => a + b;
