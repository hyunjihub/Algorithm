const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let stack = [];
let answer = '';
for (let i = 0; i < T; i++) {
  stack = [];
  let PS = input[i].trim();
  for (let j = 0; j < PS.length; j++) {
    if (stack.length === 0) {
      stack.push(PS.charAt(j));
    } else if (PS.charAt(j) === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(PS.charAt(j));
    }
  }
  if (stack.length === 0) answer += 'YES' + '\n';
  else answer += 'NO' + '\n';
}
console.log(answer.trim());
