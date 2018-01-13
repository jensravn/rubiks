import {
    Color,
    CubeGeometry,
    Group,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

scene.background = new Color(0xffffff);
camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new CubeGeometry(0.8, 0.8, 0.8);
const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

const offset = [0, 1, 2];

const rubiks = new Group();
const cube: Mesh[][][] = [[[], [], []], [[], [], []], [[], [], []]];
for (const x of offset) {
    for (const y of offset) {
        for (const z of offset) {
            if (x !== 1 || y !== 1 || z !== 1) {
                cube[x][y][z] = new Mesh(geometry, material);
                cube[x][y][z].position.set(x - 1, y - 1, z - 1);
                rubiks.add(cube[x][y][z]);
            }
        }
    }
}
scene.add(rubiks);

const animate = () => {
    requestAnimationFrame(animate);

    rubiks.rotation.x += 0.006;
    rubiks.rotation.y += 0.008;

    renderer.render(scene, camera);
};

animate();
