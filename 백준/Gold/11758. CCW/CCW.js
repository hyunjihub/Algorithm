const fs = require('fs');
let [p1, p2, p3] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [x1, y1] = p1.split(' ').map(Number);
let [x2, y2] = p2.split(' ').map(Number);
let [x3, y3] = p3.split(' ').map(Number);

let CCW = x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3);
if (CCW === 0) {
  console.log(0);
} else if (CCW < 0) {
  console.log(-1);
} else {
  console.log(1);
}
