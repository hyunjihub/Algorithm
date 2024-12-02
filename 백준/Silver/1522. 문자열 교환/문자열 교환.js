var fs = require('fs');
let str = fs.readFileSync(0, 'utf-8').toString().trim();

str = str.split('');
let aCount = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    aCount++;
  }
}

let circular = str.concat(str);
let currentBCount = 0;
for (let i = 0; i < aCount; i++) {
  if (str[i] === 'b') {
    currentBCount++;
  }
}

let min = currentBCount;

for (let i = 1; i < str.length; i++) {
  if (circular[i - 1] === 'b') {
    currentBCount--;
  }
  if (circular[i + aCount - 1] === 'b') {
    currentBCount++;
  }
  min = Math.min(currentBCount, min);
}

console.log(min);
