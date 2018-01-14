import { Matrix4, Vector3 } from "three";

const matrixAux = new Matrix4(); // global auxiliar variable

// Warnings: 1) axis is assumed to be normalized.
//  2) matrix must be updated. If not, call object.updateMatrix() first
//  3) this assumes we are not using quaternions

const rotateAroundWorldAxis = (obj: any, axis: Vector3, radians: number) => {
    matrixAux.makeRotationAxis(axis, radians);
    obj.matrix.multiplyMatrices(matrixAux, obj.matrix); // r56
    matrixAux.extractRotation(obj.matrix);
    obj.rotateOnAxis(axis, radians);
    obj.position.getPositionFromMatrix(obj.matrix);
};

export const rotateAroundWorldAxisX = (obj: any, radians: number) => {
    rotateAroundWorldAxis(obj, new Vector3(1, 0, 0), radians);
};
export const rotateAroundWorldAxisY = (obj: any, radians: number) => {
    rotateAroundWorldAxis(obj, new Vector3(0, 1, 0), radians);
};
export const rotateAroundWorldAxisZ = (obj: any, radians: number) => {
    rotateAroundWorldAxis(obj, new Vector3(0, 0, 1), radians);
};
