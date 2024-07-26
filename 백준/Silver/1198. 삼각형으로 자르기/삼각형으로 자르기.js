const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let max = 0;
for (let i = 0; i < N; i++) {
  let [x1, y1] = input[i].trim().split(' ').map(Number);
  for (let j = i + 1; j < N; j++) {
    let [x2, y2] = input[j].trim().split(' ').map(Number);
    for (let k = j + 1; k < N; k++) {
      let [x3, y3] = input[k].trim().split(' ').map(Number);
      let area = (1 / 2) * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (x1 * y3 + x2 * y1 + x3 * y2));
      if (area > max) max = area;
    }
  }
}

console.log(Number.isInteger(max) ? max.toFixed(1) : max);
