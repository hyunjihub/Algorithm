const fs = require('fs');
const [num, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M, K] = num.trim().split(' ').map(Number);
let A = input.slice(0, N).map((row) => row.trim().split(' ').map(Number));
let info = input.slice(N).map((i) => i.trim().split(' ').map(Number));

let ground = Array.from({ length: N }, () => Array.from({ length: N }, () => [5, []]));

for (let i = 0; i < M; i++) {
  let [x, y, z] = info[i];
  ground[x - 1][y - 1][1].push(z);
}

let adjacent = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function spring() {
  let oldTrees = Array.from({ length: N }, () => Array.from({ length: N }, () => []));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ground[i][j][1].sort((a, b) => a - b);
      let { newTrees, die } = ground[i][j][1].reduce(
        (acc, tree) => {
          if (ground[i][j][0] >= tree) {
            ground[i][j][0] -= tree;
            acc.newTrees.push(tree + 1);
          } else {
            acc.die.push(tree);
          }
          return acc;
        },
        { newTrees: [], die: [] }
      );

      ground[i][j][1] = newTrees;
      oldTrees[i][j] = die;
    }
  }

  return oldTrees;
}

function summer(trees) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < trees[i][j].length; k++) {
        ground[i][j][0] += Math.floor(trees[i][j][k] / 2);
      }
    }
  }
}

function fall() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < ground[i][j][1].length; k++) {
        if (ground[i][j][1][k] % 5 === 0) {
          for (let l = 0; l < 8; l++) {
            let newY = i + adjacent[l][0];
            let newX = j + adjacent[l][1];

            if (newY >= 0 && newY < N && newX >= 0 && newX < N) {
              ground[newY][newX][1].push(1);
            }
          }
        }
      }
    }
  }
}

function winter() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ground[i][j][0] += A[i][j];
    }
  }
}

for (let i = 0; i < K; i++) {
  let oldTrees = spring();
  summer(oldTrees);
  fall();
  winter();
}

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    result += ground[i][j][1].length;
  }
}
console.log(result);
