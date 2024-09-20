const fs = require('fs');
let [n, H] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
H = H.trim().split(' ').map(Number);

let weight = new Set();

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function DFS(depth, prev, sum) {
  if (depth === M) {
    if (isPrime(sum)) {
      weight.add(sum);
    }
    return;
  }

  for (let i = prev + 1; i < H.length; i++) {
    DFS(depth + 1, i, sum + H[i]);
  }
}

for (let i = 0; i < H.length; i++) {
  DFS(1, i, H[i]);
}

if (weight.size === 0) {
  console.log(-1);
} else {
  weight = Array.from(weight).sort((a, b) => a - b);
  console.log(weight.join(' '));
}
