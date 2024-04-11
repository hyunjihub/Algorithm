const fs = require('fs');
const [n_m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i in input) {
  input[i] = input[i].trim();
}

let N = input.splice(0, parseInt(n_m.split(' ')[0].trim()));
N = new Set(N);
let M = input.splice(0);

let answer = 0;
for (let i in M) {
  if (N.has(M[i])) {
    answer++;
  }
}

console.log(answer);
