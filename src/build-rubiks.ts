import { BoxGeometry, FaceColors, Group, Mesh, MeshBasicMaterial } from "three";
import { colorize } from "./colorize";

export const buildRubiks = () => {
    const iterator = [0, 1, 2];
    const rubiks = new Group();
    const field: Group[][][] = [[[], [], []], [[], [], []], [[], [], []]];
    for (const x of iterator) {
        for (const y of iterator) {
            for (const z of iterator) {
                const geometry = new BoxGeometry(0.95, 0.95, 0.95);
                const material = new MeshBasicMaterial({ color: 0xffffff, vertexColors: FaceColors });
                colorize({ x, y, z }, geometry);
                const mesh = new Mesh(geometry, material);
                mesh.name = `mesh${x}${y}${z}`;
                mesh.position.set(x - 1, y - 1, z - 1);
                field[x][y][z] = new Group();
                field[x][y][z].add(mesh);
                rubiks.add(field[x][y][z]);
            }
        }
    }
    return { field, rubiks };
};
