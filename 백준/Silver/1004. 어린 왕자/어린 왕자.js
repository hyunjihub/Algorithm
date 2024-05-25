const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);

let index = 0;
let C = [];
let count = 0;
for (let i = 0; i < T; i++) {
  C = [];
  count = 0;
  let [x1, y1, x2, y2] = input[index++].trim().split(' ').map(Number);
  let num = Number(input[index++].trim());
  for (let j = 0; j < num; j++) {
    let [cx, cy, r] = input[index++].trim().split(' ').map(Number);
    let dist1 = Math.sqrt((cx - x1) ** 2 + (cy - y1) ** 2);
    let dist2 = Math.sqrt((cx - x2) ** 2 + (cy - y2) ** 2);

    if (dist1 <= r && dist2 > r) {
      count++;
    } else if (dist1 > r && dist2 <= r) {
      count++;
    }
  }
  console.log(count);
}
