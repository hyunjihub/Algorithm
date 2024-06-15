const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let Array = [];

let getN = false;
for (let i = 0; i < input.length; i++) {
  if (input[i].trim() === '') continue;
  input[i] = input[i]
    .trim()
    .split(' ')
    .map((value, index) => {
      return Number(value.split('').reverse().join(''));
    });
  if (!getN) {
    input[i] = input[i].slice(1);
    getN = true;
  }
  Array.push(...input[i]);
}

Array.sort((a, b) => a - b);
console.log(Array.join('\n'));
