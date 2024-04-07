var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

let str = '';
let answer = 0;
let diff = 0;
let isTrue = true;
for (let i = 1; i <= parseInt(input); i++) {
  isTrue = true;
  str = i.toString();
  if (str.length <= 2) {
    answer++;
  } else {
    diff = parseInt(str.charAt(1)) - parseInt(str.charAt(0));
    for (let j = 2; j < str.length; j++) {
      if (diff !== parseInt(str.charAt(j)) - parseInt(str.charAt(j - 1))) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      answer++;
    }
  }
}

console.log(answer);
