const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

function getIsBalanced(str) {
  let stack = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === '(' || str[i] === '[') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']') {
      if (str[i] === ']') {
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else return false;
      } else {
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else return false;
      }
    }
  }
  return stack.length === 0;
}

input = input.slice(0, input.length - 1);
let answer = '';
for (let i = 0; i < input.length; i++) {
  if (getIsBalanced(input[i].trim())) answer += 'yes' + '\n';
  else answer += 'no' + '\n';
}

console.log(answer.trim());
