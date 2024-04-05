const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let binary = input[1];

let answer = 0;
for (let i = 0; i < N; i++) {
  if (binary.charAt(i) === '1') {
    answer++;
  }
}

console.log(answer);
