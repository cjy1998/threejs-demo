import {BoxBufferGeometry, Mesh, MeshStandardMaterial} from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
    const geometry = new BoxBufferGeometry()
    const material = new MeshStandardMaterial({color: "#fff"});

    const cube = new Mesh(geometry, material)
    cube.rotation.set(1, -0.1, 0.8);
    return cube
}

export {createCube}