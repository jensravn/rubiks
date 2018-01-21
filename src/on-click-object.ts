import { PerspectiveCamera, Raycaster, Renderer, Scene, Vector2 } from "three";

const raycaster = new Raycaster();
const mouse = new Vector2();
let renderer: Renderer;
let camera: PerspectiveCamera;
let scene: Scene;

export const onClickObject = (r: Renderer, c: PerspectiveCamera, s: Scene) => {
    renderer = r;
    camera = c;
    scene = s;
    renderer.domElement.addEventListener("click", clickObjectHandler, true);
};

const clickObjectHandler = (event: any) => {
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        // tslint:disable-next-line:no-console
        console.log(intersects[0].object.name);
    }
};
