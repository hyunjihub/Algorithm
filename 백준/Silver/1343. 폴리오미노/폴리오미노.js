var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
let n = 0;
for (let i = 0; i < input.length; ) {
  n = 0;
  if (input.charAt(i) === '.') {
    answer += '.';
    i++;
  } else {
    while (true) {
      if (input.charAt(i) === '.' || i === input.length) break;
      if (n === 4) break;
      n++;
      i++;
    }
    if (n >= 2 && n % 2 === 0) {
      if (n - 4 >= 0) {
        answer += 'AAAA';
      } else {
        answer += 'BB';
      }
    } else {
      answer = '-1';
      break;
    }
  }
}

console.log(answer);
