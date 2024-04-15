const fs = require('fs');
let [N, ...files] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let extensions = new Map();
let names = new Set();
let dot = 0;
let name = '';
for (let i = 0; i < N; i++) {
  dot = files[i].trim().indexOf('.');
  name = files[i].trim().substring(dot + 1);
  if (extensions.has(name)) {
    extensions.set(name, extensions.get(name) + 1);
  } else {
    extensions.set(name, 1);
  }
  names.add(name);
}

names = Array.from(names);
names.sort();
let answer = '';
names.map((key) => {
  answer += `${key} ${extensions.get(key)}` + '\n';
});

console.log(answer.trim());
