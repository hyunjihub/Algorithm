const fs = require('fs');
let [N, ...rank] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

for (let i = 0; i < N; i++) {
  rank[i] = Number(rank[i].trim());
}
rank.sort((a, b) => a - b);

let dissatisfaction = 0n;
for (let i = 0; i < N; i++) {
  dissatisfaction += BigInt(Math.abs(i + 1 - rank[i]));
}

console.log(dissatisfaction.toString());
