const fs = require('fs');
let [a, c, n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let a1 = Number(a.trim().split(' ')[0]);
let a0 = Number(a.trim().split(' ')[1]);

c = Number(c);
n = Number(n);

console.log(a1 * n + a0 <= c * n && a1 <= c ? 1 : 0);
