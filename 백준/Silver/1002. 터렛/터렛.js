const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const T = Number(input[0]);
let result = [];

for (let i = 1; i <= T; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (d === 0 && r1 === r2) {
    result.push(-1);
  } else if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    result.push(0);
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    result.push(1);
  } else {
    result.push(2);
  }
}

console.log(result.join('\n'));
