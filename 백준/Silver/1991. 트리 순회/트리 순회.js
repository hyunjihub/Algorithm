const fs = require('fs');
let [N, ...node] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let map = new Map();
for (let i = 0; i < N; i++) {
  let [root, left, right] = node[i].trim().split(' ');

  map.set(root, [left, right]);
}

function preorder(traversal, parent) {
  if (parent === '.') return;

  traversal.push(parent);
  preorder(traversal, map.get(parent)[0]);
  preorder(traversal, map.get(parent)[1]);
}

function inorder(traversal, parent) {
  if (parent === '.') return;

  inorder(traversal, map.get(parent)[0]);
  traversal.push(parent);
  inorder(traversal, map.get(parent)[1]);
}

function postorder(traversal, parent) {
  if (parent === '.') return;

  postorder(traversal, map.get(parent)[0]);
  postorder(traversal, map.get(parent)[1]);
  traversal.push(parent);
}

let preorderArr = [];
preorder(preorderArr, 'A');
let inorderArr = [];
inorder(inorderArr, 'A');
let postorderArr = [];
postorder(postorderArr, 'A');

console.log(preorderArr.join('') + '\n' + inorderArr.join('') + '\n' + postorderArr.join(''));
