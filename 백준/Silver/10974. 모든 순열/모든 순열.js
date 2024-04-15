const fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = parseInt(N);
let checked = Array.from({ length: N }, () => false);
let sequence = [];
let permutation = [];

DFS(0);

console.log(sequence.toString().replaceAll(',', '\n'));

function DFS(depth) {
  if (depth === N) {
    sequence.push(permutation.slice().join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!checked[i]) {
      permutation.push(i + 1);
      checked[i] = true;
      DFS(depth + 1);
      permutation.pop();
      checked[i] = false;
    }
  }
}
