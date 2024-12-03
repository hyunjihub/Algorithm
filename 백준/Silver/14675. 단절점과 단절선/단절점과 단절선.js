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

let answer = '';
for (let i = 0; i < q; i++) {
  let [t, k] = input[index++].trim().split(' ').map(Number);
  if (t === 1) {
    if (graph[k].length >= 2) answer += 'yes' + '\n';
    else answer += 'no' + '\n';
  } else {
    answer += 'yes' + '\n';
  }
}

console.log(answer.trim());
