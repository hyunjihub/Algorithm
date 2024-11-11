const fs = require('fs');
let [N, sequence] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
sequence = sequence.split(' ').map(Number);
let maxS = 0;
let maxL = 0;
let large = 1;
let small = 1;

for (let i = 1; i < N; i++) {
  if (sequence[i - 1] <= sequence[i]) {
    large++;
  } else {
    maxL = Math.max(maxL, large);
    large = 1;
  }

  if (sequence[i - 1] >= sequence[i]) {
    small++;
  } else {
    maxS = Math.max(maxS, small);
    small = 1;
  }
}

maxL = Math.max(maxL, large);
maxS = Math.max(maxS, small);

console.log(Math.max(maxL, maxS));
