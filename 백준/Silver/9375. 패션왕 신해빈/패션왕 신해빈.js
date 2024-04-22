const fs = require('fs');
let [cases, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let n = 0;
let index = 0;
let dress_info = [];
let answer = '';
let sum = 1;
for (let i = 0; i < Number(cases); i++) {
  sum = 1;
  n = Number(input[index++].trim());
  let dress = new Map();
  let dress_type = new Set();
  for (let j = 0; j < n; j++) {
    dress_info = input[index++].trim().split(' ');
    dress_type.add(dress_info[1]);
    if (dress.has(dress_info[1])) {
      dress.set(dress_info[1], dress.get(dress_info[1]) + 1);
    } else {
      dress.set(dress_info[1], 1);
    }
  }

  if (dress.size === 1) {
    answer += n + '\n';
  } else {
    dress_type.forEach((type) => {
      sum *= Number(dress.get(type) + 1);
    });
    answer += sum - 1 + '\n';
  }
}
console.log(answer.trim());
