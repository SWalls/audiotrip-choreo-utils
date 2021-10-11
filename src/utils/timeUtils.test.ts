import * as TimeUtils from './timeUtils';

describe('timeUtils', () => {
  describe('getSubtimeInputAsMs', () => {
    it('returns expected Ms duration given valid string inputs', () => {
      expect(TimeUtils.getSubtimeInputAsMs('03', '4', '21')).toBe(184021);
    });
    it('returns expected Ms duration given valid number inputs', () => {
      expect(TimeUtils.getSubtimeInputAsMs(2, 5, 29)).toBe(125029);
    });
  });
  describe('formatSubtimeInput', () => {
    it('returns formatted 2-digit subtime given valid string inputs', () => {
      expect(TimeUtils.formatSubtimeInput('6', '60')).toBe('06');
    });
    it('returns formatted 3-digit subtime given overflow string input', () => {
      expect(TimeUtils.formatSubtimeInput('66', '60', 3)).toBe('060');
    });
    it('returns formatted 3-digit subtime given valid number inputs', () => {
      expect(TimeUtils.formatSubtimeInput(92, 1000, 3)).toBe('092');
    });
    it('returns formatted 3-digit subtime given overflow number input', () => {
      expect(TimeUtils.formatSubtimeInput(1124971, 1000, 3)).toBe('112');
    });
  });
});
