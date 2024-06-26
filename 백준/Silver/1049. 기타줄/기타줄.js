const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let minEach = Infinity;
let minPackage = Infinity;
let set = Math.ceil(N / 6);
let mod = N - (set - 1) * 6;
for (let i = 0; i < M; i++) {
  let [package, each] = input[i].trim().split(' ').map(Number);
  if (minEach > each) minEach = each;
  if (minPackage > package) minPackage = package;
}

console.log(Math.min(minPackage * set, N * minEach, minPackage * (set - 1) + mod * minEach));
