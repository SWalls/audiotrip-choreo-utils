/** This is what the view assumes is the height of the viewer in 3D space.  */
export const PERSON_HEIGHT_METERS = 1.55;

/** An XY coordinate (no Z dimension). */
export interface Coordinate2D {
  readonly x: number;
  readonly y: number;
}

/** An XYZ coordinate. */
export interface Coordinate3D {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

/** The point representing the center of the player's viewport (y=height/2). */
export const PLAYSPACE_ORIGIN: Coordinate3D = {
  x: 0,
  y: PERSON_HEIGHT_METERS / 2,
  z: 0,
};

/** The point in 3D space at [0,0,0]. */
export const TRUE_ORIGIN: Coordinate3D = {
  x: 0,
  y: 0,
  z: 0,
};

/** Represents an angle (number and unit). */
export interface Angle {
  readonly value: number;
  readonly unit: 'degrees'|'radians';
}

/** Converts the given angle in degrees to radians. */
export function degreesToRadians(degrees: number): number {
  return (degrees / 180) * Math.PI;
}

/** Gets the value of the given angle in radians. */
export function getRadians(angle: Angle): number {
  return angle.unit === 'radians' ? angle.value : degreesToRadians(angle.value);
}

/** Parameters needed to define a point on a circle's circumference. */
export interface PointOnACircle {
  readonly angle: Angle;
  /** Radius is defined in meters. */
  readonly radius: number;
  readonly center: Coordinate2D;
}

/**
 * Gets the 2D coordinate representing the point on the circumference of the
 * circle defined by the radius and center point, at the given angle.
 */
export function getCircumferencePoint({angle, radius, center}: PointOnACircle):
    Coordinate2D {
  const angleRadians = getRadians(angle);
  return {
    x: Math.cos(angleRadians) * radius + (center.x),
    y: Math.sin(angleRadians) * radius + (center.y),
  };
}

/**
 * Returns the 2D point on a circle at the center of the player's viewport,
 * at the given angle (in radians), where y=
 * @see PERSON_HEIGHT_METERS / 2
 */
export function getViewportCircumferencePointAt(
    {angle}: {readonly angle: Angle}): Coordinate2D {
  return getCircumferencePoint({
    angle,
    radius: 1,
    center: PLAYSPACE_ORIGIN,
  });
}
