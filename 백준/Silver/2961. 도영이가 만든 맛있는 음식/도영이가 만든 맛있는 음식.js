const fs = require('fs');
let [N, ...ingredients] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  ingredients[i] = ingredients[i].trim().split(' ').map(Number);
}

let min = Infinity;
function DFS(sour, bitter, prev) {
  let diff = Math.abs(sour - bitter);
  if (min > diff) min = diff;

  for (let i = prev + 1; i < N; i++) {
    DFS(sour, bitter, i);
    DFS(sour * ingredients[i][0], bitter + ingredients[i][1], i);
  }
}

for (let i = 0; i < N; i++) {
  DFS(ingredients[i][0], ingredients[i][1], i);
}

console.log(min);
