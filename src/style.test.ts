import * as Style from './style';

const MINIMUM_COLORS_LENGTH = 1;

describe('style', () => {
  describe('COLORS', () => {
    it('has at least two colors', () => {
      expect(Style.COLORS.length).toBeGreaterThan(MINIMUM_COLORS_LENGTH);
    });
  });
});
