const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let N = input[0];
let M = input[1];

let dp = Array.from({ length: 101 }, () => Array(101).fill(-1));

if (N > M) {
  [N, M] = [M, N];
}

function recursion(x, y) {
  if (x === 0 || y === 0 || x > y) {
    return 0;
  }

  if (x === 1 && y === 1) {
    return 2;
  }

  if (dp[x][y] !== -1) {
    return dp[x][y];
  }

  dp[x][y] = 0;

  for (let i = 1; i <= Math.floor(y / 2); i++) {
    let temp = recursion(i, y - i);

    if (temp === 0 || temp === 2) {
      return (dp[x][y] = 1);
    }
  }

  for (let i = 1; i <= Math.floor(x / 2); i++) {
    let temp = recursion(i, x - i);

    if (temp === 0 || temp === 2) {
      return (dp[x][y] = 1);
    }
  }

  return dp[x][y];
}

console.log(recursion(N, M) === 1 ? 'A' : 'B');
