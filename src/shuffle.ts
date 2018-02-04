import { Group, Math } from "three";
import { Axis, AxisValue } from "./axis";
import { rotateLayer } from "./rotate-layer";

export const shuffle = (field: Group[][][], numberOfRotations: number) => {
    for (let r = 0; r < numberOfRotations; r++) {
        const n = Math.randInt(0, 2);
        const axis = n === 0 ? Axis.x : n === 1 ? Axis.y : Axis.z;
        const clockWise = Math.randInt(0, 1) === 1 ? true : false;
        const layer = Math.randInt(0, 2) as AxisValue;
        rotateLayer(field, axis, clockWise, layer);
    }
};
