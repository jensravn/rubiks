import { Group, Math, Quaternion, Vector3 } from "three";
import { Axis, AxisValue, flip } from "./axis";

const quaternion = new Quaternion();
const axisX = new Vector3(1, 0, 0);
const axisY = new Vector3(0, 1, 0);
const axisZ = new Vector3(0, 0, 1);

export const rotateCube = (
    field: Group[][][],
    auxFieldLayer: Group[][],
    axis: Axis,
    clockWise: boolean,
    layer: AxisValue,
    i1: AxisValue,
    i2: AxisValue,
) => {
    const rotationValue = clockWise ? Math.degToRad(90) : Math.degToRad(-90);
    if (axis === Axis.x) {
        quaternion.setFromAxisAngle(axisX, rotationValue);
        field[layer][i1][i2].quaternion.premultiply(quaternion);
        auxFieldLayer[flip(i2)][i1] = field[layer][i1][i2];
    }
    if (axis === Axis.y) {
        quaternion.setFromAxisAngle(axisY, rotationValue);
        field[i1][layer][i2].quaternion.premultiply(quaternion);
        auxFieldLayer[flip(i2)][i1] = field[i1][layer][i2];
    }
    if (axis === Axis.z) {
        quaternion.setFromAxisAngle(axisZ, rotationValue);
        field[i1][i2][layer].quaternion.premultiply(quaternion);
        auxFieldLayer[flip(i2)][i1] = field[i1][i2][layer];
    }
    return auxFieldLayer;
};
