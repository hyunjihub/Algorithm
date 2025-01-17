const fs = require('fs');
let [n, ...prerequisites] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
let inDegree = Array.from({ length: N + 1 }, () => 0);
let semester = Array.from({ length: N + 1 }, () => 0);

for (let i = 0; i < prerequisites.length; i++) {
  let [A, B] = prerequisites[i].trim().split(' ').map(Number);
  graph[A].push(B);
  inDegree[B]++;
}

let queue = [];
for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
    semester[i] = 1;
  }
}

while (queue.length) {
  let current = queue.shift();

  for (let i = 0; i < graph[current].length; i++) {
    inDegree[graph[current][i]]--;
    if (inDegree[graph[current][i]] === 0) {
      queue.push(graph[current][i]);
      semester[graph[current][i]] = semester[current] + 1;
    }
  }
}

console.log(semester.slice(1).join(' '));
