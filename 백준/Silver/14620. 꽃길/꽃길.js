const fs = require('fs');
let [N, ...prices] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let directions = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 0; i < N; i++) {
  prices[i] = prices[i].trim().split(' ').map(Number);
}

function isOverlap(x1, y1, x2, y2) {
  for (let [dx1, dy1] of directions) {
    for (let [dx2, dy2] of directions) {
      if (x1 + dx1 === x2 + dx2 && y1 + dy1 === y2 + dy2) {
        return true;
      }
    }
  }
  return false;
}

let minCost = Infinity;
let flower = Array.from({ length: N }, () => Array(N).fill(0));
for (let i = 1; i < N - 1; i++) {
  for (let j = 1; j < N - 1; j++) {
    let cost = 0;
    for (let [dx, dy] of directions) {
      cost += prices[i + dx][j + dy];
    }
    flower[i][j] = cost;
  }
}

for (let x1 = 1; x1 < N - 1; x1++) {
  for (let y1 = 1; y1 < N - 1; y1++) {
    let cost1 = flower[x1][y1];

    for (let x2 = 1; x2 < N - 1; x2++) {
      for (let y2 = 1; y2 < N - 1; y2++) {
        if (isOverlap(x1, y1, x2, y2)) continue;
        let cost2 = flower[x2][y2];

        for (let x3 = 1; x3 < N - 1; x3++) {
          for (let y3 = 1; y3 < N - 1; y3++) {
            if (isOverlap(x1, y1, x3, y3) || isOverlap(x2, y2, x3, y3)) continue;
            let cost3 = flower[x3][y3];

            let totalCost = cost1 + cost2 + cost3;
            if (totalCost < minCost) {
              minCost = totalCost;
            }
          }
        }
      }
    }
  }
}

console.log(minCost);
