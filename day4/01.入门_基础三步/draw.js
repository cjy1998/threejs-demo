/**
 * 1.获取canvas元素
 * 2.向该元素请求二维图形的“绘制上下文”
 * 3.在绘图上下文上调用相应的绘图函数，以绘制二维图形
 * */
function main() {
//     获取canva元素
    var canvas = document.getElementById('panel')
    if(!canvas){
        console.log("浏览器不支持canvas")
        return
    }
//     获取绘制二维图形的绘图上下文
    var ctx = canvas.getContext('2d')
//     绘制蓝色矩形
    ctx.fillStyle = 'rgb(0,0,255,1.0)'  //设置填充颜色为蓝色
    ctx.fillRect(120,10,150,150)
}