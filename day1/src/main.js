import {  BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer, } from "https://cdn.skypack.dev/three@0.132.2";
//
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";

/**
 * 1.初始设置
 * 2.创建场景
 * 3.创建相机
 * 4.创建可见性
 * 5.创建渲染器
 * 6.渲染场景
 */
const container = document.querySelector('#scene-container');
//创建场景
const scene = new Scene();
// 设置场景的背景颜色
scene.background = new Color('skyblue');
//创建相机
/**
 * PerspectiveCamera参数
 * fov 视野 相机的视野  单位：度
 * aspect 纵横比  场景的宽度与高度的比率
 * near 近剪裁平面  任何比这更靠近相机的东西都是不可见的
 * far  远剪裁平面   任何比这更远离相机的东西都是不可见的
 */
const fov = 35
const aspect = container.clientWidth / container.clientHeight
const near = 0.1
const far = 100

const camera = new PerspectiveCamera(fov,aspect,near,far)

camera.position.set(0,0,10)
//创建几何体
const geometry = new BoxBufferGeometry(2,2,2)
// 创建材质
const material = new MeshBasicMaterial()
//创建网格
const cube = new Mesh(geometry,material)

//将网格添加到场景中
scene.add(cube)

//创建渲染器
const renderer = new WebGLRenderer()
//设置渲染器的大小
renderer.setSize(container.clientWidth,container.clientHeight)
//设置设备像素比

// 我们还需要告诉渲染器设备屏幕的像素比是多少。这是防止 HiDPI 显示器模糊所必需的 （也称为视网膜显示器）。
renderer.setPixelRatio(window.devicePixelRatio);

//将canvas元素添加到我们的页面
container.append(renderer.domElement)

//渲染场景
renderer.render(scene,camera)