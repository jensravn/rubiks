import { Group, PerspectiveCamera, Raycaster, Renderer, Scene, Vector2 } from "three";
import { Axis, AxisValue } from "./axis";
import { rotateLayer } from "./rotate-layer";

const raycaster = new Raycaster();
const mouse = new Vector2();
let renderer: Renderer;
let camera: PerspectiveCamera;
let scene: Scene;
let field: Group[][][];

export const onClickObject = (r: Renderer, c: PerspectiveCamera, s: Scene, f: Group[][][]) => {
    renderer = r;
    camera = c;
    scene = s;
    field = f;
    renderer.domElement.addEventListener("click", clickObjectHandler, true);
};

const clickObjectHandler = (event: any) => {
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const iterator = [0, 1, 2];
        let axis = Axis.x;
        let clockWize = true;
        let layer = 0 as AxisValue;
        let rotate = false;

        for (const x of iterator) {
            for (const y of iterator) {
                for (const z of iterator) {
                    if (field[x][y][z].children[0].name === intersects[0].object.name) {
                        // tslint:disable-next-line:no-console
                        console.log(`position: ${x}${y}${z}`);
                        // tslint:disable-next-line:no-console
                        console.log("field: " + field[x][y][z].children[0].name);
                        // tslint:disable-next-line:no-console
                        console.log("intersects: " + intersects[0].object.name);


                        if (x === 0 && y === 0) {
                            // tslint:disable-next-line:no-console
                            console.log("00z");
                            axis = Axis.z;
                            clockWize = true;
                            layer = z as AxisValue;
                            rotate = true;
                        }
                        if (x === 2 && z === 2) {
                            // tslint:disable-next-line:no-console
                            console.log("2y2");
                            axis = Axis.y;
                            clockWize = true;
                            layer = y as AxisValue;
                            rotate = true;
                        }
                        if (y === 2 && z === 0) {
                            // tslint:disable-next-line:no-console
                            console.log("x20");
                            axis = Axis.x;
                            clockWize = false;
                            layer = x as AxisValue;
                            rotate = true;
                        }
                    }
                }
            }
        }
        if (rotate) {
            rotateLayer(field, axis, clockWize, layer);
        }
    }
};
