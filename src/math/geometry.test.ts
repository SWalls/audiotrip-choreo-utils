import * as geometry from './geometry';

describe('geometry', () => {
  describe('getCircumferencePoint', () => {
    it('returns expected point for radius 1, center True origin', () => {
      expect(geometry.getCircumferencePoint({
        angle: {value: Math.PI / 4, unit: 'radians'},
        radius: 1,
        center: geometry.TRUE_ORIGIN,
      })).toEqual({x: 0.7071067811865476, y: 0.7071067811865475});
    });

    it('returns expected point for radius 1, center Playspace origin', () => {
      expect(geometry.getCircumferencePoint({
        angle: {value: 45, unit: 'degrees'},
        radius: 1,
        center: geometry.PLAYSPACE_ORIGIN,
      })).toEqual({x: 0.7071067811865476, y: 1.4821067811865474});
    });

    it('returns expected point for radius 1.3, center Playspace origin', () => {
      expect(geometry.getCircumferencePoint({
        angle: {value: 0, unit: 'radians'},
        radius: 1.3,
        center: geometry.PLAYSPACE_ORIGIN,
      })).toEqual({x: 1.3, y: 0.775});
    });
  });
});
