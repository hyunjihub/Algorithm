const fs = require('fs');
let [n, ...dots] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = parseInt(n);

for (let i = 0; i < n; i++) {
  dots[i] = dots[i].trim().split(' ');
}

let color = 0;
let diff = 0;
let length = 0;
let min = 999999;
let sum = 0;
for (let i = 0; i < n; i++) {
  color = parseInt(dots[i][1].trim());
  length = parseInt(dots[i][0].trim());
  min = 999999;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (color !== parseInt(dots[j][1].trim())) continue;
    diff = Math.abs(length - parseInt(dots[j][0].trim()));
    if (min > diff) {
      min = diff;
    }
  }
  sum += min;
}

console.log(sum);
