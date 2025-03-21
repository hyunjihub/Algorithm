const fs = require('fs');
let [num, sequence] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, S] = num.trim().split(' ').map(Number);
sequence = sequence.split(' ').map(Number);

let left = 0;
let sum = 0;
let minLength = Infinity;

for (let right = 0; right < N; right++) {
  sum += sequence[right];

  while (sum >= S) {
    minLength = Math.min(minLength, right - left + 1);
    sum -= sequence[left];
    left++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);
