const fs = require('fs');
let [...data] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

data = data.slice(0, data.length - 1).map((i) => i.trim());

function getUnbalancedCount(str) {
  let stack = [];
  let unbalancedRight = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push('{');
    } else if (str[i] === '}') {
      if (stack.length) {
        stack.pop();
      } else {
        unbalancedRight++;
      }
    }
  }
  return Math.ceil(stack.length / 2) + Math.ceil(unbalancedRight / 2);
}

let answer = '';
for (let i = 0; i < data.length; i++) {
  let count = getUnbalancedCount(data[i]);
  if (count === 0) {
    answer += `${i + 1}. 0`;
  } else {
    answer += `${i + 1}. ${count}`;
  }
  answer += '\n';
}

console.log(answer.trim());
