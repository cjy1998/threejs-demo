// 顶点着色器
var VSHADER_SOURCE =
  "attribute  vec4 a_Position;\n" +
  "attribute  float a_PointSize;\n" +
  "void main() {\n" +
  "  gl_Position = a_Position;\n" + // Set the vertex coordinates of the point
  "  gl_PointSize = a_PointSize;\n" + // Set the point size
  "}\n";

// 片元着色器
var FSHADER_SOURCE =
  "precision mediump float;\n" +
  "uniform vec4 u_FragColor;\n" +
  "void main() {\n" +
  "  gl_FragColor = u_FragColor;\n" + // Set the point color
  "}\n";

function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById("webgl");

  // 获取webgl上下文
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }
  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed to intialize shaders.");
    return;
  }
  //   设置顶点位置
  var n = initVertexBuffers(gl);
  if (n < 0) {
    console.log("Failed to set the positions of the vertices");
    return;
  }
  // 获取attribute变量的存储位置
  var a_Position = gl.getAttribLocation(gl.program, "a_Position");
  var a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize");
  // 获取u_FragColor的位置
  var u_FragColor = gl.getUniformLocation(gl.program, "u_FragColor");
  if (a_Position < 0) {
    console.log("Failed to get the Storage location of a_Position");
    return;
  }
  if (a_PointSize < 0) {
    console.log("Failed to get the Storage location of a_PointSize");
  }
  if (u_FragColor < 0) {
    console.log("Failed to get the Storage location of u_FragColor");
  }
  // 将顶点位置传输给attribute
  gl.vertexAttrib3f(a_Position, 0.1, 0.0, 0.0);
  // 将顶点大小传输给attribute
  gl.vertexAttrib1f(a_PointSize, 10.0);
  // 将顶点颜色传输给uniform
  gl.uniform4f(u_FragColor, 0.0, 1.0, 0.0, 1.0);
  //   注册鼠标点击事件响应函数
  canvas.onmousedown = function (ev) {
    click(ev, gl, canvas, a_Position);
  };
  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  //   鼠标点击位置数组
  var g_points = [];
  function click(ev, gl, canvas, a_Position) {
    var x = ev.clientX; //鼠标点击处的x坐标
    var y = ev.clientY; //鼠标点击处的y坐标
    var rect = ev.target.getBoundingClientRect();
    x = (x - rect.left - canvas.height / 2) / (canvas.height / 2);
    y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2);
    //    将坐标存贮到g_points数组中
    g_points.push(x);
    g_points.push(y);
    // 清除<canvas/>
    gl.clear(gl.COLOR_BUFFER_BIT);

    var len = g_points.length;
    // console.log(len);
    for (var i = 0; i < len; i += 2) {
      // 将点的位置传递到变量中a_Position
      gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0.0);
      // 绘制点
      gl.drawArrays(gl.POINTS, 0, 1);
      //   debugger;
    }
  }
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1);
}
