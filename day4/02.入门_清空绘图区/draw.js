function main(){
// 获取canvas元素
    var canvas = document.getElementById('panel')
// 获取webGl绘制上下文
    var ctx = canvas.getContext('webgl')
    if(!ctx){
        console.log("获取失败")
        return
    }
// 指定清空<canvas>的颜色
    ctx.clearColor(1.0,0.0,0.0,1.0)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
//  清空canvas
    setTimeout(() => {

        console.log("sdhjsh")
    },2000)

}