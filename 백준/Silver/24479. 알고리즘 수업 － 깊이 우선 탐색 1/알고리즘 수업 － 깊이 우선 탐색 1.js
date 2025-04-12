const fs = require('fs');
let [num, ...nodes] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M, R] = num.trim().split(' ').map(Number);
nodes = nodes.map((i) => i.trim().split(' ').map(Number));

let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  let [u, v] = nodes[i];
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array.from({ length: N + 1 }, () => false);
visited[R] = true;

let order = Array.from({ length: N + 1 }, () => 0);
order[R] = 1;
let count = 2;

function DFS(current) {
  for (let i = 0; i < graph[current].length; i++) {
    if (!visited[graph[current][i]]) {
      visited[graph[current][i]] = true;
      order[graph[current][i]] = count++;
      DFS(graph[current][i]);
    }
  }
}

DFS(R);

console.log(order.slice(1).join('\n'));
