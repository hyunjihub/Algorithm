const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let index = 1;
let N = Number(input[0]);
let graph = Array.from({ length: N + 1 }, () => []);
let info = [];
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[index++].trim().split(' ').map(Number);
  info.push([a, b]);
  graph[a].push(b);
  graph[b].push(a);
}
let q = Number(input[index++]);

let dfsNum = Array(N + 1).fill(-1);
let low = Array(N + 1).fill(-1);
let parent = Array(N + 1).fill(-1);
let cutVertex = Array(N + 1).fill(false);
let bridges = [];

let dfsCounter = 0;

function dfs(u) {
  dfsNum[u] = low[u] = dfsCounter++;
  let children = 0;

  for (let v of graph[u]) {
    if (dfsNum[v] === -1) {
      parent[v] = u;
      children++;
      dfs(v);
      low[u] = Math.min(low[u], low[v]);

      if (parent[u] === -1 && children > 1) cutVertex[u] = true;
      if (parent[u] !== -1 && low[v] >= dfsNum[u]) cutVertex[u] = true;

      if (low[v] > dfsNum[u]) {
        bridges.push([u, v]);
      }
    } else if (v !== parent[u]) {
      low[u] = Math.min(low[u], dfsNum[v]);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (dfsNum[i] === -1) {
    dfs(i);
  }
}

let bridgeSet = new Set();
for (let [a, b] of bridges) {
  if (a > b) [a, b] = [b, a];
  bridgeSet.add(`${a} ${b}`);
}

let answer = '';
for (let i = 0; i < q; i++) {
  let [t, k] = input[index++].trim().split(' ').map(Number);
  if (t === 1) {
    answer += cutVertex[k] ? 'yes\n' : 'no\n';
  } else {
    let [a, b] = info[k - 1];
    if (a > b) [a, b] = [b, a];
    answer += bridgeSet.has(`${a} ${b}`) ? 'yes\n' : 'no\n';
  }
}

console.log(answer.trim());
