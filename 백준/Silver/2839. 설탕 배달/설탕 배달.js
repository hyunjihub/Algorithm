const fs = require('fs');
let [N] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let max = Math.floor(N / 5);
let paperbag = -1;
while (true) {
  if (max < 0) break;
  if ((N - 5 * max) % 3 === 0) {
    paperbag = max + (N - 5 * max) / 3;
    break;
  }
  max--;
}

console.log(paperbag);
