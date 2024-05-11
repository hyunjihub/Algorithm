var fs = require('fs');
let num = fs.readFileSync(0, 'utf-8').toString().trim();

let current = 1;
let index = 0;
while (true) {
  if (index >= num.length) break;
  number = current.toString().split('');
  for (let i = 0; i < number.length; i++) {
    if (number[i] === num.charAt(index)) {
      index++;
      if (index >= num.length) break;
    }
  }
  current++;
}

console.log(current - 1);