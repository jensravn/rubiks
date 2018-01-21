import { PerspectiveCamera, Renderer } from "three";

let renderer: Renderer;
let camera: PerspectiveCamera;

export const autoResize = (r: Renderer, c: PerspectiveCamera) => {
    renderer = r;
    camera = c;
    window.addEventListener("resize", onWindowResize, false);
};

const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

window.addEventListener("resize", onWindowResize, false);
