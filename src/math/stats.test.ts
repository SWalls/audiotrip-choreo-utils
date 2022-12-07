import * as stats from './stats';

describe('stats', () => {
  describe('medianValue', () => {
    it('returns expected median value with even length', () => {
      expect(stats.medianValue([6, 4, 2, 1])).toBe(3);
    });

    it('returns expected median value with odd length', () => {
      expect(stats.medianValue([6, 2, 1])).toBe(2);
    });
  });
});
