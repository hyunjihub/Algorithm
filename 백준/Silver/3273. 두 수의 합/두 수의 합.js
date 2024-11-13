const fs = require('fs');
let [n, num, x] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
num = num.trim().split(' ').map(Number);
x = Number(x);

let map = new Map();
for (let i = 0; i < n; i++) {
  map.set(num[i], i);
}

let count = 0;
for (let i = 0; i < n; i++) {
  if (map.has(x - num[i]) && map.get(x - num[i]) > i) {
    count++;
  }
}

console.log(count);
