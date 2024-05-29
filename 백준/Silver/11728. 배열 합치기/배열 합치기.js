const fs = require('fs');
let [input, ...arrays] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(input.trim().split(' ')[0]);
let M = Number(input.trim().split(' ')[1]);

let A = arrays[0].trim().split(' ').map(Number);
let B = arrays[1].trim().split(' ').map(Number);

function merge(A, B) {
  let indexA = 0;
  let indexB = 0;
  let sorted = [];
  while (true) {
    if (indexA !== A.length && indexB !== B.length) {
      if (A[indexA] <= B[indexB]) {
        sorted.push(A[indexA++]);
      } else {
        sorted.push(B[indexB++]);
      }
    }
    if (indexA === A.length) {
      sorted = [...sorted, ...B.slice(indexB)];
      break;
    } else if (indexB === B.length) {
      sorted = [...sorted, ...A.slice(indexA)];
      break;
    }
  }
  return sorted;
}

console.log(merge(A, B).join(' '));
