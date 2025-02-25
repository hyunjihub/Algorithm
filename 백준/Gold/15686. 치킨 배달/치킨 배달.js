const fs = require('fs');
let [input, ...town] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = input.trim().split(' ').map(Number);

let homes = [];
let chickenLocation = [];

for (let i = 0; i < N; i++) {
  town[i] = town[i].trim().split(' ').map(Number);
  for (let j = 0; j < N; j++) {
    if (town[i][j] === 2) chickenLocation.push([i, j]);
    else if (town[i][j] === 1) homes.push([i, j]);
  }
}

function getChickenDistance(location) {
  return homes.map(([hx, hy]) => Math.abs(location[0] - hx) + Math.abs(location[1] - hy));
}

function calChickenDistance(chicken) {
  let chickenDistance = Array.from({ length: homes.length }, () => Infinity);
  for (let i = 0; i < chicken.length; i++) {
    let tmp = getChickenDistance(chicken[i]);
    for (let k = 0; k < homes.length; k++) {
      chickenDistance[k] = Math.min(chickenDistance[k], tmp[k]);
    }
  }

  return chickenDistance.reduce((acc, cur) => acc + cur, 0);
}

if (chickenLocation.length === M) {
  console.log(calChickenDistance(chickenLocation));
} else {
  let minChickenDistance = Infinity;
  function DFS(depth, prev, current) {
    if (depth === M) {
      minChickenDistance = Math.min(minChickenDistance, calChickenDistance(current));
      return;
    }

    for (let i = prev + 1; i < chickenLocation.length; i++) {
      DFS(depth + 1, i, [...current, chickenLocation[i]]);
    }
  }

  for (let i = 0; i < chickenLocation.length; i++) {
    DFS(1, i, [chickenLocation[i]]);
  }
  console.log(minChickenDistance);
}
