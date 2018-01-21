export enum Axis { x, y, z }

export type AxisValue = 0 | 1 | 2;

export const flip = (axisValue: AxisValue) => axisValue === 2 ? 0 : axisValue === 0 ? 2 : 1;
