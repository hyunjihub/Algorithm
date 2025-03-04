const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
input = input.map((i) => i.trim().split(' ').map(Number));
input.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let count = 0;
let endTime = 0;
for (let i = 0; i < N; i++) {
  if (input[i][0] >= endTime) {
    count++;
    endTime = input[i][1];
  }
}

console.log(count);
