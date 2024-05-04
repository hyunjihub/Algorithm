const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

input = input.map(Number);

input.sort((a, b) => a - b);
console.log(input.join(" "));
