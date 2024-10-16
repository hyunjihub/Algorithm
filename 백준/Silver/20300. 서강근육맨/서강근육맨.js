const fs = require('fs');
let [N, t] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
t = t
  .trim()
  .split(' ')
  .map(BigInt)
  .sort((a, b) => (a > b ? 1 : -1));

let M = 0n;

if (N % 2 !== 0) {
  for (let i = 0; i < (N - 1) / 2; i++) {
    M = M > t[i] + t[N - i - 2] ? M : t[i] + t[N - i - 2];
  }
  M = M > t[N - 1] ? M : t[N - 1];
} else {
  for (let i = 0; i < N / 2; i++) {
    M = M > t[i] + t[N - i - 1] ? M : t[i] + t[N - i - 1];
  }
}

console.log(M.toString());
