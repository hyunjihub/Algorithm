const fs = require('fs');
let [num, ...people] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, L, R] = num.trim().split(' ').map(Number);
people = people.map((i) => i.trim().split(' ').map(Number));

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let visited = Array.from({ length: N }, () => Array(N).fill(false));

function BFS(start) {
  let queue = [start];
  visited[start[0]][start[1]] = true;
  let route = [];

  let sum = 0;
  while (queue.length) {
    let [idY, idX] = queue.shift();
    sum += people[idY][idX];
    route.push([idY, idX]);

    for (let i = 0; i < 4; i++) {
      let newY = idY + move[i][0];
      let newX = idX + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < N && !visited[newY][newX]) {
        let diff = Math.abs(people[idY][idX] - people[newY][newX]);
        if (L <= diff && diff <= R) {
          queue.push([newY, newX]);
          visited[newY][newX] = true;
        }
      }
    }
  }

  if (route.length > 1) {
    let average = Math.floor(sum / route.length);

    for (let i = 0; i < route.length; i++) {
      people[route[i][0]][route[i][1]] = average;
    }
    return true;
  } else return false;
}

let count = 0;
while (true) {
  visited = Array.from({ length: N }, () => Array(N).fill(false));
  let isOpen = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        let result = BFS([i, j]);
        if (result) isOpen = true;
      }
    }
  }
  if (isOpen) count++;
  else break;
}

console.log(count);
