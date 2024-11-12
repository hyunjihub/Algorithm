const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);

let title = [];
let usedLimit = new Set();
let index = 0;
for (let i = 0; i < N; i++) {
  let [name, limit] = input[index++].trim().split(' ');
  limit = Number(limit);
  if (!usedLimit.has(limit)) {
    title.push([name, limit]);
    usedLimit.add(limit);
  }
}

let answer = '';

for (let i = 0; i < M; i++) {
  let power = Number(input[index++]);
  let current = '';

  let left = 0;
  let right = title.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (power <= title[mid][1]) {
      current = title[mid][0];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  answer += current + '\n';
}

console.log(answer.trim());
