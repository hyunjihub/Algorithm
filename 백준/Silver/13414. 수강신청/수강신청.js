const fs = require('fs');
let [num, ...studentId] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [K, L] = num.trim().split(' ').map(Number);

let set = new Set();
for (let i = 0; i < L; i++) {
  if (set.has(studentId[i].trim())) {
    set.delete(studentId[i].trim());
  }
  set.add(studentId[i].trim());
}

let student = Array.from(set).slice(0, K);
console.log(student.join('\n'));
