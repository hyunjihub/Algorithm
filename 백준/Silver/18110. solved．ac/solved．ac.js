const fs = require('fs');
let [n, ...level] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
level = level.map(Number);

if (n === 0) console.log(0);
else {
  level.sort((a, b) => a - b);

  let count = Math.round(n * 0.15);
  let sum = level.slice(count, level.length - count).reduce((acc, cur) => acc + cur, 0);
  console.log(Math.round(sum / (level.length - 2 * count)));
}
