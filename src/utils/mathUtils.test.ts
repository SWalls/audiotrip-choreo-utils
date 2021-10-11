import * as MathUtils from './mathUtils';

const FAKE_RANDOM = new MathUtils.Random([0.5]);

describe('mathUtils', () => {
  describe('medianValue', () => {
    it('returns expected median value with even length', () => {
      expect(MathUtils.medianValue([6, 4, 2, 1])).toBe(3);
    });
    it('returns expected median value with odd length', () => {
      expect(MathUtils.medianValue([6, 2, 1])).toBe(2);
    });
  });
  describe('randomBetween', () => {
    it('returns expected "random" number', () => {
      expect(MathUtils.randomBetween(4, 6, FAKE_RANDOM)).toBe(5);
    });
    it('returns expected "random" number', () => {
      expect(MathUtils.randomBetween(4, 5, FAKE_RANDOM)).toBe(4.5);
    });
  });
  describe('randomIntBetween', () => {
    it('returns expected "random" integer', () => {
      expect(MathUtils.randomIntBetween(3, 6, FAKE_RANDOM)).toBe(4);
    });
    it('returns expected "random" integer floored', () => {
      expect(MathUtils.randomIntBetween(4, 5, FAKE_RANDOM)).toBe(4);
    });
  });
  describe('randomSelection', () => {
    it('returns expected "random" element', () => {
      expect(MathUtils.randomSelection([8, 9, 1, 7], FAKE_RANDOM)).toBe(1);
    });
  });
});
