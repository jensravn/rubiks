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

rubiks.rotation.x += 0.5;
rubiks.rotation.y += 0.5;

const animate = () => {
    requestAnimationFrame(animate);

    rubiks.getChildByName("000").rotation.x += 0.006;
    rubiks.getChildByName("001").rotation.x += 0.006;
    rubiks.getChildByName("002").rotation.x += 0.006;
    rubiks.getChildByName("010").rotation.x += 0.006;
    rubiks.getChildByName("011").rotation.x += 0.006;
    rubiks.getChildByName("012").rotation.x += 0.006;
    rubiks.getChildByName("020").rotation.x += 0.006;
    rubiks.getChildByName("021").rotation.x += 0.006;
    rubiks.getChildByName("022").rotation.x += 0.006;

    renderer.render(scene, camera);
};

animate();
