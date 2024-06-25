const fs = require('fs');
let [n, visitants] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let visitant = visitants.trim().split(' ').map(Number);

const N = Number(n.trim().split(' ')[0]);
const X = Number(n.trim().split(' ')[1]);
let max = 0;
let count = 0;
let sum = 0;

for (let i = 0; i < visitant.length; i++) {
  if (i < X - 1) {
    sum += visitant[i];
  } else if (i === X - 1) {
    sum += visitant[i];
    max = sum;
    count = 1;
  } else {
    sum += visitant[i];
    sum -= visitant[i - X];
    if (sum > max) {
      max = sum;
      count = 1;
    } else if (sum === max) {
      count++;
    }
  }
}

if (max === 0) {
  console.log('SAD');
} else {
  console.log(max);
  console.log(count);
}
