const fs = require('fs');
let [info, ...friends] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = info.split(' ').map(Number);
let friend = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
  let [A, B] = friends[i].split(' ').map(Number);
  friend[A][B] = 1;
  friend[B][A] = 1;
}

function getKevinBacon(start) {
  let visited = Array(N + 1).fill(false);
  let queue = [[start, 0]];
  visited[start] = true;
  let totalDistance = 0;

  while (queue.length) {
    let [current, distance] = queue.shift();
    totalDistance += distance;

    for (let i = 1; i <= N; i++) {
      if (!visited[i] && friend[current][i] === 1) {
        visited[i] = true;
        queue.push([i, distance + 1]);
      }
    }
  }

  return totalDistance;
}

let KevinBacon = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  KevinBacon[i] = getKevinBacon(i);
}

let minBacon = Math.min(...KevinBacon.slice(1));
let person = KevinBacon.indexOf(minBacon);
console.log(person);
