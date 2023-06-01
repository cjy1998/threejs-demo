import {DirectionalLight,PointLight,SpotLight,RectAreaLight} from "https://cdn.skypack.dev/three@0.132.2";
/**
 * DirectionalLight => 阳光
 *
 * PointLight => 灯泡
 *
 * RectAreaLight => 条形照明或明亮的窗户
 *
 * SpotLight => 聚光灯
 *
 * */
function createLights() {
    // DirectionalLight构造函数有两个参数，颜色color和强度intensity。
    const light = new DirectionalLight('red',8)
    // DirectionalLight从light.position照向light.target.position
    // 现在灯光从(10,10,10)照向(0,0,0)
    light.position.set(10,10,10)
    return light

}

export {createLights}