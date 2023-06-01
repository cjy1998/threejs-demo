import {createCamera} from "../components/camera.js";
import {createCube} from "../components/cube.js";
import {createScene} from "../components/scene.js";
import {createRenderer} from "../systems/renderer.js";
import { createLights } from '../components/lights.js';
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

        const cube = createCube()
        const light = createLights()
        scene.add(cube,light)

        const resizer = new Resizer(container,camera,renderer)
    }
    render(){
        renderer.render(scene,camera)
    }
}
export {World}