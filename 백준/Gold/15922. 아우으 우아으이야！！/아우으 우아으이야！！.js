const fs = require('fs');
let [N, ...dots] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let start = Number(dots[0].trim().split(' ')[0]);
let end = Number(dots[0].trim().split(' ')[1]);
let sum = 0;

for (let i = 1; i < N; i++) {
  let [x, y] = dots[i].trim().split(' ').map(Number);

  if (x <= end) {
    end = Math.max(end, y);
  } else {
    sum += Math.abs(end - start);
    start = x;
    end = y;
  }
}

sum += Math.abs(end - start);

console.log(sum);
