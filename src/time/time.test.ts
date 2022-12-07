import * as time from './time';

describe('time', () => {
  describe('getDuration', () => {
    it('returns expected Ms duration given 3 valid inputs', () => {
      expect(time.getDuration({minutes: 3, seconds: 4, milliseconds: 21})
                 .milliseconds)
          .toBe(184021);
    });

    it('returns expected Ms duration given 2 valid inputs', () => {
      expect(time.getDuration({minutes: 2, seconds: 5}).milliseconds)
          .toBe(125000);
    });

    it('returns expected Ms duration given 1 valid input', () => {
      expect(time.getDuration({minutes: 4}).milliseconds).toBe(240000);
    });
  });

  describe('trimAndPadNumber', () => {
    it('returns formatted 2-digit subtime given valid string inputs', () => {
      expect(time.trimAndPadNumber({value: '6', maxValue: 60})).toBe('06');
    });

    it('returns formatted 3-digit subtime given overflow string input', () => {
      expect(time.trimAndPadNumber({value: '66', maxValue: 60, digits: 3}))
          .toBe('060');
    });

    it('returns formatted 3-digit subtime given valid number inputs', () => {
      expect(time.trimAndPadNumber({value: 92, maxValue: 1000, digits: 3}))
          .toBe('092');
    });

    it('returns formatted 3-digit subtime given overflow number input', () => {
      expect(time.trimAndPadNumber({value: 1124971, maxValue: 1000, digits: 3}))
          .toBe('112');
    });
  });
});
