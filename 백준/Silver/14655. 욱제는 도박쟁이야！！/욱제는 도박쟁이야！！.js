const fs = require('fs');
let [N, ...rounds] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

rounds[0] = rounds[0].trim().split(' ').map(Number);
rounds[1] = rounds[1].trim().split(' ').map(Number);

let min_sum = 0;
let max_sum = 0;
for (let i = 0; i < Number(N); i++) {
  max_sum += Math.abs(rounds[0][i]);
  min_sum += Math.abs(rounds[1][i]) * -1;
}

console.log(max_sum - min_sum);
