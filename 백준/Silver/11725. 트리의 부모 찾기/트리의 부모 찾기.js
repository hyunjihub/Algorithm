const fs = require('fs');
let [N, ...nodes] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let tree = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < N - 1; i++) {
  nodes[i] = nodes[i].trim().split(' ').map(Number);
  tree[nodes[i][0]].push(nodes[i][1]);
  tree[nodes[i][1]].push(nodes[i][0]);
}

let visited = Array.from({ length: N + 1 }, () => false);
let queue = [1];
let parent = [null, null];

while (queue.length > 0) {
  let current = queue.shift();
  visited[current] = true;

  for (let i = 0; i < tree[current].length; i++) {
    let child = tree[current][i];
    if (!visited[child]) {
      queue.push(child);
      parent[child] = current;
    }
  }
}

console.log(parent.slice(2).join('\n'));
