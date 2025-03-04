const fs = require('fs');
let [num, height] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = num.trim().split(' ').map(Number);
height = height.trim().split(' ').map(Number);

if (N === 1) {
  console.log(0);
} else {
  let diff = [];
  for (let i = 1; i < N; i++) {
    diff.push([height[i] - height[i - 1], i]);
  }

  diff.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return b[0] - a[0];
  });

  let diffLine = diff.slice(0, K - 1);
  diffLine.sort((a, b) => a[1] - b[1]);

  let min = 0;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < diffLine.length; i++) {
    max = diffLine[i][1] - 1;
    sum += height[max] - height[min];
    min = diffLine[i][1];
  }
  sum += height[N - 1] - height[min];
  console.log(sum);
}
