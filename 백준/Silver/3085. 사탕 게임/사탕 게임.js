const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split('');
}
let max = 0;

function getMaxCandies() {
  let maxCandies = 0;

  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 1; j < N; j++) {
      if (input[i][j] === input[i][j - 1]) {
        count++;
      } else {
        maxCandies = Math.max(maxCandies, count);
        count = 1;
      }
    }
    maxCandies = Math.max(maxCandies, count);
  }

  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 1; j < N; j++) {
      if (input[j][i] === input[j - 1][i]) {
        count++;
      } else {
        maxCandies = Math.max(maxCandies, count);
        count = 1;
      }
    }
    maxCandies = Math.max(maxCandies, count);
  }

  return maxCandies;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j + 1 < N && input[i][j] !== input[i][j + 1]) {
      [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
      max = Math.max(max, getMaxCandies());
      [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
    }

    if (i + 1 < N && input[i][j] !== input[i + 1][j]) {
      [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
      max = Math.max(max, getMaxCandies());
      [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
    }
  }
}

console.log(max);
