import {WebGLRenderer} from "https://cdn.skypack.dev/three@0.132.2";

function createRenderer() {
    const renderer = new WebGLRenderer();
    //打开物理上正确的照明模型
    renderer.physicallyCorrectLights = true;
    return renderer
}

export {createRenderer}