import * as random from './random';

describe('random', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  describe('randomBetween', () => {
    it('returns expected "random" number', () => {
      expect(random.randomBetween({min: 4, max: 6})).toBe(5);
    });

    it('returns expected "random" number', () => {
      expect(random.randomBetween({min: 4, max: 5})).toBe(4.5);
    });
  });

  describe('randomIntBetween', () => {
    it('returns expected "random" integer', () => {
      expect(random.randomIntBetween({min: 3, max: 6})).toBe(4);
    });

    it('returns expected "random" integer floored', () => {
      expect(random.randomIntBetween({min: 4, max: 5})).toBe(4);
    });
  });

  describe('randomSelection', () => {
    it('returns expected "random" element', () => {
      expect(random.randomSelection([8, 9, 1, 7])).toBe(1);
    });
  });

  describe('randomAngle', () => {
    it('returns expected "random" angle between 0 and 2*PI', () => {
      expect(random.randomAngle()).toBe(3.141592653589793);
    });
  });

  describe('randomHalfCircleAngle', () => {
    it('returns expected "random" angle between -PI/2 and PI/2', () => {
      expect(random.randomHalfCircleAngle()).toBe(0);
    });
  });

  describe('randomAngleBetween', () => {
    it('returns expected "random" angle between 25 and 260 degrees', () => {
      expect(random.randomAngleBetween({minDegrees: 25, maxDegrees: 260}))
          .toBe(2.4870941840919194);
    });
  });
});
