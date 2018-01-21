import { Color, Math, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { autoResize } from "./auto-resize";
import { Axis } from "./axis";
import { buildRubiks } from "./build-rubiks";
import { onClickObject } from "./on-click-object";
import { rotateLayer } from "./rotate-layer";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

scene.background = new Color(0xEFEFEF);
camera.position.z = 7;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const rubiks = buildRubiks();
scene.add(rubiks.rubiks);

rubiks.rubiks.rotation.x += Math.degToRad(35);
rubiks.rubiks.rotation.y += Math.degToRad(45);

rubiks.field = rotateLayer(rubiks.field, Axis.x, true, 0);
rubiks.field = rotateLayer(rubiks.field, Axis.z, false, 2);

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

autoResize(renderer, camera);

onClickObject(renderer, camera, scene);
