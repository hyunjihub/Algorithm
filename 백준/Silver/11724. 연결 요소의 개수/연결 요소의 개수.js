const fs = require('fs');
let [n, ...edge] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [node1, node2] = edge[i].trim().split(' ').map(Number);

  graph[node1].push(node2);
  graph[node2].push(node1);
}

let visited = Array.from({ length: N + 1 }, () => false);
let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    let queue = [];
    let head = 0;
    queue.push(i);

    while (head < queue.length) {
      let current = queue[head++];
      visited[current] = true;
      for (let j = 0; j < graph[current].length; j++) {
        if (!visited[graph[current][j]]) {
          queue.push(graph[current][j]);
          visited[graph[current][j]] = true;
        }
      }
    }
    count++;
  }
}

console.log(count);
