import * as Style from './style';

describe('style', () => {
  describe('COLORS', () => {
    it('has at least two colors', () => {
      expect(Style.COLORS.length).toBeGreaterThan(1);
    });
  });
});
