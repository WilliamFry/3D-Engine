
var Vertex = function(x, y, z) {
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.z = parseFloat(z);
};

var Vertex2D = function(x, y) {
  this.x = parseFloat(x);
  this.y = parseFloat(y);
};


// Rotate a vertice
function rotate(M, center, theta, phi) {
    // Rotation matrix coefficients
    var ct = Math.cos(theta);
    var st = Math.sin(theta);
    var cp = Math.cos(phi);
    var sp = Math.sin(phi);

    // Rotation
    var x = M.x - center.x;
    var y = M.y - center.y;
    var z = M.z - center.z;

    M.x = ct * x - st * cp * y + st * sp * z + center.x;
    M.y = st * x + ct * cp * y - ct * sp * z + center.y;
    M.z = sp * y + cp * z + center.z;
  }

  var rotation = 0;

// Rotate a vertice
//function rotateX(point, radians) {
//  var y = point.y;
//  point.y = (y * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
//  point.z = (y * Math.sin(radians)) + (point.z * Math.cos(radians));
//}
//
//// Utility method to rotate point by Y in a 3D space
//function rotateY(point, radians) {
//  var x = point.x;
//  point.x = (x * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
//  point.z = (x * Math.sin(radians)) + (point.z * Math.cos(radians));
//}

// Utility method to rotate point by Z in a 3D space
function rotateZ(point, radians) {
  var x = point.x;
  point.x = (x * Math.cos(radians)) + (point.y * Math.sin(radians) * -1.0);
  point.y = (x * Math.sin(radians)) + (point.y * Math.cos(radians));
}