const fs = require('fs');
let [n, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, L, R, X] = n.trim().split(' ').map(Number);
A = A.trim().split(' ').map(Number);
A.sort((a, b) => a - b);

let problem = new Set();

function DFS(prev, level, problems) {
  if (level > R) return;
  if (problems.length >= 2) {
    if (level >= L && A[problems[problems.length - 1]] - A[problems[0]] >= X) {
      problem.add(problems.join(' '));
    }
  }

  for (let i = prev + 1; i < N; i++) {
    if (level + A[i] <= R) DFS(i, level + A[i], [...problems, i]);
  }
}

for (let i = 0; i < N; i++) {
  DFS(i, A[i], [i]);
}

console.log(problem.size);
