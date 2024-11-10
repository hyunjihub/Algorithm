const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
  let [u, v, c] = input[i].trim().split(' ').map(Number);
  graph[u][v] = c;
}

function bottleneckTSP(N, graph) {
  let minCost = Infinity;
  let minPath = [];

  function DFS(current, path, visited, maxCost) {
    if (path.length === N) {
      if (graph[current][path[0]] > 0 && graph[current][path[0]] <= maxCost) {
        let pathMaxCost = Math.max(
          ...path.slice(1).map((node, i) => graph[path[i]][path[i + 1]]),
          graph[current][path[0]]
        );
        if (pathMaxCost < minCost) {
          minCost = pathMaxCost;
          minPath = [...path];
        }
      }
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i] && graph[current][i] > 0 && graph[current][i] <= maxCost) {
        visited[i] = true;
        DFS(i, [...path, i], visited, maxCost);
        visited[i] = false;
      }
    }
  }

  // 이진 탐색을 통해 최소 최댓값을 찾기
  let low = 1;
  let high = 5000000;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let visited = Array(N + 1).fill(false);
    visited[1] = true;
    DFS(1, [1], visited, mid);

    if (minCost !== Infinity) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [minCost, minPath];
}

const [cost, path] = bottleneckTSP(N, graph);
if (cost === Infinity) console.log(-1);
else {
  console.log(cost);
  console.log(path.join(' '));
}
