const fs = require('fs');
let [num, height] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let [N, M] = num.split(' ').map(Number);
height = height.trim().split(' ').map(Number);
height.sort((a, b) => a - b);

let left = 0;
let right = height[N - 1];

function cutTree(length) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (height[i] > length) {
      sum += height[i] - length;
    }
  }
  return sum;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (cutTree(mid) >= M) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
