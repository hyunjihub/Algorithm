const fs = require('fs');
let [a, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, m] = a.trim().split(' ').map(Number);
let index = 0;
let answer = [];

for (let i = 0; i < n; i++) {
  let [p, l] = input[index++].trim().split(' ').map(Number);
  let mileage = input[index++].trim().split(' ').map(Number);
  mileage.sort((a, b) => b - a);
  if (p >= l) {
    mileage = mileage.slice(0, l);
  }
  answer.push(mileage.length < l ? 1 : mileage[mileage.length - 1]);
}

answer.sort((a, b) => a - b);
let sum = 0;
let count = 0;
for (let i = 0; i < answer.length; i++) {
  if (sum + answer[i] > m) break;
  sum += answer[i];
  count++;
}

console.log(count);
