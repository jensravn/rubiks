import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(0.8, 0.8, 0.8);
const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });

const offset = [-1, 0, 1];

const cube: any = {};
for (const x of offset) {
    for (const y of offset) {
        for (const z of offset) {
            const key = `cube${x + 1}${y + 1}${z + 1}`;
            cube[key] = { position: { x, y, z }, mesh: new Mesh(geometry, material) };
            cube[key].mesh.position.x = x;
            cube[key].mesh.position.y = y;
            cube[key].mesh.position.z = z;
            if (!(x === 0 && y === 0 && z === 0)) {
                scene.add(cube[key].mesh);
            }
        }
    }
}

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
