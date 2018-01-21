import { Group, Math, Vector3 } from "three";
import { Axis, AxisValue, flip } from "./axis";

export const rotateCube = (
    field: Group[][][],
    auxFieldLayer: Group[][],
    axis: Axis,
    clockWise: boolean,
    layer: AxisValue,
    i1: AxisValue,
    i2: AxisValue,
) => {
    const rotationValue = clockWise ? Math.degToRad(90) : Math.degToRad(-10);
    if (axis === Axis.x) {
        field[layer][i1][i2].quaternion.setFromAxisAngle(new Vector3(1, 0, 0), rotationValue);
        field[layer][i1][i2].setRotationFromQuaternion(field[layer][i1][i2].quaternion);
        auxFieldLayer[flip(i2)][i1] = field[layer][i1][i2];
    }
    if (axis === Axis.y) {
        field[i1][layer][i2].quaternion.setFromAxisAngle(new Vector3(0, 1, 0), rotationValue);
        field[i1][layer][i2].setRotationFromQuaternion(field[i1][layer][i2].quaternion);
        auxFieldLayer[flip(i2)][i1] = field[i1][layer][i2];
    }
    if (axis === Axis.z) {
        field[i1][i2][layer].quaternion.setFromAxisAngle(new Vector3(0, 0, 1), rotationValue);
        field[i1][i2][layer].setRotationFromQuaternion(field[i1][i2][layer].quaternion);
        auxFieldLayer[flip(i2)][i1] = field[i1][i2][layer];
    }
    return auxFieldLayer;
};
