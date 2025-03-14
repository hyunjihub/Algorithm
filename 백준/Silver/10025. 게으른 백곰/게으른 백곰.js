const fs = require('fs');
let [num, ...ice] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = num.trim().split(' ').map(Number);
ice = ice.map((i) => i.trim().split(' ').map(Number));
ice.sort((a, b) => a[1] - b[1]);

let maxPos = ice[N - 1][1];

let loc = Array.from({ length: maxPos + 1 }, () => 0);
for (let i = 0; i < N; i++) {
  loc[ice[i][1]] = ice[i][0];
}

let sum = 0;
let max = 0;

let windowSize = Math.min(2 * K + 1, loc.length);
for (let i = 0; i < windowSize; i++) {
  sum += loc[i];
}

max = sum;

for (let i = windowSize; i < loc.length; i++) {
  sum -= loc[i - windowSize];
  sum += loc[i];
  max = Math.max(sum, max);
}

console.log(max);
