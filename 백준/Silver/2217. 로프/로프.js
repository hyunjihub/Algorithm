const fs = require('fs');
let [N, ...ropes] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
ropes = ropes.map((value) => Number(value));
ropes.sort((a, b) => b - a);

let max = ropes[0];

for (let i = 1; i < N; i++) {
  let min = ropes[i];
  let maxWeight = min * (i + 1);
  if (maxWeight > max) max = maxWeight;
}

console.log(max);
