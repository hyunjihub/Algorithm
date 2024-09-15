const fs = require('fs');
let [N, ...map] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

for (let i = 0; i < N; i++) {
  map[i] = map[i].trim().split(' ').map(Number);
}

let visited = Array.from({ length: N }, () => Array(N).fill(false));
let queue = [[0, 0]];
visited[0][0] = true;

while (queue.length > 0) {
  let current = queue.shift();
  let move = map[current[0]][current[1]];

  if (move === -1) break;
  if (current[0] + move < N && !visited[current[0] + move][current[1]]) {
    queue.push([current[0] + move, current[1]]);
    visited[current[0] + move][current[1]] = true;
  }
  if (current[1] + move < N && !visited[current[0]][current[1] + move]) {
    queue.push([current[0], current[1] + move]);
    visited[current[0]][current[1] + move] = true;
  }
}

console.log(visited[N - 1][N - 1] ? 'HaruHaru' : 'Hing');
