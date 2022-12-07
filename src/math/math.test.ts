import * as math from './math';

describe('math', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  describe('medianValue', () => {
    it('returns expected median value with even length', () => {
      expect(math.medianValue([6, 4, 2, 1])).toBe(3);
    });

    it('returns expected median value with odd length', () => {
      expect(math.medianValue([6, 2, 1])).toBe(2);
    });
  });

  describe('randomBetween', () => {
    it('returns expected "random" number', () => {
      expect(math.randomBetween({min: 4, max: 6})).toBe(5);
    });

    it('returns expected "random" number', () => {
      expect(math.randomBetween({min: 4, max: 5})).toBe(4.5);
    });
  });

  describe('randomIntBetween', () => {
    it('returns expected "random" integer', () => {
      expect(math.randomIntBetween({min: 3, max: 6})).toBe(4);
    });

    it('returns expected "random" integer floored', () => {
      expect(math.randomIntBetween({min: 4, max: 5})).toBe(4);
    });
  });

  describe('randomSelection', () => {
    it('returns expected "random" element', () => {
      expect(math.randomSelection([8, 9, 1, 7])).toBe(1);
    });
  });
});
