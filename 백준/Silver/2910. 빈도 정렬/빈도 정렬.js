const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = parseInt(n.trim().split(' ')[0]);
let C = parseInt(n.trim().split(' ')[1]);

const sequence = input.trim().split(' ').map(Number);

let map = new Map();
for (let i = 0; i < N; i++) {
  if (map.has(sequence[i])) {
    map.set(sequence[i], map.get(sequence[i]) + 1);
  } else {
    map.set(sequence[i], 1);
  }
}

let array = Array.from(new Set(map.values()));
array.sort((a, b) => b - a);
let answer = '';

for (let i = 0; i < array.length; i++) {
  map.forEach((value, key) => {
    if (value === array[i]) {
      for (let j = 0; j < value; j++) {
        answer += key + ' ';
      }
    }
  });
}

console.log(answer.trim());
