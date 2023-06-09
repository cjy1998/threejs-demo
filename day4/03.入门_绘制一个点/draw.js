// HelloPoint1.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =
  "attribute  vec4 a_Position;\n" +
  "attribute  float a_PointSize;\n" +
  "void main() {\n" +
  "  gl_Position = a_Position;\n" + // Set the vertex coordinates of the point
  "  gl_PointSize = a_PointSize;\n" + // Set the point size
  "}\n";

// Fragment shader program
var FSHADER_SOURCE =
  "precision mediump float;\n" +
  "uniform vec4 u_FragColor;\n" +
  "void main() {\n" +
  "  gl_FragColor = u_FragColor;\n" + // Set the point color
  "}\n";

function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById("webgl");

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }
  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed to intialize shaders.");
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
  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1);
}
