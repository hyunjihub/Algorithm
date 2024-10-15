const fs = require('fs');
let [K, ...lengths] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

K = Number(K);
for (let i = 0; i < lengths.length; i++) {
  lengths[i] = lengths[i].trim().split(' ').map(Number);
}

let set = new Set();
for (let i = 0; i < lengths.length; i++) {
  if (set.has(lengths[i][0])) set.delete(lengths[i][0]);
  else set.add(lengths[i][0]);
}

let max = 1;
for (let i = 0; i < lengths.length; i++) {
  if (set.has(lengths[i][0])) {
    max *= lengths[i][1];
  }
}

lengths = lengths.concat(lengths);
let min = 0;
if (set.has(4) && set.has(1)) {
  let current = 0;
  while (true) {
    if (lengths[current][0] === 3 && lengths[current + 1][0] === 2) break;
    current++;
  }
  min = lengths[current][1] * lengths[current + 1][1];
} else if (set.has(1) && set.has(3)) {
  let current = 0;
  while (true) {
    if (lengths[current][0] === 2 && lengths[current + 1][0] === 4) break;
    current++;
  }
  min = lengths[current][1] * lengths[current + 1][1];
} else if (set.has(2) && set.has(4)) {
  let current = 0;
  while (true) {
    if (lengths[current][0] === 1 && lengths[current + 1][0] === 3) break;
    current++;
  }
  min = lengths[current][1] * lengths[current + 1][1];
} else {
  let current = 0;
  while (true) {
    if (lengths[current][0] === 4 && lengths[current + 1][0] === 1) break;
    current++;
  }
  min = lengths[current][1] * lengths[current + 1][1];
}

console.log((max - min) * K);
