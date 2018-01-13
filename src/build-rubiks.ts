import { BoxGeometry, FaceColors, Group, Mesh, MeshBasicMaterial } from "three";
import { colorize } from "./colorize";

export const buildRubiks = () => {
    const offset = [0, 1, 2];
    const rubiks = new Group();
    const cube: Mesh[][][] = [[[], [], []], [[], [], []], [[], [], []]];
    for (const x of offset) {
        for (const y of offset) {
            for (const z of offset) {
                if (x !== 1 || y !== 1 || z !== 1) {
                    const geometry = new BoxGeometry(0.95, 0.95, 0.95);
                    const material = new MeshBasicMaterial({ color: 0xffffff, vertexColors: FaceColors });
                    colorize({ x, y, z }, geometry);
                    cube[x][y][z] = new Mesh(geometry, material);
                    cube[x][y][z].position.set(x - 1, y - 1, z - 1);
                    rubiks.add(cube[x][y][z]);
                }
            }
        }
    }
    return rubiks;
};
