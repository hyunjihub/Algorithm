const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let str = '';
let infected = true;
let answer = '';
let index = 0;

for (let i = 0; i < n; i++) {
  infected = true;
  str = input[i].trim();
  if (
    str
      .replaceAll('A', '')
      .replaceAll('B', '')
      .replaceAll('C', '')
      .replaceAll('D', '')
      .replaceAll('E', '')
      .replaceAll('F', '') !== ''
  ) {
    infected = false;
  } else {
    if (str.charAt(0) === 'A') {
      index = 0;
      while (str.charAt(index) === 'A') {
        index++;
      }
      if (str.charAt(index) === 'F') {
        while (str.charAt(index) === 'F') {
          index++;
        }
        if (str.charAt(index) === 'C') {
          while (str.charAt(index) === 'C') {
            index++;
          }
          if (str.length - index > 1) infected = false;
        } else infected = false;
      } else infected = false;
    } else {
      if (str.charAt(1) === 'A') {
        index = 2;
        while (str.charAt(index) === 'A') {
          index++;
        }
        if (str.charAt(index) === 'F') {
          while (str.charAt(index) === 'F') {
            index++;
          }
          if (str.charAt(index) === 'C') {
            while (str.charAt(index) === 'C') {
              index++;
            }
            if (str.length - index > 1) infected = false;
          } else infected = false;
        } else infected = false;
      } else infected = false;
    }
  }
  if (infected) {
    answer += 'Infected!' + '\n';
  } else {
    answer += 'Good' + '\n';
  }
}

console.log(answer.trim());
