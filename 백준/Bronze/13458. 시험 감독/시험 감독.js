const fs = require('fs');
let [N, A, n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [B, C] = n.trim().split(' ').map(Number);
N = Number(N);
A = A.trim().split(' ').map(Number);

let answer = 0;
for (let i = 0; i < N; i++) {
  let candidate = A[i];
  candidate -= B;
  answer++;

  if (candidate > 0) {
    answer += Math.ceil(candidate / C);
  }
}

console.log(answer);
