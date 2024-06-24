const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let map = new Map();
let index = 0;
for (let i = 0; i < N; i++) {
  let name = input[index++].trim();
  if (map.has(name)) map.set(name, map.get(name) + 1);
  else map.set(name, 1);
}
for (let i = 0; i < M; i++) {
  let name = input[index++].trim();
  if (map.has(name)) map.set(name, map.get(name) + 1);
  else map.set(name, 1);
}

let array = Array.from(map);
let count = 0;
let sorted = [];
for (let i = 0; i < array.length; i++) {
  if (array[i][1] === 2) {
    count++;
    sorted.push(array[i][0]);
  }
}

sorted.sort();

console.log(`${count}` + '\n' + `${sorted.join('\n')}`);
