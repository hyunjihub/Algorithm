const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M, K, X] = n.trim().split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [a, b] = input[i].trim().split(' ').map(Number);
  graph[a].push(b);
}

let distance = Array.from({ length: N + 1 }, () => -1);
distance[X] = 0;
let queue = [X];

while (queue.length > 0) {
  let to = queue.shift();

  for (let i = 0; i < graph[to].length; i++) {
    let next = graph[to][i];
    if (distance[next] === -1) {
      distance[next] = distance[to] + 1;
      queue.push(next);
    }
  }
}

let answer = '';
for (let i = 1; i <= N; i++) {
  if (distance[i] === K) answer += i + '\n';
}

console.log(answer === '' ? '-1' : answer.trim());
