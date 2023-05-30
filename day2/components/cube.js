import {BoxBufferGeometry, Mesh, MeshBasicMaterial} from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
    const geometry = new BoxBufferGeometry()

    const material = new MeshBasicMaterial()

    const cube = new Mesh(geometry, material)

    return cube
}

export {createCube}