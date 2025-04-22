const fs = require('fs');
let [C, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

C = Number(C);
let index = 0;
let s = [];
let max = 0;

function DFS(score, count, visited) {
  if (count === 11) {
    max = Math.max(max, score);
    return;
  }

  for (let i = 0; i < 11; i++) {
    if (!visited[i] && s[i][count] !== 0) {
      visited[i] = true;
      DFS(score + s[i][count], count + 1, visited);
      visited[i] = false;
    }
  }
}

for (let i = 0; i < C; i++) {
  s = [];
  max = 0;
  for (let j = 0; j < 11; j++) {
    s.push(input[index++].trim().split(' ').map(Number));
  }

  DFS(0, 0, Array(11).fill(false));
  console.log(max);
}
