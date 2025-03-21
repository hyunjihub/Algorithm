const fs = require('fs');
let [num, ...height] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, H] = num.trim().split(' ').map(Number);
height = height.map(Number);

let down = Array(H + 1).fill(0);
let up = Array(H + 1).fill(0);

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    down[height[i]]++;
  } else {
    up[H - height[i] + 1]++;
  }
}

for (let i = H - 1; i > 0; i--) {
  down[i] += down[i + 1];
}
for (let i = 1; i <= H; i++) {
  up[i] += up[i - 1];
}

let min = Infinity;
let count = 0;
for (let i = 1; i <= H; i++) {
  let total = down[i] + up[i];

  if (min > total) {
    min = total;
    count = 1;
  } else if (min === total) {
    count++;
  }
}

console.log(min, count);
