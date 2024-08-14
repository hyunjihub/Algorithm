const fs = require('fs');
let [N, ...friend] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let twoFriend = Array.from({ length: N }, () => 0);
let distance = Array.from({ length: N }, () => Array(N).fill(Infinity));

for (let i = 0; i < N; i++) {
  friend[i] = friend[i].trim().split('');
  for (let j = 0; j < N; j++) {
    if (friend[i][j] === 'Y') distance[i][j] = 1;
  }
}

for (let mid = 0; mid < N; mid++) {
  for (let start = 0; start < N; start++) {
    for (let end = 0; end < N; end++) {
      if (start === end) continue;
      distance[start][end] = Math.min(distance[start][end], distance[start][mid] + distance[mid][end]);
    }
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (distance[i][j] <= 2) count++;
  }
  if (max < count) max = count;
}

console.log(max);
