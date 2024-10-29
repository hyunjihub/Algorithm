const fs = require('fs');
let [N, ...W] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  W[i] = W[i].trim().split(' ').map(Number);
}

let dp = Array.from({ length: N }, () => Array(N).fill(Infinity));
let visited = Array(N).fill(false);
visited[0] = true;

function TSP(current, count, cost) {
  if (count === N) return W[current][0] !== 0 ? cost + W[current][0] : Infinity;

  if (dp[current][count] <= cost) return dp[current][count];
  dp[current][count] = cost;

  let minCost = Infinity;
  for (let i = 0; i < N; i++) {
    if (!visited[i] && W[current][i] !== 0) {
      visited[i] = true;
      minCost = Math.min(minCost, TSP(i, count + 1, cost + W[current][i]));
      visited[i] = false;
    }
  }

  return (dp[current][count] = minCost);
}

console.log(TSP(0, 1, 0));
