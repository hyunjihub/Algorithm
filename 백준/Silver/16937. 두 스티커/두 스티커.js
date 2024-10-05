const fs = require('fs');
let [n, N, ...sticker] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [H, W] = n.trim().split(' ').map(Number);
N = Number(N);
let max = 0;

for (let i = 0; i < N; i++) {
  sticker[i] = sticker[i].trim().split(' ').map(Number);
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let [R1, C1] = sticker[i];
    let [R2, C2] = sticker[j];
    let S = R1 * C1 + R2 * C2;

    if (R1 + R2 <= H && Math.max(C1, C2) <= W) max = Math.max(max, S);
    if (Math.max(R1, R2) <= H && C1 + C2 <= W) max = Math.max(max, S);

    if (R2 + C1 <= H && Math.max(C2, R1) <= W) max = Math.max(max, S);
    if (Math.max(R2, C1) <= H && C2 + R1 <= W) max = Math.max(max, S);

    if (R1 + C2 <= H && Math.max(R2, C1) <= W) max = Math.max(max, S);
    if (Math.max(R1, C2) <= H && C1 + R2 <= W) max = Math.max(max, S);

    if (C2 + C1 <= H && Math.max(R2, R1) <= W) max = Math.max(max, S);
    if (Math.max(C2, C1) <= H && R2 + R1 <= W) max = Math.max(max, S);
  }
}

console.log(max);
