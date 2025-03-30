const fs = require('fs');
let [N, M, S] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
M = Number(M);

let pn = ['I'];
for (let i = 0; i < N; i++) {
  pn.push('O', 'I');
}

let count = 0;
while (true) {
  let idx = S.indexOf(pn.join(''));
  if (idx !== -1) {
    S = S.slice(idx + 2);
    count++;
  } else break;
}

console.log(count);
