const fs = require('fs');
let [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

console.log(A + B);
