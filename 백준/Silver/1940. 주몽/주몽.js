const fs = require('fs');
let [N, M, uid] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
M = Number(M);

uid = uid.trim().split(' ').map(Number);

let start = 0;
let end = 1;

let count = 0;
for (let i = start; i < uid.length; i++) {
  end = i + 1;
  if (uid[i] === 0) continue;
  while (true) {
    if (end >= uid.length) break;
    if (uid[end] !== 0) {
      if (uid[i] + uid[end] === M) {
        uid[i] = 0;
        uid[end] = 0;
        count++;
        break;
      }
    }
    end++;
  }
}

console.log(count);
