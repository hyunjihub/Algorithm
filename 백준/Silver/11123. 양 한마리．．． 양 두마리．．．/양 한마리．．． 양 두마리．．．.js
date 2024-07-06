const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let k = 0; k < T; k++) {
  let n = input[index++].trim();
  let H = Number(n.split(' ')[0]);
  let W = Number(n.split(' ')[1]);

  let visited = Array.from({ length: H }, () => Array(W).fill(false));
  let grassland = [];
  for (let i = 0; i < H; i++) {
    grassland.push(input[index++].trim().split(''));
  }

  function DFS(prev) {
    let [x, y] = prev;
    if (x !== H - 1 && !visited[x + 1][y] && grassland[x + 1][y] === '#') {
      visited[x + 1][y] = true;
      DFS([x + 1, y]);
    }
    if (x !== 0 && !visited[x - 1][y] && grassland[x - 1][y] === '#') {
      visited[x - 1][y] = true;
      DFS([x - 1, y]);
    }
    if (y !== W - 1 && !visited[x][y + 1] && grassland[x][y + 1] === '#') {
      visited[x][y + 1] = true;
      DFS([x, y + 1]);
    }
    if (y !== 0 && !visited[x][y - 1] && grassland[x][y - 1] === '#') {
      visited[x][y - 1] = true;
      DFS([x, y - 1]);
    }
  }

  let count = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (grassland[i][j] === '#' && !visited[i][j]) {
        visited[i][j] = true;
        DFS([i, j]);
        count++;
      }
    }
  }
  console.log(count);
}
