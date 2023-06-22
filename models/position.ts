export enum Orientation {
  North = 'N',
  East = 'E',
  West = 'W',
  South = 'S',
}

export interface Position {
  x: number;
  y: number;
  orientation: Orientation;
}
