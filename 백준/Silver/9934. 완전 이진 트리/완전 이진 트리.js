const fs = require('fs');
let [K, order] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

K = Number(K);
order = order.trim().split(' ').map(Number);
const tree = Array.from({ length: K }, () => []);

function buildTree(arr, level) {
  if (arr.length === 0) return;

  let mid = Math.floor(arr.length / 2);
  tree[level].push(arr[mid]);

  buildTree(arr.slice(0, mid), level + 1);
  buildTree(arr.slice(mid + 1), level + 1);
}

buildTree(order, 0);

let answer = '';
for (let i = 0; i < K; i++) {
  answer += tree[i].join(' ') + '\n';
}

console.log(answer.trim());
