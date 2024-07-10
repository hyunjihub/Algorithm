const fs = require('fs');
let [N, elements] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
elements = elements.trim().split(' ').map(Number);

let max = 0;
function DFS(depth, sum, used) {
  if (depth === N) {
    let cal = 0;
    for (let i = 0; i < N - 1; i++) {
      cal += Math.abs(sum[i] - sum[i + 1]);
    }
    if (max < cal) max = cal;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!used[i]) {
      used[i] = true;
      DFS(depth + 1, [...sum, elements[i]], used);
      used[i] = false;
    }
  }
}

DFS(0, [], Array(N).fill(false));
console.log(max);
