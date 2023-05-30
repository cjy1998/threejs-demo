import {createCamera} from "../components/camera.js";
import {createCube} from "../components/cube.js";
import {createScene} from "../components/scene.js";
import {createRenderer} from "../systems/renderer.js";
import {Resizer} from "../systems/Resizer.js";

let camera;
let scene;
let renderer;
class World {
    constructor(container) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        container.append(renderer.domElement)
    }
    render(){
        renderer.render(scene,camera)
    }
}
export {World}