const fs = require('fs');
let [n, colors] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let X = Number(n.trim().split(' ')[0]);
let K = Number(n.trim().split(' ')[1]);
colors = colors.split(' ').map(Number);

let left = new Map();
let right = new Map();
for (let i = 0; i < colors.length; i++) {
  if (i < X) {
    if (left.has(colors[i])) left.set(colors[i], left.get(colors[i]) + 1);
    else left.set(colors[i], 1);
  } else {
    if (right.has(colors[i])) right.set(colors[i], right.get(colors[i]) + 1);
    else right.set(colors[i], 1);
  }
}

let count = 0;
left.forEach((value, key) => {
  if (right.has(key)) {
    count += right.get(key) * value;
  }
});

console.log(X ** 2 - count);
