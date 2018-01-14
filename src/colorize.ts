import { Geometry } from "three";
import { colors } from "./colors";
import { IPosition } from "./i-position";

export const colorize = ({ x, y, z }: IPosition, geometry: Geometry) => {
    geometry.faces.forEach((f) => {
        f.color.setHex(colors.black);
    });
    if (x === 0) {
        geometry.faces.forEach((f, i) => {
            if (i === 2 || i === 3) {
                f.color.setHex(colors.red);
            }
        });
    }
    if (x === 2) {
        geometry.faces.forEach((f, i) => {
            if (i === 0 || i === 1) {
                f.color.setHex(colors.orange);
            }
        });
    }
    if (y === 0) {
        geometry.faces.forEach((f, i) => {
            if (i === 6 || i === 7) {
                f.color.setHex(colors.green);
            }
        });
    }
    if (y === 2) {
        geometry.faces.forEach((f, i) => {
            if (i === 4 || i === 5) {
                f.color.setHex(colors.blue);
            }
        });
    }
    if (z === 0) {
        geometry.faces.forEach((f, i) => {
            if (i === 10 || i === 11) {
                f.color.setHex(colors.white);
            }
        });
    }
    if (z === 2) {
        geometry.faces.forEach((f, i) => {
            if (i === 8 || i === 9) {
                f.color.setHex(colors.yellow);
            }
        });
    }
};
