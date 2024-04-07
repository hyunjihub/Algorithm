const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let map = new Map();

for (let i = 0; i < parseInt(n); i++) {
  if (map.has(input[i].trim())) {
    map.set(input[i].trim(), map.get(input[i].trim()) + 1);
  } else {
    map.set(input[i].trim(), 1);
  }
}

let max = 0;
map.forEach((value, key) => {
  if (value > max) max = value;
});

let answer = [];
map.forEach((value, key) => {
  if (value === max) {
    answer.push(key);
  }
});

answer.sort();
console.log(answer[0]);
