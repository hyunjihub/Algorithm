const fs = require('fs');
let [N, ...S] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  S[i] = S[i].trim().split(' ').map(Number);
}

let min = Infinity;

function diff(start) {
  let startSum = 0;
  let linkSum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j || i > j) continue;
      if (start[i] && start[j]) startSum += S[i][j] + S[j][i];
      else if (!start[i] && !start[j]) linkSum += S[i][j] + S[j][i];
    }
  }

  return Math.abs(startSum - linkSum);
}

function DFS(prev, isStartTeam, startCount) {
  if (startCount === N / 2) {
    min = Math.min(diff(isStartTeam), min);
    return;
  }

  for (let i = prev + 1; i < N; i++) {
    isStartTeam[i] = true;
    DFS(i, isStartTeam, startCount + 1);
    isStartTeam[i] = false;
  }
}

let isStartTeam = Array.from({ length: N }, () => false);

DFS(0, isStartTeam, 0);
isStartTeam[0] = true;
DFS(0, isStartTeam, 1);

console.log(min);
