import { Color, Group, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { buildRubiks } from "./build-rubiks";
import { rotateAroundWorldAxisX, rotateAroundWorldAxisY, rotateAroundWorldAxisZ } from "./rotate-around-world-axis";

const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

enum Axis { x, y, z }

type AxisValue = 0 | 1 | 2;

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

scene.background = new Color(0xffffff);
camera.position.z = 7;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const rubiks = buildRubiks();
scene.add(rubiks.rubiks);

rubiks.rubiks.rotation.x += degreesToRadians(35);
rubiks.rubiks.rotation.y += degreesToRadians(-25);

const auxFieldLayer: Group[][] = [[], [], []];

const rotateLayer = (axis: Axis, clockWise: boolean, layer: AxisValue) => {
    const iterator: AxisValue[] = [0, 1, 2];
    for (const i1 of iterator) {
        for (const i2 of iterator) {
            if (axis === Axis.x) {
                rotateCube(axis, clockWise, layer, i1, i2);
            }
            if (axis === Axis.y) {
                rotateCube(axis, clockWise, layer, i1, i2);
            }
            if (axis === Axis.z) {
                rotateCube(axis, clockWise, layer, i1, i2);
            }
        }
    }
    for (const i1 of iterator) {
        for (const i2 of iterator) {
            if (axis === Axis.x) {
                rubiks.field[layer][i1][i2] = auxFieldLayer[i1][i2];
            }
            if (axis === Axis.y) {
                rubiks.field[i1][layer][i2] = auxFieldLayer[i1][i2];
            }
            if (axis === Axis.z) {
                rubiks.field[i1][i2][layer] = auxFieldLayer[i1][i2];
            }
        }
    }
};

const flip = (axisValue: AxisValue) => axisValue === 2 ? 0 : axisValue === 0 ? 2 : 1;

const rotateCube = (axis: Axis, clockWise: boolean, layer: AxisValue, i1: AxisValue, i2: AxisValue) => {
    const rotationValue = clockWise ? degreesToRadians(90) : degreesToRadians(-30);
    if (axis === Axis.x) {
        rotateAroundWorldAxisX(rubiks.field[layer][i1][i2], rotationValue);
        auxFieldLayer[flip(i2)][i1] = rubiks.field[layer][i1][i2];
    }
    if (axis === Axis.y) {
        rotateAroundWorldAxisY(rubiks.field[i1][layer][i2], rotationValue);
        auxFieldLayer[flip(i2)][i1] = rubiks.field[i1][layer][i2];
    }
    if (axis === Axis.z) {
        rotateAroundWorldAxisZ(rubiks.field[i1][i2][layer], rotationValue);
        auxFieldLayer[flip(i2)][i1] = rubiks.field[i1][i2][layer];
    }
};

rotateLayer(Axis.x, true, 0);
rotateLayer(Axis.z, false, 2);

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
