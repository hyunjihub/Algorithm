const fs = require('fs');
let [N, left] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
left = left.trim().split(' ').map(Number);

let line = Array(N).fill(null);
line[left[0]] = 1;

for (let i = 1; i < N; i++) {
  let count = left[i];
  let index = 0;

  for (let j = 0; j < N; j++) {
    if (line[j] === null) {
      if (count === 0) {
        index = j;
        break;
      }
      count--;
    }
  }

  line[index] = i + 1;
}

console.log(line.join(' '));
