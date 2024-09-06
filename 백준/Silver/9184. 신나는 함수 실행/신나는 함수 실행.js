const fs = require('fs');
let [...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = input.length - 1;
let abc = [];
for (let i = 0; i < N; i++) {
  let [a, b, c] = input[i].trim().split(' ').map(Number);
  abc.push([a, b, c]);
}

let dp = new Map();

function recursion(a, b, c) {
  let key = `${a} ${b} ${c}`;

  if (dp.has(key)) return dp.get(key);

  let result;

  if (a <= 0 || b <= 0 || c <= 0) {
    result = 1;
  } else if (a > 20 || b > 20 || c > 20) {
    result = recursion(20, 20, 20);
  } else if (a < b && b < c) {
    result = recursion(a, b, c - 1) + recursion(a, b - 1, c - 1) - recursion(a, b - 1, c);
  } else {
    result =
      recursion(a - 1, b, c) + recursion(a - 1, b - 1, c) + recursion(a - 1, b, c - 1) - recursion(a - 1, b - 1, c - 1);
  }

  dp.set(key, result);
  return result;
}

let answer = '';
for (let i = 0; i < N; i++) {
  let key = `${abc[i][0]} ${abc[i][1]} ${abc[i][2]}`;
  answer += `w(${abc[i][0]}, ${abc[i][1]}, ${abc[i][2]}) = `;
  if (dp.has(key)) answer += dp.get(key) + '\n';
  else answer += recursion(abc[i][0], abc[i][1], abc[i][2]) + '\n';
}

console.log(answer.trim());
