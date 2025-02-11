const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let answer = '';
for (let i = 0; i < input.length; i++) {
  let n = input[i];

  let remainder = 1 % n; 
  let count = 1;        

  while (remainder !== 0) {
    remainder = (remainder * 10 + 1) % n; 
    count++; 
  }

  answer += count + '\n';
}

console.log(answer.trim());
