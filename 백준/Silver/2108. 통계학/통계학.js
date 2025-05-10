const fs = require('fs');
let [N, ...num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
num = num.map(Number);
num.sort((a, b) => a - b);

let sum = 0;
let map = new Map();
let maxCount = 0;
let max = [];
for (let i = 0; i < N; i++) {
  sum += num[i];

  if (map.has(num[i])) {
    map.set(num[i], map.get(num[i]) + 1);
  } else {
    map.set(num[i], 1);
  }

  if (maxCount < map.get(num[i])) {
    max = [num[i]];
    maxCount = map.get(num[i]);
  } else if (maxCount === map.get(num[i])) {
    max.push(num[i]);
  }
}

console.log(Math.round(sum / N) === -0 ? 0 : Math.round(sum / N));
console.log(num[Math.floor(N / 2)]);
console.log(max.length > 1 ? max[1] : max[0]);
console.log(num[N - 1] - num[0]);
