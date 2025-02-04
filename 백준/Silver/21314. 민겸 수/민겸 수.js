var fs = require('fs');
let minkyeom = fs.readFileSync(0, 'utf-8').toString().trim();

let min = '';
let max = '';

function getMax() {
  let count = 0;
  for (let i = 0; i < minkyeom.length; i++) {
    if (minkyeom[i] === 'M') {
      count++;
    } else {
      if (count > 0) {
        max += '5' + '0'.repeat(count);
      } else {
        max += '5';
      }
      count = 0;
    }
  }
  if (count > 0) {
    max += '1'.repeat(count);
  }
}

function getMin() {
  let count = 0;
  for (let i = 0; i < minkyeom.length; i++) {
    if (minkyeom[i] === 'M') {
      count++;
    } else {
      if (count > 0) {
        min += '1' + '0'.repeat(count - 1);
      }
      min += '5';
      count = 0;
    }
  }
  if (count > 0) {
    min += '1' + '0'.repeat(count - 1);
  }
}

getMax();
getMin();
console.log(max);
console.log(min);
