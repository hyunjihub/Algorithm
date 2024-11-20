const fs = require('fs');
let [N, W] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
W = W.trim().split(' ').map(Number);
let max = 0;

function DFS(W, energy) {
  if (W.length === 2) {
    max = Math.max(max, energy);
    return;
  }

  for (let i = 1; i < W.length - 1; i++) {
    const newW = [...W];
    const gainedEnergy = newW[i - 1] * newW[i + 1];
    newW.splice(i, 1);
    DFS(newW, energy + gainedEnergy);
  }
}

DFS(W, 0);

console.log(max);
