const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [x1, y1, p1, q1] = input[0].split(' ').map(Number);
let [x2, y2, p2, q2] = input[1].split(' ').map(Number);

if (p1 < x2 || p2 < x1 || q1 < y2 || q2 < y1) {
  console.log('NULL');
} else if (
  (p1 === x2 && q1 === y2) ||
  (p1 === x2 && y1 === q2) ||
  (x1 === p2 && q1 === y2) ||
  (x1 === p2 && y1 === q2)
) {
  console.log('POINT');
} else if ((p1 === x2 || x1 === p2) && !(q1 === y2 || y1 === q2) && y1 < q2 && q1 > y2) {
  console.log('LINE');
} else if ((q1 === y2 || y1 === q2) && !(p1 === x2 || x1 === p2) && x1 < p2 && p1 > x2) {
  console.log('LINE');
} else {
  console.log('FACE');
}
