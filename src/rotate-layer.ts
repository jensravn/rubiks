import { Group } from "three";
import { Axis, AxisValue } from "./axis";
import { rotateCube } from "./rotate-cube";

export const rotateLayer = (field: Group[][][], axis: Axis, clockWise: boolean, layer: AxisValue) => {
    let auxFieldLayer: Group[][] = [[], [], []];
    const iterator: AxisValue[] = [0, 1, 2];
    for (const i1 of iterator) {
        for (const i2 of iterator) {
            if (axis === Axis.x) {
                auxFieldLayer = rotateCube(field, auxFieldLayer, axis, clockWise, layer, i1, i2);
            }
            if (axis === Axis.y) {
                auxFieldLayer = rotateCube(field, auxFieldLayer, axis, clockWise, layer, i1, i2);
            }
            if (axis === Axis.z) {
                auxFieldLayer = rotateCube(field, auxFieldLayer, axis, clockWise, layer, i1, i2);
            }
        }
    }
    for (const i1 of iterator) {
        for (const i2 of iterator) {
            if (axis === Axis.x) {
                field[layer][i1][i2] = auxFieldLayer[i1][i2];
            }
            if (axis === Axis.y) {
                field[i1][layer][i2] = auxFieldLayer[i1][i2];
            }
            if (axis === Axis.z) {
                field[i1][i2][layer] = auxFieldLayer[i1][i2];
            }
        }
    }
    return field;
};
