const fs = require('fs');
let [num, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let [M, N, H] = num.split(' ').map(Number);

let graph = [];
for (let h = 0; h < H; h++) {
  let temp = input.slice(h * N, (h + 1) * N).map((line) => line.split(' ').map(Number));
  graph.push(temp);
}

let dx = [1, -1, 0, 0, 0, 0];
let dy = [0, 0, 1, -1, 0, 0];
let dz = [0, 0, 0, 0, 1, -1];

let queue = [];
let head = 0;

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[z][y][x] === 1) {
        queue.push([x, y, z]);
      }
    }
  }
}

let day = -1;
while (head < queue.length) {
  let len = queue.length - head;
  for (let i = 0; i < len; i++) {
    let [x, y, z] = queue[head++];
    for (let d = 0; d < 6; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];
      let nz = z + dz[d];
      if (
        nx >= 0 && nx < M &&
        ny >= 0 && ny < N &&
        nz >= 0 && nz < H &&
        graph[nz][ny][nx] === 0
      ) {
        graph[nz][ny][nx] = 1;
        queue.push([nx, ny, nz]);
      }
    }
  }
  day++;
}


let allRipe = true;
for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[z][y][x] === 0) allRipe = false;
    }
  }
}

console.log(allRipe ? day : -1);
