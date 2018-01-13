import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { buildRubiks } from "./build-rubiks";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

scene.background = new Color(0xffffff);
camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const rubiks = buildRubiks();
scene.add(rubiks);

const animate = () => {
    requestAnimationFrame(animate);

    rubiks.rotation.x += 0.006;
    rubiks.rotation.y += 0.004;
    rubiks.rotation.z += 0.002;

    renderer.render(scene, camera);
};

animate();
