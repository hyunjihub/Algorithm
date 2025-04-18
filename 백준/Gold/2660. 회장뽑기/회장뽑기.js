const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let friends = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  friends[i][i] = 0;
}

for (let i = 0; i < input.length - 1; i++) {
  let [a, b] = input[i].trim().split(' ').map(Number);
  friends[a][b] = 1;
  friends[b][a] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (friends[i][j] > friends[i][k] + friends[k][j]) {
        friends[i][j] = friends[i][k] + friends[k][j];
      }
    }
  }
}

let scores = [];
let minScore = Infinity;
for (let i = 1; i <= N; i++) {
  let score = 0;
  for (let j = 1; j <= N; j++) {
    score = Math.max(score, friends[i][j]);
  }
  scores[i] = score;
  minScore = Math.min(minScore, score);
}

let candidates = [];
for (let i = 1; i <= N; i++) {
  if (minScore === scores[i]) candidates.push(i);
}

console.log(minScore, candidates.length);
console.log(candidates.join(' '));
